<template>
  <div class="contenedor-documentos">
    <div class="pestañas">
      <template v-for="[id, info] in pestañasFilial" :key="id">
        <div
          v-if="!Array.isArray(info) && info.blnPreView"
          class="pestaña"
        >
          <a
            :href="info.txtLink"
            target="_blank"
            rel="noopener"
            class="mesa-servicio"
            >
            {{ id }}
          </a>
        </div>
        <div
          v-else
          class="pestaña"
          :class="{ activa: id === pestañaActiva }"
          @click="cambiarPestaña(id)"
        >
          {{ id }}
        </div>
      </template>
    </div>

    <div class="contenido-documentos">
      <h3>Documentos disponibles:</h3>
      <ul class="lista-documentos" v-if="documentos.length">
        <li v-for="(doc, i) in documentos" :key="i">
          <a :href="doc.txtLink" target="_blank">
            📄 {{ doc.txtLabel }}
          </a>
        </li>
      </ul>
      <p v-else>No hay documentos disponibles para esta sección.</p>

    </div>
  </div>
</template>

<script>
export default {
  name: "DocumentosFilial",
  data() {
    return {
      pestañaActiva: null,
      codigos: { mexico: "MX", peru: "PE", colombia: "CO", centroamerica: "CR" },
      pestañas: {},
      pais: null,
      documentos: []
    };
  },
  computed: {
    pestañasFilial() {
      return Object.entries(this.pestañas);
    }
  },
  watch: {
    '$route.params.nombre': {
      immediate: true,
      handler(nuevo) {
        const codigos = { mexico: "MX", peru: "PE", colombia: "CO", centroamerica: "CR" };
        this.pais = codigos[nuevo] || "MX";
        this.obtenerPestaniasDesdeAPI();
      }
    }
  },
  methods: {
    async obtenerPestaniasDesdeAPI() {
      try {
        const response = await fetch(process.env.VUE_APP_API_DOCUMENTOS_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ txtCountry: this.pais })
        });

        const result = await response.json();
        if (response.ok && result.StatusCode === 200) {
          this.pestañas = result.Data || {};
          const primera = Object.keys(this.pestañas)[0];
          this.pestañaActiva = primera;
          this.obtenerDocumentos(primera);
        } else {
          console.error("Error al obtener pestañas:", result.Message);
        }
      } catch (error) {
        console.error("Error al llamar al API:", error);
      }
    },

    cambiarPestaña(tab) {
      this.pestañaActiva = tab;
      this.obtenerDocumentos(tab);
    },

    obtenerDocumentos(tab) {
      const contenido = this.pestañas[tab];
      if (contenido.length == 1) {
        this.documentos = []; // Link externo, no hay docs
      } else if (Array.isArray(contenido)) {
        this.documentos = contenido;
      } else {
        this.documentos = [];
      }
    }
  }
};
</script>

<style scoped>
.contenedor-documentos {
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  background: #141B4D;
  color: white;
  font-family: 'Montserrat', sans-serif;
}

.mesa-servicio{
  color: white;
  text-decoration: none;
}

.mesa-servicio:visited{
  color: inherit;
}

.lista-documentos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));/* default: una columna */
  gap: 1em;
  max-height: 200px;
  overflow-y: auto;
  padding-left: 1em;
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
  color: white;
  flex: 3;
  padding: 1.5rem;
}

.contenido-documentos ul {
  list-style: none;
  padding: 0;
}

.contenido-documentos li {
  margin-bottom: 0.8rem;
}

.contenido-documentos a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.contenido-documentos a:hover {
  text-decoration: underline;
}

@media (max-width: 678px) {
  .lista-documentos {
    grid-template-columns: 1fr;
  }
   .contenedor-documentos {
    flex-direction: column; /* Apila verticalmente */
  }

  .pestañas {
    border-right: none;
    border-bottom: 1px solid #ccc;
    padding: 0.5rem 1rem;
  }

  .lista-documentos {
    grid-template-columns: 1fr; /* Una sola columna */
    max-height: none; /* para que crezca verticalmente */
    overflow-y: visible;
  }

  .contenido-documentos {
    padding: 1rem;
  }

  .pestaña {
    margin-bottom: 0.5rem;
  }
}
</style>
