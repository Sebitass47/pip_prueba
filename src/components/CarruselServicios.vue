<template>
  <article class="carrusel-servicios">
    <div
      class="slide"
      :style="{ backgroundImage: 'url(' + servicioActual.Banner + ')' }"
    >
      <div class="overlay"></div>
      <div class="contenido">
        <h2>{{ servicioActual.Country }}</h2>
        <p>{{ servicioActual.Description }}</p>
        <a
          v-if="servicioActual.Document"
          :href="servicioActual.Document"
          target="_blank"
          class="ver-mas"
        >
          Ver más
        </a>

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
      const ciudad = mapaPaises[ciudadRuta] || ''
      try{
        const response = await fetch(process.env.VUE_APP_API_BANNERS_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ txtCountry: ciudad })
        });
        const result = await response.json()
        
        if (response.ok && result.StatusCode === 200){
          const dataAPI = result.Data || [];
          this.servicios = dataAPI
          this.indice = 0
        } else {
          this.servicios = []
          console.error('Error en la respuesta:', result.Message);
        }
      } catch (error) {
        console.error('Error al obtener los banners:', error);
      }
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

.ver-mas {
  margin-top: 1em;
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
}

.ver-mas:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: white;
  color: #fff;
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
    margin-bottom: 3em;
  }

  h2 {
    font-size: 1.6rem;
  }

  p {
    font-size: 0.95rem;
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

@supports (-webkit-touch-callout: none) {
  .slide {
    background-attachment: scroll;
  }
}
</style>
