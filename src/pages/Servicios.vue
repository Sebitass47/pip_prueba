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
</style>
  