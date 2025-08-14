<template>
  <div>
    <!-- Carrusel -->
    <div class="ticker-wrapper" @click="modalAbierto = true">
      <div class="ticker" ref="ticker" :style="{ animationDuration: duracionAnimacion + 's' }">
        <div class="ticker-item" v-for="(item, index) in procesos" :key="index">
          <strong>{{ item.nombre }}</strong> - {{ item.definitivo }}
        </div>
        <div class="ticker-item" v-for="(item, index) in procesos" :key="'dup-' + index">
          <strong>{{ item.nombre }}</strong> - {{ item.definitivo }}
        </div>
      </div>
    </div>

    <div v-if="horariosImpugnacionActivos.length" class="relojes-container">
      <div
        v-for="(reloj, index) in horariosImpugnacionActivos"
        :key="index"
        class="reloj-container"
      >
        <div class="reloj-header">
          <span class="reloj-nombre">{{ reloj.nombre }}</span>
          <span
            class="status-dot"
            :class="{ activo: estaActivo(reloj.HoraInicio, reloj.HoraFin) }"
          ></span>
        </div>

        <TemporizadorComponent
          v-if="estaActivo(reloj.HoraInicio, reloj.HoraFin)"
          :horaFin="reloj.HoraFin"
        />
        <div v-else class="mensaje-inactivo">
          El horario de impugnación ha concluido.
          <div class="horarios-inactivos">
            <p>
              Inicia: {{ reloj.HoraInicio }}
            </p>
            <p>
              Finaliza: {{ reloj.HoraFin }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <span class="opcion-menu" style="margin-left: 1em;">Cierre aleatorio: {{ cierreAleatorio }}</span>


    <!-- Modal con la tabla -->
    <div v-if="modalAbierto" class="modal-overlay" @click.self="modalAbierto = false">
      <div class="modal-content">
        <div class="contenedor-tabla">
          <div class="header">
            <span class="opcion-menu">HORARIOS DE LIBERACIÓN: {{ fechaHorario }}</span>
            <div class="botones-paises">
              <p 
                class = 'ver-mas'
                :class="{activo: pais === paisActual}"
                v-for="pais in paisesDisponibles"
                :key="pais"
                @click="asignarProcesosDePais(pais)"
              >
                {{ pais }}
              </p>
            </div>
          </div>
          <div class="table-container scroll">
            <table class="tabla-horarios">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Operativo</th>
                  <th>Previo</th>
                  <th>Definitivo</th>
                  <th>Complementos</th>
                  <th>Reproceso</th>
                  <th>Regeneración</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in procesos" :key="index">
                  <td>{{ item.nombre }}</td>
                  <td>{{ item.operativo }}</td>
                  <td>{{ item.previo }}</td>
                  <td class="definitivo">{{ item.definitivo }}</td>
                  <td>{{ item.complementos }}</td>
                  <td style="color:red">{{ item.reproceso }}</td>
                  <td>{{ item.regeneracion }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button class="button-blue cerrar-btn" @click="modalAbierto = false">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import TemporizadorComponent from '@/components/Temporizador.vue'
export default {
  name: 'TickerHorarios',
  components: { TemporizadorComponent },
  data(){
      return{
        modalAbierto: false,
        duracionAnimacion: 40,
        horarioImpugnacion: {},
        cierreAleatorio: null,
        fechaHorario: null,
        paisActual: null,
        procesos: [],
        codigos: { mexico: 'MX', peru: 'PE', colombia: 'CO', centroamerica: 'CR' },
        lugar: null,
        horariosPorPais: {},       // ← Guardamos todos los países con sus horarios
        paisesDisponibles: []
      }
    },
    watch: {
      '$route.params.nombre': {
        immediate: true,
        handler(newVal) {
          this.lugar = this.codigos[newVal];
          this.fetchHorarios(newVal);
        },
      },
    },
    computed: {
      horariosImpugnacionActivos() {
        const horario = this.horarioImpugnacion
        // Si NO hay llaves intermedias (es decir, Display está a este nivel), lo ignoramos
        const tieneNiveles = Object.values(horario).some(v => typeof v === 'object' && v !== null);

        if (!tieneNiveles) return [];

        return Object.entries(horario)
          .map(([nombre, val]) => ({
            nombre,
            ...val,
          }));
      }
    },
    methods:{
      async fetchHorarios(pais) {
        try {
          this.horarioImpugnacion = {}
          this.procesos = []
          const countryCode = this.codigos[pais] || 'MX'
          const response = await fetch(process.env.VUE_APP_API_HORARIOS_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ txtCountry: countryCode })
          });

          const result = await response.json();
          if (response.ok && result.StatusCode === 200) {
            const data = result.Data || {};
            const primerPais = Object.keys(data)[0];
            // Guardamos HorarioImpugnacion solo del primer país
            this.horarioImpugnacion = data[primerPais]?.HorarioImpugnacion || {};

            // Guardamos todos los horarios por país
            this.horariosPorPais = {};
            this.paisesDisponibles = [];
            for (const [pais, valores] of Object.entries(data)) {
              this.paisesDisponibles.push(pais);
              this.horariosPorPais[pais] = valores.HorariosLiberacion || [];
            }

            // Inicializamos procesos con el primer país
            this.asignarProcesosDePais(primerPais);
          } else {
            this.procesos = []
            this.horariosPorPais = {}
            this.paisesDisponibles = []
            console.error('Error en la respuesta:', result.Message);
          }
        } catch (error) {
          this.procesos = []
          this.horariosPorPais = {}
          this.paisesDisponibles = []
          console.error('Error al obtener los horarios:', error);
        }
      },
      asignarProcesosDePais(pais) {
        const horarios = this.horariosPorPais[pais] || [];
        this.cierreAleatorio = horarios[0].CierreAleatorio;
        this.fechaHorario = horarios[0].Fecha;
        this.paisActual = pais;
        this.procesos = horarios.map(item => ({
          nombre: item.Producto,
          operativo: item.Operativo,
          previo: item.Previo,
          definitivo: item.Definitivo,
          complementos: item.Complementos,
          reproceso: item.Reproceso,
          regeneracion: item.Regeneracion
        }));
        this.duracionAnimacion = this.procesos.length * 3;
      },
      estaActivo(horaInicio, horaFin) {
        const ahora = new Date();
        const [hIni, mIni] = horaInicio.split(':').map(Number);
        const [hFin, mFin] = horaFin.split(':').map(Number);

        const inicio = new Date();
        inicio.setHours(hIni, mIni, 0, 0);

        const fin = new Date();
        fin.setHours(hFin, mFin, 0, 0);
        return ahora >= inicio && ahora <= fin;
      }

    }
}
</script>

<style scoped>
.ticker-wrapper {
  background: #919395;
  color: black;
  white-space: nowrap;
  padding: 8px 0;
  width: 100% !important;
}

.ticker {
  display: inline-flex;
  animation: scroll 20s linear infinite;
}

.relojes-container{
  display: flex;
  flex-direction: row;
}

.reloj-container {
  padding: 1rem;
  border-radius: 10px;
}

.reloj-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.status-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: red;
}

.status-dot.activo {
  background-color: green;
}

.ticker-item {
  flex: none;
  padding: 0 2rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
}

.ticker-wrapper:hover .ticker {
  animation-play-state: paused;
  cursor: pointer;
}

.modal-overlay {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.8);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: black;
  color: black;
  padding: 5px;
  border-radius: 10px;
  width: 100%;
  max-width: 1500px;
  max-height: 90vh;
  overflow-y: auto;
}

.cerrar-btn {
  margin: 2rem auto 0 auto;
  display: block;

}

.botones-paises{
  display: flex;
  flex-direction: row;
  gap: 1em;
}

.ver-mas {
  margin-top: 1em;
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
}

.activo {
  background-color: #00aeef;
  border: none !important
}

.horarios-inactivos{
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: space-around;
}

.contenedor-tabla {
    background-color: transparent;
    color: white;
    font-family: Arial, sans-serif;
    max-width: 100%;
    border-radius: 10px;
  }

  .contenedor-tabla p{
    font-family: 'Montserrat', sans-serif;
  }

  .opcion-menu{
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    cursor: pointer;
    font-size: 1.2em;
    font-weight: 700;
  }

  .opcion-menu i{
    font-size: 2.3em;
    color: #009ed8;
  }

  .table-container{
    width: 100%;
    
    border-radius: 10px;
    max-height: 70vh;
    overflow-y: auto;
  }

  .tabla-horarios{
    width: 100%; /* Ocupa todo el ancho disponible */
    border-collapse: collapse; /* Elimina el espacio entre bordes */
    background-color: transparent; /* Fondo blanco para toda la tabla */
    font-family: 'Montserrat', sans-serif;
    border-radius: 10px;
    overflow: hidden;
  }

  .tabla-horarios thead {/* Fondo gris claro para el encabezado */
    color: #00aeef;
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: black;
  }

  .tabla-horarios th, .tabla-horarios td {
    text-align: left; /* Alineación del texto */
    padding: 12px 1px; /* Espaciado interno */
    border-top: none;
    border-left: none;
    border-right: none;
  }


  .tabla-horarios tbody tr:last-child {
    border-bottom: none; /* Elimina la línea final si no quieres */
  }
  
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
    padding: 0 0.5em;
  }

  .header p{
    margin-bottom: 0;
  }
  
  .leyenda {
    display: flex;
    flex-direction: column;
  }

  .leyenda p{
    margin-top: 0;
  }
  
  .contenedor-horarios{
    display: flex;
    justify-content: space-between;
  }

  .inicio {
    color: green;
  }
  
  .fin {
    color: red;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
  }
  
  th, td {
    padding: 12px 8px;
    text-align: left;
  }

tr:hover {
  background-color: rgba(0, 158, 216, 0.4); /* azulito semitransparente */
}



  .scroll::-webkit-scrollbar {
    width: 8px; /* Ancho del scrollbar */
  }

  /* Estilo del track (fondo del scrollbar) */
  .scroll::-webkit-scrollbar-track {
    background: #f1f1f1; /* Color gris claro */
    border-radius: 10px; /* Orillas redondeadas */
  }

  /* Estilo del thumb (barra que se mueve) */
  .scroll::-webkit-scrollbar-thumb {
    background: #888; /* Color gris */
    border-radius: 10px; /* Orillas redondeadas */
  }

  /* Hover en el thumb (cuando pasas el mouse sobre la barra) */
  .scroll::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color gris oscuro */
  }
  
  .definitivo {
    background-color: #3795c0;
    text-align: center !important;
  }



@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}


@media (max-width: 768px) {

  .header{
    flex-direction: column;
  }

  .ticker-wrapper {
    width: 100%;
  }

  .relojes-container{
    display: flex;
    flex-direction: column;
  }
}
</style>
