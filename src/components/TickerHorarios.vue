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

    <!-- Modal con la tabla -->
    <div v-if="modalAbierto" class="modal-overlay" @click.self="modalAbierto = false">
      <div class="modal-content">
        <div class="contenedor-tabla">
          <div class="header">
            <span class="opcion-menu">HORARIOS DE LIBERACIÓN: {{ lugar }}</span>
            <div class="leyenda">
              <p><strong>CIERRE ALEATORIO:</strong> {{ cierreAleatorio }}</p>
              <span class="contenedor-horarios">
                <p class="inicio">🟩 Inicia: {{ inicio }}</p>
                <p class="fin">🟥 Finaliza: {{ fin }}</p>
              </span>
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
                  <td>{{ item.reproceso }}</td>
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
export default {
  name: 'TickerHorarios',
  data(){
      return{
        modalAbierto: false,
        duracionAnimacion: 40,
        cierreAleatorio: '', // antes era '13:57'
        inicio: '',
        fin: '',
        procesos: [],
        codigos: { mexico: 'MX', peru: 'PE', colombia: 'CO', centroamerica: 'CR' },
        lugar: null
      }
    },
    watch: {
      '$route.params.nombre': {
        immediate: true,
        handler(newVal) {
          this.lugar = this.codigos[newVal]; // Actualiza si cambia la ruta
          this.fetchHorarios(newVal);
        },
      },
    },
    methods:{
      async fetchHorarios(pais) {
        try {
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
            const data = result.Data?.[0] || {};
            const horarios = data.HorariosLiberacion || [];
            const horarioImpugnacion = data.HorarioImpugnacion || {};

            this.cierreAleatorio = horarios[0]?.CierreAleatorio || 'No disponible';
            this.inicio = horarioImpugnacion.HoraInicio || '00:00';
            this.fin = horarioImpugnacion.HoraFin || '00:00';

            // Mapear los datos a lo que espera tu tabla
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
          } else {
            console.error('Error en la respuesta:', result.Message);
          }
        } catch (error) {
          console.error('Error al obtener los horarios:', error);
        }
      }

    },
    mounted() {
      // Llama a la función cuando el componente se monta
      this.fetchHorarios(this.lugar);
    },
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
    max-height: 500px;
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
    color: white;
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
  .ticker-wrapper {
  width: 100%;
}
}
</style>
