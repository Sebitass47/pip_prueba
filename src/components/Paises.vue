<template>
  <section class="paises-section">
    <img
      class="video-fondo"
      src="@/assets/img/Nosotros/Mapa_Pip_Latam.jpg"
    >

    <div class="info-panel">
      <div class="contenido">
        <h1><span class="somos">SOMOS</span> <span class="blue">PIP LATAM</span></h1>
        <p>Un gran grupo con presencia en los siguientes países:</p>
        <div class="paises">
          <ul>
            <li>México</li>
            <li>Perú</li>
            <li>Colombia</li>
        </ul>
        <ul>
              <li>Costa Rica</li>
            <li>Panamá</li>
            <li>Honduras</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'PaisesComponent',
}
</script>

<style scoped>
.paises-section {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 80%;
  max-height: 600px !important;
  overflow: hidden;
  margin-bottom: 2em;
}

.video-fondo {
  width: 40%;
}

.info-panel {
  color: white;
  display: flex;
  padding: 2em;
}

.contenido {
  width: 100%;
}

.somos {
  font-weight: 300;
  letter-spacing: 2px;
}

.blue {
  color: #00aaff;
  font-weight: 700;
}

h1 {
  font-size: 3rem;
  margin-bottom: 0.5em;
}

p {
  margin-bottom: 1em;
  font-size: 1.3rem;
  color: #cfcfcf;
}

.paises {
  display: flex;
  justify-content: start;
  gap: 2em;
  font-size: 1.1rem;
}

.paises ul {
    width: 45%;
    letter-spacing: 1px;
  list-style: none;
  padding: 0;
}

.paises li::before {
  content: '• ';
  color: #00aaff;
}


@media (max-width: 768px) {
  .paises-section {
    width: 100%;
    flex-direction: column;
    margin-bottom: 10em;
  }

  .video-fondo,
  .info-panel {
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .info-panel {
    align-items: center;
    text-align: center;
  }

  .paises {
    
    align-items: center;
  }


}
</style>
