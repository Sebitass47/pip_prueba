<template>
  <main class="home">
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
    <button class="button-blue fixed">CONÓCENOS</button>
  </main>
</template>
<script>
export default {
  name: 'HomePage',
};
</script>

<style>
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