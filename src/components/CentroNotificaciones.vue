<template>
  <div>
    <!-- Campanita -->
    <div class="noti-button" @click="mostrarModal = true">
      🔔
      <span v-if="notificaciones.length" class="punto-rojo"></span>
    </div>

    <!-- Modal -->
    <div v-if="mostrarModal" class="modal-overlay" @click.self="cerrarModal">
      <div class="modal-content">
        <h1>PIP INFORMA</h1>
        <h3>{{ notificaciones[indiceActual]?.txtTitulo }}</h3>
        <div v-html="notificaciones[indiceActual]?.txtMessage"></div>

        <div class="nav-botones">
          <span @click="anterior" class="arrow" :disabled="indiceActual === 0">←</span>
          <span @click="siguiente" class="arrow" :disabled="indiceActual === notificaciones.length - 1">→</span>
        </div>

        <button class="button-blue" @click="cerrarModal">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CentroNotificaciones',
  data() {
    return {
      mostrarModal: false,
      notificaciones: [],
      indiceActual: 0,
      codigos: { mexico: 'MX', peru: 'PE', colombia: 'CO', centroamerica: 'CR' },
      lugar: null
    };
  },
  watch: {
    '$route.params.nombre': {
      immediate: true,
      handler(newVal) {
        this.lugar = this.codigos[newVal] || 'MX';
        this.fetchNotificaciones(this.lugar);
      }
    }
  },
  methods: {
    cerrarModal() {
      this.mostrarModal = false;
    },
    siguiente() {
      if (this.indiceActual < this.notificaciones.length - 1) this.indiceActual++;
    },
    anterior() {
      if (this.indiceActual > 0) this.indiceActual--;
    },
    async fetchNotificaciones(paisCodigo) {
      try {
        const response = await fetch(process.env.VUE_APP_API_NOTIFICACIONES_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ txtCountry: paisCodigo })
        });

        const result = await response.json();

        if (response.ok && result.StatusCode === 200) {
          this.notificaciones = result.Data?.PiPInforma || [];
          this.indiceActual = 0;
        } else {
          console.error('Error en la respuesta:', result.Message);
        }
      } catch (err) {
        console.error('Error al obtener notificaciones:', err);
      }
    }
  }
};
</script>

<style scoped>
.noti-button {
  position: fixed;
  right: 20px;
  top: 110px; /* Asumiendo que tu navbar y carrusel suman ~110px */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 4;
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
}

.arrow {
  background: none;
  font-size: 2.3rem;
  color: grey;
  cursor: pointer;
  padding: 0.3rem 0.8rem;
}

.arrow:hover {
  color: white;
}

.punto-rojo {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
}

.modal-overlay {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.7);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #1b1e3e;
  color: white !important;
  padding: 2em;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  text-align: center;
}

.nav-botones {
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
}

.cerrar {
  display: block;
  margin: 1em auto 0;
  background: #21244d;
  color: white;
  padding: 0.5em 1.5em;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
