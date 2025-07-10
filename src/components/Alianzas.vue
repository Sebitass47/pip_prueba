<template>
    <article class="article-filiales">
        <div class="background-filiales">
          <img src="@/assets/img/filiales/info-adicional.jpg" alt="Imagen de fondo" class="background-image" >
        </div>
        <h1 class="title-article-2">ALIANZAS ESTRATÉGICAS</h1>
        <div class="background-color">
          <div class="menu-filiales">
            <div
              class="card delay-2s"
              v-for="(alianza, index) in alianzas"
              :key="index"
              @mouseenter="hoveredIndex = index"
              @mouseleave="hoveredIndex = null"
            >
              <div class="img-container">
                <img :src="require(`@/assets/img/${alianza.logo}`)" :alt="alianza.nombre" :class="alianza.estiloLogo" />
              </div>

              <transition name="fade-slide">
                <div v-if="hoveredIndex === index" class="text-alianza-container">
                  <h1 class="title-card">{{ alianza.nombre }}</h1>
                  <p class="text-card">
                    {{ alianza.descripcion }}<br><br>
                    Link: <a :href="alianza.link" target="_blank">{{ alianza.link }}</a>
                  </p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </article>
  </template>
  
<script>
  export default {
    name: "AlianzasComponent",
    data() {
      return {
        hoveredIndex: null,
        alianzas: [
          {
            nombre: "FTSE Russell",
            logo: "FTSE.png",
            estiloLogo: "logo-alianza-circular",
            descripcion: `Alianza enfocada a proveer, distribuir y
                      desarrollar índices renta fija en
                      Latinoamérica. FTSE es un proveedor
                      global líder de índices, análisis y
                      soluciones de datos con capacidades
                      de múltiples activos. Por más de 30
                      años los grandes fondos de pensiones,
                      administradores de activos,
                      proveedores de ETFs y bancos de
                      inversión han elegido índices FTSE
                      para usarlos como referencia en el
                      desempeño de sus inversiones.`,
            link: "https://www.lseg.com",
          },
          {
            nombre: "Numerix",
            logo: "numerix-logo.png",
            estiloLogo: "logo-alianza-cuadrado",
            descripcion: `Esta alianza se estableció en 2016 y
                    comprende el desarrollo de nuevos
                    productos que se apoyan en la gran
                    diversidad y calidad de sus motores de
                    cálculo. Numerix es una empresa líder
                    mundial en la generación de
                    herramientas de cálculo para activos
                    financieros y analíticos de riesgos de
                    mayor complejidad.`,
            link: "https://www.numerix.com",
          },
          {
            nombre: "NetGO",
            logo: "logo-netgo.png",
            estiloLogo: "logo-alianza-cuadrado",
            descripcion: `La alianza se centra en ofrecer una
                    plataforma financiera diseñada para
                    empresas y corporativos, orientada a la
                    gestión de sus derivados. La
                    herramienta “Xymmetry” permite
                    calcular el Mark to Market de
                    portafolios de derivados como
                    forwards de tipo de cambio, swaps y
                    opciones en diferentes monedas y
                    plazos. Además, proporciona un
                    espacio para noticias relevantes del
                    mercado financiero y cotizaciones en
                    tiempo real de tipos de cambio, tasas
                    forwards y swaps.`,
            link: "https://xymmetry.com.mx",
          },
        ],
      };
    },
  };
</script>

  
  <style scoped>
  .article-filiales{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 3rem;
  }

  .background-filiales {
    position: absolute;
    width: 100% !important;
    height: 100%;
    overflow: hidden;
    z-index: 2;
  }

  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 0.3s ease;
  }
  .fade-slide-enter-from,
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
}

.img-container img {
  animation: pulse 2.5s ease-in-out infinite;
}

.img-container img:hover {
  animation: none;
}


  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    mask-image: linear-gradient(to bottom, black 30%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 30%, transparent 100%);
    object-fit: cover; /* La imagen se adapta al tamaño del contenedor */
    z-index: -1; /* Asegúrate de que esté detrás del contenido */
  }

  .article-filiales > h1{
    margin-top: 15em;
    margin-left: 10rem;
    width: 50%;
    z-index: 3;
  }
  
  .background-color{
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .menu-filiales{
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 2rem;
    gap: 3em;
    z-index: 3;
    /* margin-top: 3em; */
  }

  .card{
    width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1em;
  text-align: left;
}

.barra-blanca{
  border: none;
  height: 1px;
  background-color: white;
  width:100%
}

.img-container{
  width: 100%;
  min-height: 150px;
  display: flex;
  align-items: center;
}

.logo-alianza-cuadrado{
  width: 300px;
}

.logo-alianza-circular{
  width: 180px;
}

.title-card{
  font-size: 1.4em;
  margin: 0;
}

.text-card{
  margin-bottom: 1em;
  width: 800px;
}

@media (max-width: 1200px) {
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    /* width: 100%; */
    height: 100%;
    object-fit: cover; /* La imagen se adapta al tamaño del contenedor */
    z-index: -1; /* Asegúrate de que esté detrás del contenido */
  }

  .article-filiales > h1{
    margin-top: 15em;
    margin-left: 5rem;
    width: 50%;
    z-index: 3;
  }

  .text-alianza-container{
    width: 80%;
  }

  .text-card{
    margin-bottom: 1em;

    min-width: 100px;
    width: 600px;
  }

}

@media (max-width: 860px) {
  .article-filiales > h1{
    margin-top: 5em;
    margin-left: 3rem;
    width: 50%;
    z-index: 3;
  }

  .menu-filiales{
    display: grid;
    margin-top: 2rem;
    margin-left: 3rem;
    width: 90%;
    gap: 3em;
    z-index: 3;
    /* margin-top: 3em; */
  }
  .background-color{
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.5);
  }
}

@media (max-width: 768px) {
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover; /* La imagen se adapta al tamaño del contenedor */
    z-index: -1; /* Asegúrate de que esté detrás del contenido */
  }

  .article-filiales > h1{
    margin-top: 3em;
    margin-left: 1rem;
  }

  .menu-filiales{
    margin-top: 2rem;
    margin-left: 0 !important;
    width: 100%;
    /* margin-top: 3em; */
  }

  .background-color{
    width: 100%;
  }

  .card{
    width: 100%;
    padding: 0;
    flex-direction: column;
  }

  .text-card{
    width: 100%;
  }

  .img-container{
    justify-content: center;
    margin-bottom: 2em;
  }

}
  </style>