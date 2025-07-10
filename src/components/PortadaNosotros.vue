<template>
  <article class="portada-nosotros">
    <div class="overlay"></div>
    <section class="contenido">
      <h2>NOSOTROS</h2>
      <p>
        Somos un proveedor de precios aprobado y regulado por las principales comisiones
        en los mercados donde operamos. Desde nuestros inicios hemos sido líderes en el
        servicio de cálculo, determinación y proveeduría o suministro de precios actualizados
        para valuación de valores, documentos e instrumentos financieros.
      </p>
    </section>
  </article>
</template>

<script setup>
// No necesitas lógica por ahora
</script>

<style scoped>
.portada-nosotros {
  width: 100%;
  min-height: 55vh;
  background-image: url('@/assets/img/Nosotros/portada.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 55vh;
  background-color: rgba(0, 0, 0, 0.6); /* oscurece la imagen */
  z-index: 1;
}

.contenido {
  max-width: 25%;
  color: white;
  margin-left: 5%;
  padding: 2rem;
  border-radius: 8px;
  z-index: 2;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1rem;
  line-height: 1.6;
}

/* Responsivo */
@media (max-width: 768px) {
  .contenido {
    max-width: 90%;
    margin: 0 auto;
    padding: 1.5rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  p {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .portada-nosotros {
    min-height: 60vh;
    padding: 3rem 0;
  }

  .overlay {
    min-height: 75vh;
    }

  .contenido {
    padding: 1rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  p {
    font-size: 0.9rem;
  }
}
</style>
