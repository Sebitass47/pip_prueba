<template>
  <CentroNotificaciones/>
    <section>
      <CarruselServicios/>
      <div style="width: 100%; overflow: hidden;">
        <TickerHorarios/>
      </div>
      <article class="article-indicadores">
        <div class="grafica-container">
          <LineaChart :grafica="graficaInfo" :key="graficaKey"/>
        </div>
        <div class="indicadores">
          <h1>INDICADORES </h1>
          <div class="botones-indicadores-container" v-if="filiales[lugar]">
          <button
            v-for="(boton, index) in filiales[lugar].botones"
            :key="index"
            @click="fetchLugarData(boton.tipo)"
            :class="['boton-indicadores', { activo: boton.tipo === filtroActual }]"
          >
            {{ boton.texto }}
          </button>
        </div>
          <div class="table-container scroll">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Descripción</th>
                  <th>Actual</th>
                  <th>Anterior</th>
                  <th style='color: #da291c;'>Variación</th>
                </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in datos" :key="index" @click="cargarGrafica(item)" style="cursor: pointer;">
                <td>{{ item.dteDate }}</td>
                <td>{{ item.txtBenchmark }}</td>
                <td>{{ item.dblValue }}</td>
                <td>{{ item.dblChange }}</td>
                <td>
                  <i
                  :style="{
                    color: item.dblPerChange < 0 ? 'red' : item.dblPerChange > 0 ? 'green' : '#00b0f0'
                  }"
                  :class="item.dblPerChange < 0
                    ? 'bi bi-caret-down-fill'
                    : item.dblPerChange > 0
                    ? 'bi bi-caret-up-fill'
                    : 'bi bi-dash'"
                ></i>
                {{ item.dblPerChange }}

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </article>
      <article class='documentos'>
        <DocumentosFilial/>
      </article>
    </section>
  </template>
  
  <script>
  import TickerHorarios from '@/components/TickerHorarios.vue'
  import CentroNotificaciones from '@/components/CentroNotificaciones.vue'
  import DocumentosFilial from '@/components/DocumentosFilial.vue'
  import CarruselServicios from '@/components/CarruselServicios.vue';
  import LineaChart from "@/components/LineaChart.vue"; 
  export default {
    name: 'FilialPage',
    components: { TickerHorarios, CentroNotificaciones, DocumentosFilial, CarruselServicios, LineaChart
     },
    data() {
      return {
        graficaInfo: {
            titulo: "Seleccione una opción para mostrar la gráfica",
            datos: []
          },
        lugar: this.$route.params.nombre,
        datosCompletos: [],
        datos: [],
        grafica: {
          titulo: "Cargando...",
          datos: [{ plazo: 0, valor: 0 }], // Valores por defecto
        },
        filiales: {
          mexico: {
            botones: [
              { texto: "Tasa Interés", tipo: 'Tasa_Interes' },
              { texto: "Tasa Referencia", tipo: 'Tasa_Referencia' },
              { texto: "Tipo Cambio", tipo: 'Tipo_Cambio' },
              { texto: "Índices", tipo: 'Indices' }
            ],
            valor_default: 'Tasa_Interes'
          },
          colombia: {
            botones: [
              { texto: "Tasa Interés", tipo: 'Tasa_Interes' },
              { texto: "Tipo Cambio", tipo: 'Tipo_Cambio' },
              { texto: "Índices", tipo: 'Indices' }
            ],
            valor_default: 'Tasa_Interes'
          },
          centroamerica: {
            botones: [
              { texto: "Tasa Interés", tipo: 'Tasa_Interes' },
              { texto: "Tipo Cambio", tipo: 'Tipo_Cambio' }
            ],
            valor_default: 'Tasa_Interes'
          },
          peru: {
            botones: [
              { texto: "Tasas Pasivas MN", tipo: 'Tasa_Pasiva_MN' },
              { texto: "Tasas Pasivas ME", tipo: 'Tasa_Pasiva_ME' },
              { texto: "T.C Compra", tipo: 'Tipo_Cambio_Compra' },
              { texto: "T.C Venta", tipo: 'Tipo_Cambio_Venta' },
            ],
            valor_default: 'Tasa_Pasiva_MN'
          }
        },
        filtroActual: null,
        chartKey: 0,
      };
    },
    watch: {
      '$route.params.nombre': {
        immediate: true,
        handler(newVal) {
          this.lugar = newVal;
          this.graficaIngo = {
            titulo: "Seleccione una opción para mostrar la gráfica",
            datos: []
          }
          this.fetchLugarData(this.filiales[this.lugar]['valor_default']);
        },
      },
    },
    methods: {
      async fetchLugarData(tipo) {
        this.datos = [];
        this.graficaInfo = {
            titulo: "Seleccione una opción para mostrar la gráfica",
            datos: []
          }
        this.filtroActual = tipo;

        // Obtener país desde la ruta, convertir a código de país (ej. mexico -> MX)
        const paisRuta = this.$route.params.nombre.toLowerCase(); // por si viene en mayúsculas
        const mapaPaises = {
          mexico: "MX",
          colombia: "CO",
          peru: "PE",
          centroamerica: "CR"
          // agrega más si se necesitan
        };

        const countryCode = mapaPaises[paisRuta];
        if (!countryCode) {
          console.error(`País no soportado: ${paisRuta}`);
          this.datos = [];
          return;
        }

        if (tipo in this.datosCompletos){
          this.datos = this.datosCompletos[tipo]
          return
        }
        try {
          const response = await fetch(process.env.VUE_APP_API_INDICADORES_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ // ahora tipo ya es el número correcto
              txtCountry: countryCode
            })
          });

          const json = await response.json();

          if (json.StatusCode === 200) {
            this.datosCompletos = json.Data || []
            this.datos = this.datosCompletos[tipo] || [];
          } else {
            console.error("Error en la API:", json.Message || "Sin mensaje");
            this.datos = [];
          }
        } catch (error) {
          console.error("Error al hacer fetch:", error);
          this.datos = [];
        }
      },
      async cargarGrafica(item) {
      const payload = {
        txtCategory: item.intCategory,
        txtType: item.txtIRC,
        txtPlazo: item.txtPlazo,
      };

      try {
        const response = await fetch(process.env.VUE_APP_API_GRAFICA_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const result = await response.json();
        // Transforma los datos al formato que tu gráfica espera
        const graficaDatos = result.Data.map((punto) => ({
          plazo: punto.txtDate, // o el nombre que quieras mostrar
          valor: punto.dblValue,
        }));
        this.graficaInfo = {
          'titulo': item.txtBenchmark, 
          'datos': graficaDatos
        }
        this.graficaKey++;
      } catch (err) {
        console.error("Error al cargar gráfica:", err);
      }
    },

    },
    mounted() {
      // Llama a la función cuando el componente se monta
      this.fetchLugarData(this.filiales[this.lugar]['valor_default']);
    },
  };
  </script>

  <style scoped>
  section{
    background-color: #03010f;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .background-filiales {
    position: absolute;
    width: 100%;
    margin-top: -10px;
    height: 100vh;
    overflow: hidden;
    z-index: 2;
  }

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    /* width: 100%; */
    height: 100%;
    object-fit: cover; /* La imagen se adapta al tamaño del contenedor */
    z-index: -1; /* Asegúrate de que esté detrás del contenido */
  }

  .article-filiales{
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .article-filiales h1{
    margin-top: 7em;
    margin-left: 10rem;
    width: 50%;
    z-index: 3;
  }
  .article-filiales p {
    width: 45%;
    margin-left: 10rem;
    margin-bottom: 5em;
    z-index: 3;
  }

  .menu-filiales{
    display: grid;
    margin-left: 10rem;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    width: 80%;
    gap: 3em;
    z-index: 3;
    /* margin-top: 3em; */
  }

  .tabla-horarios{
    grid-column: span 2;
    padding: 0.5em 0 0 0 !important;
  }

  .documentos{
    width: 90%;
    margin-top: 5%;
    margin-bottom: 2em;
  }

  .opcion-menu{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    border-radius: 10px;
    border: 3px solid #009ed8;
    text-align: center;
    cursor: pointer;
    font-size: 1.2em;
    background-color: white;
    color: black;
    font-weight: 700;
  }

  .opcion-menu:hover{
    cursor: pointer;
  }

  .opcion-menu i{
    font-size: 2.3em;
    color: #009ed8;
  }

  .opcion-menu p{
    margin: 0 !important;
    text-align: center;
    width: 100%;
  }

  .article-indicadores{
    width: 80%;
    display: flex;
    margin-top: 5%;
  }

  .grafica-container{
    width: 40%;
    margin-right: 10px;
  }

  .indicadores{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #141B4D;
    width: 60%;
    color: white;
    border-radius: 10px;
  }

  .indicadores h1{
    margin: 10px 0;
  }

  .botones-indicadores-container{
    margin: 0;
  }

  .boton-indicadores {
    padding: 10px 15px;
    margin: 5px;
    border: 1px solid #000000;
    background-color: #ffffff;
    cursor: pointer;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
  }

  .boton-indicadores:hover {
    background-color: #e6e6e6;
  }

  .activo {
    background-color: #007bff; /* Color de fondo para el botón activo */
    color: white;
    border-color: #0056b3; /* Cambia también el color del borde */
  }

  .table-container{
    width: 100%;
    margin-top: 1em;
    border-radius: 10px;
    max-height: 220px;
    overflow-y: auto;
  }

  .custom-table {
    width: 100%; /* Ocupa todo el ancho disponible */
    border-collapse: collapse; /* Elimina el espacio entre bordes */
    background-color: transparent; /* Fondo blanco para toda la tabla */
    font-family: 'Montserrat', sans-serif;
    border-radius: 10px;
    overflow: hidden;
}

tr:hover {
  background-color: rgba(0, 158, 216, 0.3); /* azulito semitransparente */
}


  .custom-table thead {
    color: #00aeef;
    background-color: transparent; /* Fondo gris claro para el encabezado */
  }

  .custom-table th, .custom-table td {
    text-align: left; /* Alineación del texto */
    padding: 8px; /* Espaciado interno */
  }

  .custom-table tbody tr:last-child {
    border-bottom: none; /* Elimina la línea final si no quieres */
  }

  .info-adicional{
    width: 80%;
    display: flex;
    justify-content: center;
    gap: 5em;
    align-items: center;
    margin-top: 2em;
  }


  .info-image{
    width: 28%;
  }

  .info-text{
    width: 28%;
    margin-bottom: 2em;
  }

  .info-text h1{
    margin: 0
  }

  .informa-container{
    height: 220px;
    overflow-y: scroll;
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

  .informa-container p{
    font-size: 0.75em;
    width: 95%
  }

  @media (max-width: 1180px) {
    .article-indicadores{
    width: 80%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 5%;
  }

  .grafica-container{
    width: 90%;
  }
  
  .article-filiales h1{
    margin-top: 3em;
    margin-left: 5rem;
  }
  .article-filiales p {
    margin-left: 5rem;
    margin-bottom: 5em;
  }
  .menu-filiales{
   width: 90%;
   margin-left: 5em;
  }

  .indicadores{
    width: 90%;
  }

  .info-adicional{
    width: 90%;
  }
}

@media (max-width: 780px) {
    .documentos{
    width: 98%;
    margin-top: 10%;
    margin-bottom: 2em;
  }

  .article-filiales h1{
    width: 90%;
    margin-top: 2em;
    margin-left: 1rem;
  }
  .article-filiales p {
    width: 90%;
    margin-left: 1rem;
    margin-bottom: 3em;
  }
  .menu-filiales{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-left: 0em;
    margin-bottom: 0em;
  }

  .article-indicadores{
    width: 95%;
    margin-top: -3em;
  }

  .opcion-menu{
    width: 90%;
    padding: 0;
  }

  .tabla-horarios{
    grid-column: span 2;
    padding: 0.5em 0 0 0 !important;
  }

  .indicadores{
    margin-top: 7em;
    width: 100%;
  }

  .info-adicional{
    width: 100%;
    flex-direction: column;
    gap: 1em;
  }

  .info-adicional h1{
    text-align: center;
  }

  .info-image{
    width: 90%;
  }

  .info-text{
    width: 90%;
    margin-bottom: 2em;
  }

  .grafica-container{
    width: 100%;
  }
  }
  </style>
  