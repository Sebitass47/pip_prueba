<template>
  <section>
      <!-- <img :src="require('@/assets/img/about.png')" alt="Logo" class="animated slide-in-left"> -->
      <PortadaNosotros/>
    <DatosComponent/>
    <article class="article-nosotros margin-menus">
      <div class="text-valores">
          <div class="text_valores_imagenes animated slide-in-right">
            <p class="title-articles blue">OBJETIVO</p>
            <h1  class="title-article-2">DESARROLLO Y <span class="blue">TRANSPARENCIA</span></h1>
            <p>Nuestro objetivo es contribuir al desarrollo y transparencia de los sistemas
              financieros Latinoamericanos, a través de la generación de precios, valuaciones,
              índices, herramientas de análisis, servicios de consultoría y capacitación de la más
              alta calidad en una manera consistente, transparente, confiable y oportuna.</p>
          </div>
          <span class="container-image">
            <img :src="require('@/assets/img/Nosotros/nosotros_1.jpg')" alt="Logo" class="img-right animated slide-in-left">
          </span>
      </div>
     <div class="text-valores reverse">
        <span class="container-image">
          <img :src="require('@/assets/img/Nosotros/nosotros_2.jpg')" alt="Logo" class="img-left animated slide-in-left">
        </span>
        <div class="text_valores_imagenes animated slide-in-right">
          <h1  class="title-article-2"><span class="blue">MISIÓN</span></h1>
          <p>Contribuir al fortalecimiento de un sistema financiero más informado y transparente,
            ofreciendo soluciones integrales y herramientas de vanguardia que, bajo un estricto
            cumplimiento regulatorio, les permita a nuestros clientes tomar decisiones
            estratégicas y bien fundamentadas
          </p>
        </div>
      </div>
      <div class="text-valores">
        <div class="text_valores_imagenes animated slide-in-right">
          <h1  class="title-article-2"><span class="blue">VISIÓN</span></h1>
          <p>Convertirnos en el socio estratégico de nuestros clientes, fusionando talento y
            liderazgo para establecer nuevos estándares de calidad y atención, garantizando
            transparencia y valor en cada servicio que ofrecemos.
          </p>
        </div>
        <span class="container-image">
          <img :src="require('@/assets/img/Nosotros/nosotros_3.jpg')" alt="Logo" class="img-right animated slide-in-left">
        </span>
      </div>
    </article>
    <article class="expertos-valores">
      <h1 class="title-articles blue">NUESTRA HISTORIA</h1>
      <h1 class="title-article-2">BUSCANDO LA <span class="blue">PRÓXIMA FRONTERA</span></h1>
      <p class="transparent">Nuestros logros son el resultado de la dedicación, el trabajo en equipo y la innovación constante.</p>
      <p>Somos una empresa mexicana con más de 25 años de experiencia en la proveeduría de precios, y que nace para satisfacer la necesidad del mercado financiero de contar con valuaciones justas, precisas y confiables, consolidándonos como líderes en el sector. Como la primera empresa privada autorizada como proveedor de precios en México, hemos marcado la diferencia a través de nuestro compromiso con la calidad y la transparencia. Nuestra visión nos ha llevado a expandirnos a mercados clave en Latinoamérica, incluyendo Perú, Colombia, Costa Rica, Panamá y Honduras, fortaleciendo nuestro impacto regional.</p>
     <CronologiaCencorComponent/>
    </article>
    <AlianzasComponent/>
    <PaisesComponent/>
    <article class="article-nosotros">
      <div class="text-nosotros cencor animated slide-in-right">
        <h1 class="title-articles blue">NUESTRA FAMILIA</h1>
        <h1  class="title-article-2"><span class="blue">RESPALDADOS</span> POR UN GRUPO <span class="blue">SÓLIDO Y CONFIABLE</span></h1>
        <p class="transparent">A su vez formamos parte de un grupo más grande.</p>
      </div>
      <div class="cencor-circulo">
        <img src="@/assets/svg/Nosotros/Empresas.svg" alt="2018" />
      </div>
    </article>
  </section>
</template>
<script>
import DatosComponent from '../components/DatosNumericos.vue';
import PaisesComponent from '../components/Paises.vue';
import AlianzasComponent from '../components/Alianzas.vue';
import CronologiaCencorComponent from '../components/Cronologia.vue';
import PortadaNosotros from '@/components/PortadaNosotros.vue';
export default {
  
  name: 'NosotrosPage',
  components: {
      DatosComponent,
      PaisesComponent,
      AlianzasComponent,
      CronologiaCencorComponent,
      PortadaNosotros
    },
};
</script>

<style scoped>
section{
  background-color: #01031a;
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
}

.cencor-circulo{
  width: 45%;
  display: flex;
  justify-content: center;
}

.text-nosotros{
  width: 80%;
}

.valores-container{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1em 0;
}

.valores-container ul{
  width: 50%;
}

.text-valores{
  width: 80%;
  display: flex;
  margin-bottom: 3em;
  justify-content: space-evenly;
}

.container-image{
    width: 35%;
    display: flex;
    align-items: center;
  }

  .container-image img{
    width: 100%;
    border-radius: 1em;
  }

.text_valores_imagenes{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
}


.vision-mision-container{
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 1em 0;
}

.vision, .mision {
  max-width: 300px;
  min-height: 300px;
  background-color: #151b4d;
  border: #009ed8 1px solid;
  margin: 1em;
  padding: 0 1em 0.5em 1em;
  border-radius: 8px;
  box-shadow: 0 14px 28px rgba(0, 158, 216, 0.25), 0 10px 10px rgba(0, 158, 216, 0.22);
}

.expertos-valores{
  display: flex;
  margin-top: 5em;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 80%;
}

.expertos-valores > p{
  width: 80%
}

.circle {
  width: 16px;
  height: 16px;
  background-color: #00B1FF;
  border-radius: 50%;
  z-index: 1;
}

@media (max-width: 1200px) {
  .container-image{
    width: 50%;
  }

  .container-image img{
    width: 100%;
  }

  .text_valores_imagenes{
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 45%;
    }

  .cencor-circulo{
    width: 80%;
  }

  .cencor{
    width: 60% !important;
  }

  .text-nosotros{
    width: 100%;
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
    .reverse{
      flex-direction: row;
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

    .margin-menus{
        justify-content: center !important;
        align-items: center !important;
      }

    .text-nosotros{
      width: 90%;
      margin-left: 0;
    }

    .valores-container ul{
      width: 40%;
    }

    .article-nosotros img, .cencor-circulo{
      width: 90%;
    }

    .text-valores{
      margin-left: 0;
      width: 90%;
      justify-content: space-between;
    }

    .text-valores h1{
      width: 100%;
    }

    .text-valores p{
      width: 100%;
    }

    .vision-mision-container{
      flex-direction: row !important;
      width: 90%;
      margin-top: -5em ;
    }


  }

  @media (max-width: 768px) {
    .vision-mision-container{
      flex-direction: column !important;
      width: 90%;
      margin-top: 0em;
    }

    .cencor{
      width: 90% !important;
    }

    .cencor-circulo{
      width: 100%;
    }

    .cencor-circulo img{
      width: 100%;
    }


    .margin-menus{
        margin-top: 0 !important;
      }
    
    .expertos-valores{
      margin-top: 1em;
      width: 90%;
    }

    .expertos-valores > p{
      width: 100%
    }

    .timeline-container {
      width: 100%;
      padding: 0;
    }

    .text-valores {
      flex-direction: column;
    }

    .text_valores_imagenes {
      width: 100%;
    }

    .container-image {
      width: 100%;
    }

    .container-image img{
      width: 100%;
    }

    .reverse{
      flex-direction: column-reverse; /* o column-reverse */
    }
  }
</style>