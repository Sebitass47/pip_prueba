<template>
  <section>

    <article class="article-nosotros">
      <img :src="require('@/assets/img/about.png')" alt="Logo">
      <div class="text-nosotros">
        <h1  class="title-article-2">LA <span class="blue">SOLUCIÓN</span> ESTÁ A TU <span class="blue">ALCANCE</span></h1>
        <p class="transparent">Contamos con diferentes servicios que buscan satisfacer de manera precisa las inquietudes de nuestros clientes, acoplándonos a sus necesidades para lograr un resultado de manera positiva.</p>
        <p>Cada cliente es diferente, por eso es que hemos diversificado nuestros servicios y/o productos de tal manera que podemos cubrir eficientemente cada situación que se nos presenta, con nuestras diferentes líneas de negocio:</p>
      </div>
    </article>
    <ServicesComponent/>
  </section>
  </template>
  
  <script>
  import ServicesComponent from '../components/Services.vue';
  export default {
    name: 'ServiciosPage',
    data() {
      return {
        pais: null,
      };
    },
    components: {
      ServicesComponent
    },
  };
  </script>
  <style scoped>
  section{
    background-color: #01031a;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .article-nosotros{
    width: 90%;
    min-height: 50vh;
    display: flex;
    margin-top: 70px; 
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
  }

  .article-nosotros img{
    width: 45%;
  }

  .text-nosotros{
    width: 40%;
  }

  @media (max-width: 1200px) {
  .article-nosotros img{
    width: 70%;
  }

  .text-nosotros{
    width: 100%;
    margin-left: 3em;
  }

  .text-valores h1{
    width: 90%;
  }

  .text-valores p{
    width: 90%;
  }

  .vision-mision-container{
      flex-direction: row;
      width: 50%;
    }

    .timeline-container {
      width: 100%;
    }

  }

  @media (max-width: 860px) {
    .article-nosotros{
      width: 100%;
      margin-top: 70px;
      min-height: 90vh;
      padding: 0;
      display: flex;
      flex-direction: column;
    }

    .text-nosotros{
      width: 90%;
      margin-left: 0;
    }

    .article-nosotros img{
      width: 90%;
    }

    .text-valores{
      margin-left: 0;
    }

    .text-valores h1{
      width: 100%;
    }

    .text-valores p{
      width: 100%;
    }

  }

</style>
  