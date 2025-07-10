<template>
  <section>
    <CarruselServicios/>
    <ServicesComponent/>
    <FormComponent/>
  </section>
  </template>
  
  <script>
  import ServicesComponent from '../components/Services.vue';
  import CarruselServicios from '../components/CarruselServicios.vue';
  import FormComponent from '../components/Form.vue';
  export default {
    name: 'ServiciosPage',
    data() {
      return {
        pais: null,
      };
    },
    components: {
      ServicesComponent,
      FormComponent,
      CarruselServicios
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
    width: 100%;
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
  