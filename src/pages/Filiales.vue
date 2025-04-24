<template>
    <section>
      <article class="article-filiales">
        <div class="background-filiales">
          <img src="@/assets/img/filiales/background.jpg" alt="Imagen de fondo" class="background-image">
        </div>
        <h1 class="title-article-2">LOREM IPSUM DOLOR SIT AMET, <span class="blue">CONSECTETUR</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis, fuga odio voluptate reprehenderit eos? Unde ullam dolorem aut mollitia in, soluta necessitatibus tempore voluptatem voluptas atque architecto ipsum debitis?</p>
        <div class="menu-filiales">
          <span class="opcion-menu"><i class="bi bi-clock-fill"></i><br/>HORARIOS DE<br/>LIBERACIÓN</span>
          <span class="opcion-menu"><i class="bi bi-folder-plus"></i><br/>MANUALES</span>
          <span class="opcion-menu"><i class="bi bi-bank2"></i><br/>GOBIERNO<br/>CORPORATIVO</span>
        </div>
      </article>
      <article class="indicadores">
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
                <th>Descripción</th>
                <th>Actual</th>
              <th>Anterior</th>
              <th>Variación</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in datos" :key="index">
              <td>{{ item.descripcion }}</td>
              <td>{{ item.actual }}</td>
              <td>{{ item.anterior }}</td>
              <td :style="{ color: item.variacion.includes('Baja') ? 'red' : 'green' }">
                {{ item.variacion }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </article>
      <article class="info-adicional">
        <div class="grafica-container">
          <h1 class="blue">MONITOR</h1>
          <LineaChart :key="chartKey" :grafica="grafica" />
        </div>
        <img src="@/assets/img/filiales/info-adicional.jpg" alt="Monedas" class="info-image">
        <div class="info-text">
          <h1 class="blue">PIP INFORMA</h1>
          <div class="informa-container scroll">

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo excepturi cumque consequuntur numquam cupiditate qui provident. Recusandae deserunt saepe, modi excepturi eos incidunt quibusdam eveniet. Quis repellat error cupiditate. Tenetur!</p>
            <hr>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo excepturi cumque consequuntur numquam cupiditate qui provident. Recusandae deserunt saepe, modi excepturi eos incidunt quibusdam eveniet. Quis repellat error cupiditate. Tenetur!</p>
          <hr>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo excepturi cumque consequuntur numquam cupiditate qui provident. Recusandae deserunt saepe, modi excepturi eos incidunt quibusdam eveniet. Quis repellat error cupiditate. Tenetur!</p>
        </div>
        </div>
      </article>
    </section>
  </template>
  
  <script>
  import LineaChart from "@/components/LineaChart.vue";
  export default {
    name: 'FilialPage',
    components: { LineaChart },
    data() {
      return {
        lugar: this.$route.params.nombre,
        datos: [],
        grafica: {
          titulo: "Cargando...",
          datos: [{ plazo: 0, valor: 0 }], // Valores por defecto
        },
        filiales: {
          mexico: {
            botones: [
              { texto: "Tasa Interés", tipo: "tasa-interes" },
              { texto: "Tipo Cambio", tipo: "tipo-cambio" },
              { texto: "Índices", tipo: "indices" }
            ],
            valor_default: 'tasa-interes'
          },
          colombia: {
            botones: [
              { texto: "Tasa Interés", tipo: "tasa-interes" },
              { texto: "Tipo Cambio", tipo: "tipo-cambio" },
              { texto: "Índices", tipo: "indices" }
            ],
            valor_default: 'tasa-interes'
          },
          centroamerica: {
            botones: [
              { texto: "Tasa Interés", tipo: "tasa-interes" },
              { texto: "Tipo Cambio", tipo: "tipo-cambio" },
              { texto: "Tasa TRI", tipo: "tasa-tri" }
            ],
            valor_default: 'tasa-interes'
          },
          peru: {
            botones: [
              { texto: "Tasas Pasivas MN", tipo: "tasa-mn" },
              { texto: "Tasas Pasivas ME", tipo: "tasa-me" },
              { texto: "T.C Compra", tipo: "tc-compra" },
              { texto: "T.C Venta", tipo: "tc-venta" },
            ],
            valor_default: 'tasa-mn'
          }
        },
        filtroActual: null,
        chartKey: 0
      };
    },
    watch: {
      '$route.params.nombre': {
        immediate: true,
        handler(newVal) {
          this.lugar = newVal; // Actualiza si cambia la ruta
          this.fetchLugarData(this.filiales[this.lugar]['valor_default']);
        },
      },
    },
    methods: {
      async fetchLugarData(tipo) {
        this.filtroActual = tipo;
        setTimeout(() => {
          // Datos simulados
          this.datos = [
            {
              descripcion: "2025/01/17 Depósitos a Plazo",
              actual: "4.3500",
              anterior: "4.3700",
              variacion: "Baja -0.0200",
            },
            {
              descripcion: "2025/01/17 Fondos de Inversión",
              actual: "3.5000",
              anterior: "3.4900",
              variacion: "Sube +0.0100",
            },
            {
              descripcion: "2025/01/17 Bonos Gubernamentales",
              actual: "2.8500",
              anterior: "2.8600",
              variacion: "Baja -0.0100",
            },
            {
              descripcion: "2025/01/17 Préstamos Hipotecarios",
              actual: "5.0000",
              anterior: "4.9500",
              variacion: "Sube +0.0500",
            },
            {
              descripcion: "2025/01/17 Depósitos a Plazo",
              actual: "4.3500",
              anterior: "4.3700",
              variacion: "Baja -0.0200",
            },
            {
              descripcion: "2025/01/17 Fondos de Inversión",
              actual: "3.5000",
              anterior: "3.4900",
              variacion: "Sube +0.0100",
            },
            {
              descripcion: "2025/01/17 Bonos Gubernamentales",
              actual: "2.8500",
              anterior: "2.8600",
              variacion: "Baja -0.0100",
            },
            {
              descripcion: "2025/01/17 Préstamos Hipotecarios",
              actual: "5.0000",
              anterior: "4.9500",
              variacion: "Sube +0.0500",
            },
          ];
          this.grafica = {
            titulo: `Reporte ${tipo} (${this.lugar.toUpperCase()})`,
            datos: [
              { plazo: 100, valor: 0.12 },
              { plazo: 200, valor: 0.13 },
              { plazo: 300, valor: 0.135 },
              { plazo: 400, valor: 0.14 },
            ],
          };
          this.chartKey++;
        }, 0); // Retraso de 1.5 segundos
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
    overflow: scroll;
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
    height: 85vh;
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
    margin-top: 10em;
    margin-left: 15rem;
    width: 50%;
    z-index: 3;
  }
  .article-filiales p {
    width: 45%;
    margin-left: 15rem;
    margin-bottom: 5em;
    z-index: 3;
  }

  .menu-filiales{
    display: grid;
    margin-left: 15rem;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    width: 55%;
    gap: 3em;
    z-index: 3;
    /* margin-top: 3em; */
  }

  .opcion-menu{
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

  .indicadores{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 80%;
    color: black;
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
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    cursor: pointer;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
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
    background-color: white; /* Fondo blanco para toda la tabla */
    font-family: 'Poppins', sans-serif;
    border-radius: 10px;
    overflow: hidden;
}

  .custom-table thead {
    background-color: #f5f6fa; /* Fondo gris claro para el encabezado */
  }

  .custom-table th, .custom-table td {
    text-align: left; /* Alineación del texto */
    padding: 8px; /* Espaciado interno */
  }

  .custom-table tbody tr {
    border-bottom: 1px solid #ccc; /* Línea entre las filas */
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

  .grafica-container{
    height: 300px;
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
  .article-filiales h1{
    margin-top: 3em;
    margin-left: 5rem;
  }
  .article-filiales p {
    margin-left: 5rem;
    margin-bottom: 5em;
  }
  .menu-filiales{
   width: 80%;
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
   width: 80%;
   margin-left: 2.5em;
   margin-bottom: 3em;
  }

  .indicadores{
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
    height: 250px;
  }
  }
  </style>
  