<template>
  <article class="contenedor-documentos">
    <div class="pestañas">
      <div
        v-for="id in pestañasPorFilial"
        :key="id"
        class="pestaña"
        :class="{ activa: id === pestañaActiva }"
        @click="cambiarPestaña(id)"
        >
        {{ id }}
    </div>

    </div>

   <div class="contenido-documentos">
      <div class="grid-info" v-if="infoMostrar.length">
        <div class="tarjeta-info" v-for="(item, i) in infoMostrar" :key="i">
          <h3 class="titulo-info">{{ item.txtService }}</h3>
          <p class="texto-info">{{ item.txtDescription }}</p>
        </div>
      </div>
      <p v-else>Seleccione un tipo de servicio.</p>
    </div>

  </article>
</template>

<script>
export default {
  name: 'ServicesComponent',
  data() {
    return {
      pestañaActiva: null,
      infoMostrar: [],
      infoCompleta: {},
    };
  },
  computed: {
    pestañasPorFilial() {
      return Object.keys  (this.infoCompleta);
    }
  },
  watch: {
    '$route.params.nombre': {
      immediate: true,
      handler() {
        this.obtenerServicios();
      }
    }
  },
  methods: {
    async obtenerServicios() {
      try {
        const response = await fetch(process.env.VUE_APP_API_SERVICIOS_URL, {
          method: "GET"
        });

        const result = await response.json();
        if (response.ok && result.StatusCode === 200) {
          this.infoCompleta = result.Data || {};
          const primera = Object.keys(this.infoCompleta)[0];
          this.pestañaActiva = primera;
          this.infoMostrar = this.infoCompleta[this.pestañaActiva]
        } else {
          console.error("Error al obtener pestañas:", result.Message);
        }
      } catch (error) {
        console.error("Error al llamar al API:", error);
      }
    },
    cambiarPestaña(tab) {
      this.pestañaActiva = tab;
      this.infoMostrar = this.infoCompleta[tab];
    }
  }
};
</script>

<style scoped>
.contenedor-documentos {
  width: 90%;
  display: flex;
  border-radius: 12px;
  margin: 3em 0;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  background: #141B4D;
  color: black;
  font-family: 'Montserrat', sans-serif;
}

.pestañas {
  flex: 1;
  border-right: 1px solid #DA291C;
  background: #141B4D;
  padding: 1rem;
}

.pestaña {
  padding: 0.8rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  color: white;
  transition: background 0.2s;
}

.pestaña:hover {
  background-color: rgba(0, 158, 216, 0.1);
}

.pestaña.activa {
  border-right: 3px solid #DA291C;
  font-weight: 700;
  color: #DA291C;
}

.contenido-documentos {
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

.grid-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 1rem;
}

.tarjeta-info {
  background-color: #141b4d;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
  min-width: 280px;
  max-width: 100%;
}

.titulo-info {
  font-weight: bold;
  color: #00a0d8;
  margin-bottom: 0.5rem;
}

.texto-info {
  color: white;
  font-size: 0.95rem;
  line-height: 1.4;
}

@media (max-width: 860px) {
  .grid-info {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }

  .tarjeta-info {
    flex: 0 0 auto;
    scroll-snap-align: start;
  }
}

/* Para pantallas pequeñas */
@media (max-width: 768px) {
  .contenido-documentos{
    padding: 0;
  }

  .contenedor-documentos {
    flex-direction: column;
  }

  .tarjeta-info {
    width: 90%;
  }

  .pestañas {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }

  .pestaña {
    /* padding: 0.5rem 1rem; */
    white-space: nowrap;
    width: 100%;
  }

  .grid-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
}

</style>
