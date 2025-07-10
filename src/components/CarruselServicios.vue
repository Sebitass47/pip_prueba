<template>
  <article class="carrusel-servicios">
    <div
      class="slide"
      :style="{ backgroundImage: 'url(' + imagenActual + ')' }"
    >
      <div class="overlay"></div>
      <div class="contenido">
        <h2>{{ servicioActual.titulo }}</h2>
        <p>{{ servicioActual.descripcion }}</p>
      </div>

      <button class="flecha izquierda" @click="anterior" :disabled="indice === 0">
        ‹
      </button>
      <button class="flecha derecha" @click="siguiente" :disabled="indice === servicios.length - 1">
        ›
      </button>
    </div>
  </article>
</template>

<script>
export default {
  name: 'CarruselServicios',
  data() {
    return {
      servicios: [],
      indice: 0,
      lugar: null,
      imagenes: [
        require('@/assets/img/carrusel/1.jpg'),
        require('@/assets/img/carrusel/2.jpg'),
        require('@/assets/img/carrusel/3.jpg'),
        require('@/assets/img/carrusel/4.jpg'),
        require('@/assets/img/carrusel/5.jpg'),
        require('@/assets/img/carrusel/6.jpg'),
        require('@/assets/img/carrusel/7.jpg'),
      ]
    }
  },
  computed: {
    servicioActual() {
      return this.servicios[this.indice] || {}
    },
    imagenActual() {
      if (this.servicios.length === 0) return ''
      return this.imagenes[this.indice % this.imagenes.length]
    }
  },
  methods: {
    async fetchDatos() {
      const mapaPaises = {
        mexico: 'MX',
        colombia: 'CO',
        peru: 'PE',
        centroamerica: 'CR'
      }

      const ciudadRuta = this.$route.params?.nombre?.toLowerCase() || null
      const ciudad = mapaPaises[ciudadRuta] || null
      console.log(ciudad)
      // Simulación de respuesta del API
      const dataAPI = [
        {
          titulo: 'FACTORES DE DECISIÓN',
          descripcion: 'Contamos con diferentes servicios que buscan satisfacer de manera precisa las inquietudes de nuestros clientes, acoplándonos a sus necesidades para lograr un resultado de manera positiva.'
        },
        {
          titulo: 'ATENCIÓN PERSONALIZADA',
          descripcion: 'Nos enfocamos en conocer a profundidad a nuestros clientes para brindar soluciones adaptadas a sus requerimientos específicos.'
        },
        {
          titulo: 'INNOVACIÓN CONSTANTE',
          descripcion: 'Implementamos tecnologías y procesos de vanguardia para mantenernos como líderes del sector.'
        },
        {
          titulo: 'SERVICIO 24/7',
          descripcion: 'Acompañamos a nuestros clientes en todo momento con un servicio permanente.'
        },
         {
          titulo: 'ATENCIÓN PERSONALIZADA',
          descripcion: 'Nos enfocamos en conocer a profundidad a nuestros clientes para brindar soluciones adaptadas a sus requerimientos específicos.'
        },
        {
          titulo: 'INNOVACIÓN CONSTANTE',
          descripcion: 'Implementamos tecnologías y procesos de vanguardia para mantenernos como líderes del sector.'
        },
        {
          titulo: 'SERVICIO 24/7',
          descripcion: 'Acompañamos a nuestros clientes en todo momento con un servicio permanente.'
        },
        
      ]

      this.servicios = dataAPI
      this.indice = 0
    },
    siguiente() {
      if (this.indice < this.servicios.length - 1) this.indice++
    },
    anterior() {
      if (this.indice > 0) this.indice--
    }
  },
  mounted() {
    this.fetchDatos()
  },
  watch: {
    '$route.params.nombre': {
      immediate: true,
      handler() {
        this.fetchDatos()
      }
    }
  }
}
</script>

<style scoped>
.carrusel-servicios {
  width: 100%;
  height: 55vh;
  position: relative;
}

.slide {
  width: 100%;
  height: 55vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 55vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.contenido {
  position: relative;
  z-index: 2;
  color: white;
  max-width: 600px;
  margin-left: 5%;
  padding: 2rem;
  border-radius: 10px;
}

h2 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

p {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 0;
}

.flecha {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  color: white;
  background: none;
  border: none;
  z-index: 2;
  cursor: pointer;
  user-select: none;
  padding: 0 1rem;
  transition: opacity 0.2s;
}

.flecha:disabled {
  opacity: 0.3;
  cursor: default;
}

.izquierda {
  left: 0.5rem;
}

.derecha {
  right: 0.5rem;
}

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
    margin-bottom: 3em;
  }
.flecha {
    top: auto;
    bottom: 1rem;
    font-size: 2.5rem;
    transform: none;
    font-size: 2rem;
  }

  .izquierda {
    left: 1rem;
  }

  .derecha {
    right: 1rem;
  }

  .slide {
    flex-direction: column;
    justify-content: flex-end;
  }
}
</style>
