<template>
  <section>
    <article class="article-nosotros">
      <img :src="require('@/assets/img/about.png')" alt="Logo" class="animated slide-in-left">
      <div class="text-nosotros animated slide-in-right">
        <h1 class="title-articles blue">NOSOTROS</h1>
        <h1  class="title-article-2">PROVEEDOR Y SOCIO <span class="blue">ESTRATÉGICO</span></h1>
        <p class="transparent">Somos un proveedor de precios aprobado y regulado por las principales comisiones en los mercados donde operamos. Desde nuestros inicios hemos sido líderes en el servicio de cálculo, determinación y proveeduría o suministro de precios actualizados para valuación de valores, documentos e instrumentos financieros.</p>
        <p>Proveemos soluciones financieras completas, consistentes y oportunas con alta tecnología e ingeniería creativa e innovadora en materia de valuación de activos y pasivos, valuación de derivados, modelado, creación de índices, asesoría financiera y administración de riesgos.</p>
      </div>
    </article>
    <DatosComponent/>
    <article class="article-nosotros margin-menus">
      <div class="text-valores">
        <h1 class="title-articles blue">OBJETIVO</h1>
        <h1 class="title-article-2">DESARROLLO Y  <span class="blue">TRANSPARENCIA</span></h1>
        <p>Nuestro objetivo es contribuir al desarrollo y transparencia de los sistemas financieros Latinoamericanos, a través de la generación de precios, valuaciones, índices, herramientas de análisis, servicios de consultoría y capacitación de la más alta calidad en una manera consistente, transparente, confiable y oportuna.</p>
      </div>
      <div class="vision-mision-container">
        <div class="vision" v-intersect>
          <h1>MISIÓN</h1>
          <p>Contribuir al fortalecimiento de un sistema financiero más informado y transparente, ofreciendo soluciones integrales y herramientas de vanguardia que, bajo un estricto cumplimiento regulatorio, les permita a nuestros clientes tomar decisiones estratégicas y bien fundamentadas.</p>
        </div>
        <div class="mision" v-intersect>
          <h1>VISIÓN</h1>
          <p>Convertirnos en el socio estratégico de nuestros clientes, fusionando talento y liderazgo para establecer nuevos estándares de calidad y atención, garantizando transparencia y valor en cada servicio que ofrecemos.</p>
        </div>
      </div>
    </article>
    <article class="expertos-valores">
      <h1 class="title-articles blue">NUETRA HISTORIA</h1>
      <h1 class="title-article-2">BUSCANDO LA <span class="blue">PRÓXIMA FRONTERA</span></h1>
      <p class="transparent">Nuestros logros son el resultado de la dedicación, el trabajo en equipo y la innovación constante.</p>
      <p>Somos una empresa mexicana con más de 25 años de experiencia en la proveeduría de precios, y que nace para satisfacer la necesidad del mercado financiero de contar con valuaciones justas, precisas y confiables, consolidándonos como líderes en el sector. Como la primera empresa privada autorizada como proveedor de precios en México, hemos marcado la diferencia a través de nuestro compromiso con la calidad y la transparencia. Nuestra visión nos ha llevado a expandirnosa mercados clave en Latinoamérica, incluyendo Perú, Colombia, Costa Rica, Panamá y Honduras, fortaleciendo nuestro impacto regional.</p>
      <div class="timeline-container">
        <div class="timeline-item left">
          <p>Como parte de nuestra experiencia, PiP cuenta con diversos logros que respaldan nuestra trayectoria y compromiso.</p>
        </div>
        <div class="timeline-line">
          <span class="circle"></span>
        </div>
        <div class="timeline-item right">
          <p>El desarrollo e implementación de una Inteligencia Artificial que potencializa la operativa de PiP, optimizando tiempos de respuesta a procesos operativos, así como minimizando errores humanos.</p>
        </div>

        <div class="timeline-item left">
          <p>PiP Centroamérica obtiene la aprobación por la Comisión Nacional de Bancos y Seguros como la primera empresa proveedora de precios en Honduras.</p>
        </div>
        <div class="timeline-line">
          <span class="circle"></span>
        </div>
        <div class="timeline-item right">
          <p>PiP Colombia junto con nuestra empresa hermana Quantit, logran ser parte de los valuadores oficiales del fondo inmobiliaria más grande de Colombia.</p>
        </div>

        <div class="timeline-item left">
          <p>La creación de una API para la entrega de información, facilitando la integración, conectividad y automatización de procesos para los clientes.</p>
        </div>
        <div class="timeline-line">
          <span class="circle"></span>
        </div>
        <div class="timeline-item right">
          <p>PiP México es la primera empresa en generar índices de deuda en el mercado Latinoamericano.</p>
        </div>

        <div class="timeline-item left">
          <p>PiP Centroamérica actúa como el agente calculador de la Tasa de Referencia Interbancaria (TRI) en Costa Rica.</p>
        </div>
        <div class="timeline-line">
          <span class="circle"></span>
        </div>
        <div class="timeline-item right">
          <p>PiP Perú es el único proveedor de precios en el mercado financiero peruano.</p>
        </div>
      </div>
    </article>
    <AlianzasComponent/>
    <PaisesComponent/>
  </section>
</template>
<script>
import DatosComponent from '../components/DatosNumericos.vue';
import PaisesComponent from '../components/Paises.vue';
import AlianzasComponent from '../components/Alianzas.vue';
export default {
  
  name: 'NosotrosPage',
  components: {
      DatosComponent,
      PaisesComponent,
      AlianzasComponent
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
  margin-left: 2em;
  width: 45%;
}

.text-valores p{
  width: 95%;
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

.timeline-container {
  display: grid;
  width: 70%;
  grid-template-columns: 1fr 40px 1fr;
  padding: 40px;
  background-color: #07071A; /* fondo oscuro */
  color: white;
  font-family: sans-serif;
}

.timeline-item {
  display: flex;
  align-items: center;
}

.timeline-item.left {
  justify-content: flex-end;
  text-align: right;
}

.timeline-item.right {
  justify-content: flex-start;
  text-align: left;
}


.timeline-item p {
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  padding: 10px;
  line-height: 1.5;
}

.timeline-line {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.timeline-line::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 100%;
  background-color: #00B1FF; /* azul de la línea */
  z-index: 0;
}

.circle {
  width: 16px;
  height: 16px;
  background-color: #00B1FF;
  border-radius: 50%;
  z-index: 1;
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

    .margin-menus{
        margin-top: 0 !important;
      }

    .text-nosotros{
      width: 90%;
      margin-left: 0;
    }

    .valores-container ul{
      width: 40%;
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

    .vision-mision-container{
      flex-direction: row !important;
      width: 90%;
      margin-top: -5em ;
    }

    .text-valores{
      width: 90%;
    }

    .vision, .mision {
      max-width: 300px;
      background-color: #151b4d;
      border: #009ed8 1px solid;
      margin: 1em;
      padding: 0 1em 0.5em 1em;
      border-radius: 8px;
    }

  }

  @media (max-width: 768px) {
    .vision-mision-container{
      flex-direction: column !important;
      width: 90%;
      margin-top: 0em;
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
  }
</style>