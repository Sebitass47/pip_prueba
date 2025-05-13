<template>
  <main class="main">
    <section class="home">
      <video autoplay muted playsinline loop class="video-desktop">
        <source src="@/assets/videos/background.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
      <video autoplay muted loop playsinline class="video-mobile"
      >
      <source src="@/assets/videos/background-mobile.mp4" type="video/mp4" />
    </video>
    <h1 class="title">PRECIOS QUE INFORMAN,</h1>
    <h1 class="subtitle">SOLUCIONES QUE TRANSFORMAN</h1>
    <router-link to="/nosotros" class="button-blue fixed ">CONÓCENOS</router-link>
   </section>
   <section class="home-2">
    <article class="article-lider-valuaciones">
      <img :src="require('@/assets/img/PIP_Financia_Bursatil_Preciois_Valores.jpg')" alt="Hombre revisando una gráfica financiera">
      <div class="text-nosotros">
        <h1 class="title-articles blue">LÍDER EN VALUACIONES</h1>
        <h1  class="title-article-2">SOLUCIONES FINANCIERAS <span class="blue">CONSISTENTES Y OPORTUNAS</span></h1>
        <p class="transparent">PiP produce más de 100,000 precios diarios de valuación de instrumentos financieros, para los cinco países en los que tiene presencia.</p>
        <p>Somos la corporación multinacional líder en valuaciones a precios razonables (fair value) oficiales e independientes de activos financieros en Latinoamérica, siendo la fuente uniforme y completa de información oportuna y auditable de mercados financieros latinoamericanos que distribuye cierres oficiales.</p><br/>
        <router-link to="/servicios" class="button-blue">Saber más</router-link>
      </div>
    </article>
    <article class="article-lider-valuaciones heigh-reduce">
      <div class="text-nosotros">
        <h1 class="title-articles blue">UN SOCIO ESTRATÉGICO</h1>
        <h1  class="title-article-2">TRANSPARENCIA FINANCIERA</h1>
        <p class="transparent">Valuaciones, índices, herramientas de análisis, servicios de consultoría y capacitación de la más alta calidad en una manera consistente, transparente, confiable y oportuna.</p>
        <p>Nos respaldan más de 25 años de experiencia en la proveeduría de precios, para satisfacer la necesidad del mercado financiero de contar con valuaciones justas, precisas y confiables, consolidándonos como líderes en el sector.</p>
      </div>
      <div class="text-nosotros">
        <p>Clientes satisfechos</p>
        <span class="indice-carga">100%</span>
        <p>Efectividad de nuestro servicio</p>
        <span class="indice-carga">100%</span>
        <p>Implementación de la IA</p>
        <span class="indice-carga">100%</span>
      </div>
    </article>
    <DatosComponent/>
    <ServicesComponent/>
    <PaisesComponent/>
  </section>
  </main>
</template>
<script>
  import ServicesComponent from '../components/Services.vue';
  import DatosComponent from '../components/DatosNumericos.vue';
  import PaisesComponent from '../components/Paises.vue';
  export default {
    name: 'HomePage',
    components: {
      ServicesComponent,
      DatosComponent,
      PaisesComponent
    },
  };
</script>

<style>
  .main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  .home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
  }

  /* Estilos para el video */
  .video-desktop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Para que el video se ajuste al contenedor sin deformarse */
    z-index: -2; /* Coloca el video detrás del contenido */
  }


  .video-mobile {
    display: none;
  }

  .title{
    margin-bottom: 0;
    font-weight: 700;
    font-size: 7.2em;
    letter-spacing: 4px;
    z-index: -3;
  }

  .subtitle{
    margin-top: 0; 
    font-weight: 200;
    font-size: 4.2em;
    letter-spacing: 4px;
    z-index: -3;
  }

  .fixed{
    position: fixed;
    top: 65%;
    z-index: -1;
    text-decoration: none;
  }

  .heigh-reduce{
    min-height: auto !important;
  }

  .home-2{
    background-color: #01031a;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    scroll-padding-top: 80px;
    z-index: 3;
  }

  .article-lider-valuaciones{
    width: 90%;
    min-height: 50vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
  }

  .article-lider-valuaciones img{
    width: 45%;
  }

  .text-nosotros{
    width: 40%;
  }

  .indice-carga{
    width: 80%;
    background-color: #009ed9;
    display: block;         /* Para que ocupe todo el ancho disponible */
    color: white;           /* Color del texto */
    text-align: right;      /* Alinea el texto a la derecha */
    padding: 5px 10px;      /* Opcional: espacio interno para que no quede pegado */
    border-radius: 4px;
  }

  @media (max-width: 1600px) {
    .title{
      font-size: 4.2em;
      text-align: center;
    }

    .subtitle{
      font-size: 3.2em;
      text-align: center;
    }
  }

  @media (max-width: 1100px) {
    .article-lider-valuaciones img{
      width: 70%;
    }

    .video-desktop {
      display: none;
    }

    .video-mobile {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      object-fit: cover; /* Para que el video se ajuste al contenedor sin deformarse */
      z-index: -1; /* Coloca el video detrás del contenido */
    }

    .indice-carga{
      width: 93%;
    }

    .title{
      z-index: 2;
    }

    .subtitle{
      margin-top: 0; 
      font-weight: 200;
      font-size: 4.2em;
      letter-spacing: 4px;
      z-index: 2;
    }

    .fixed{
      position:static;
    }
  }

  @media (max-width: 860px) {
      .article-lider-valuaciones{
        width: 100%;
        margin-top: 70px;
        min-height: 90vh;
        padding: 0;
        display: flex;
        flex-direction: column;
      }

      .text-nosotros{
        width: 80%;
      }
  }
  @media (max-width: 768px) {
    .title{
      font-size: 3.2em;
      text-align: center;
      letter-spacing: 4px;
    }

    .subtitle{
      font-size: 2.2em;
      text-align: center;
    }
  }
</style>