<template>
    <article class="article-filiales">
        <div class="background-filiales">
          <img src="@/assets/img/filiales/info-adicional.jpg" alt="Imagen de fondo" class="background-image" >
        </div>
        <h1 class="title-article-2">ALIANZAS ESTRATÉGICAS</h1>
        <div class="menu-filiales">
            <div class="card delay-2s" v-intersect>
                <h1 class="title-card">FTSE Russell</h1>
                <p class="text-card">Alianza enfocada a proveer, distribuir y desarrollar índices renta fija en Latinoamérica. FTSE es un proveedor global líder de índices, análisis y soluciones de datos con capacidades de múltiples activos. Por más de 30 años los grandes fondos de pensiones, administradores de activos, proveedores de ETFs y bancos de inversión han elegido índices FTSE para usar los como referencia en el desempeño de sus inversiones.</p>
                <div class="img-container">
                  <img :src="require('@/assets/img/Logo_Screen_Burgundy_FR.png')" alt="Logo" class="logo-alianza-circular">
                </div>
            </div>
            <div class="card delay-2s" v-intersect>
                <h1 class="title-card">Numerix</h1>
                <p class="text-card">Esta alianza se estableció en 2016 y comprende el desarrollo de nuevos productos que se apoyan en la gran diversidad y calidad de sus motores de cálculo. Numerix es una empresa líder mundial en la generación de herramientas de cálculo para activos financieros y analíticos de riesgos de mayor complejidad.</p>
                <div class="img-container">
                  <img :src="require('@/assets/img/numerix-logo.png')" alt="Logo" class="logo-alianza-cuadrado">
                </div>
            </div>
            <div class="card delay-2s" v-intersect>
                <h1 class="title-card">NetGO</h1>
                <p class="text-card">La alianza se centra en ofrecer una plataforma financiera diseñada para empresas y corporativos, orientada a la gestión de sus derivados. La herramienta “Xymmetry” permite calcular el Mark to Market de portafolios de derivados como forwards de tipo de cambio, swaps y opciones en diferentes monedas y plazos. Además, proporciona un espacio para noticias relevantes del mercado financiero y cotizaciones en tiempo real de tipos de cambio, tasas forwards y swaps.</p>
                <div class="img-container">
                  <img :src="require('@/assets/img/logo-netgo.png')" alt="Logo" class="logo-alianza-cuadrado">
                </div>
            </div>
        </div>
      </article>
  </template>
  
  <script>
  export default {
    name: 'AlianzasComponent',
  }
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
    margin-left: 10rem;
    width: 50%;
    z-index: 3;
  }

  .menu-filiales{
    display: grid;
    margin-top: 2rem;
    margin-left: 10rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    width: 80%;
    gap: 3em;
    z-index: 3;
    /* margin-top: 3em; */
  }

  .card{
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 1em ;
  background-color: #21244d;
  border-radius: 20px;  
  border: 3px solid white;
  text-align: left;
}

.img-container{
  width: 100%;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  min-height: 250px;
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

  .menu-filiales{
    display: grid;
    margin-top: 2rem;
    margin-left: 5rem;
    width: 90%;
    gap: 3em;
    z-index: 3;
    /* margin-top: 3em; */
  }

  .card{
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 1em ;
    background-color: #21244d;
    border-radius: 20px;  
    border: 3px solid white;
    text-align: left;
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

  .card{
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 1em ;
    background-color: #21244d;
    border-radius: 20px;  
    border: 3px solid white;
    text-align: left;
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
    margin-left: 1rem;
    /* margin-top: 3em; */
  }

}
  </style>