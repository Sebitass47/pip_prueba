<template>
  <div class="contenedor-documentos">
    <div class="pestañas">
      <div
        v-for="(label, id) in pestañasFilial"
        :key="id"
        class="pestaña"
        :class="{ activa: id === pestañaActiva }"
        @click="cambiarPestaña(id)"
        >
        {{ label }}
    </div>

    </div>

    <div class="contenido-documentos">
      <h3>Documentos disponibles:</h3>
      <ul v-if="documentos.length">
        <li v-for="(doc, i) in documentos" :key="i">
          <a :href="baseURL + doc.txtURLView" target="_blank">
            📄 {{ doc.txtDescription }}
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
      baseURL: "https://devs.piplatam.com", // Base para concatenar con txtURLView
      pestañaActiva: null,
      documentos: [],
      codigos: { mexico: "MX", peru: "PE", colombia: "CO", centroamerica: "CR" },
      pestañasPorFilial: {
        MX: {
            "mesa-de-servicio": "Mesa de Servicio",
            "notas-estructuradas": "Notas Estructuradas",
            "i-pip": "i-PiP",
            "documentos": "Documentos"
        },
        CR: {
            "mesa-de-servicio": "Mesa de Servicio",
            "manuales": "Manuales",
            "gobierno-corporativo": "Gobierno Corporativo"
        },
        PE: {
            "mesa-de-servicio": "Mesa de Servicio",
            "manuales": "Manuales",
            "gobierno-corporativo": "Gobierno Corporativo"
        },
        CO: {
            "mesa-de-servicio": "Mesa de Servicio",
            "manuales": "Manuales",
            "gobierno-corporativo": "Gobierno Corporativo",
            "estados-financieros": "Estados Financieros"
        }
    },

      pais: null
    };
  },
  computed: {
    pestañasFilial() {
      return this.pestañasPorFilial[this.pais] || [];
    }
  },
  watch: {
    '$route.params.nombre': {
      immediate: true,
      handler(nuevo) {
        this.pais = this.codigos[nuevo] || "MX";
        this.pestañaActiva = this.pestañasFilial[0];
        this.obtenerDocumentos(this.pestañaActiva);
      }
    }
  },
  methods: {
    async obtenerDocumentos(tipo) {
      this.documentos = []; // Limpiar mientras carga
      try {
        const response = await fetch(process.env.VUE_APP_API_DOCUMENTOS_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            txtCategory: null,
            txtCountry: this.pais,
            txtType: tipo
          })
        });
        console.log(process.env.VUE_APP_API_DOCUMENTOS_URL)
        console.log(this.pais, tipo)
        const result = await response.json();
        console.log(result)
        if (response.ok && result.StatusCode === 200) {
          console.log(result.Data)
          this.documentos = result.Data?.Products || [];
        } else {
          console.error("Error al obtener documentos:", result.Message);
        }
      } catch (error) {
        console.error("Error en el fetch:", error);
      }
    },
    cambiarPestaña(tab) {
      this.pestañaActiva = tab;
      this.obtenerDocumentos(tab);
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
  background: white;
  color: black;
  font-family: 'Montserrat', sans-serif;
}

.pestañas {
  flex: 1;
  border-right: 1px solid #ccc;
  background: #f8f8f8;
  padding: 1rem;
}

.pestaña {
  padding: 0.8rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  color: #0075b2;
  transition: background 0.2s;
}

.pestaña:hover {
  background-color: rgba(0, 158, 216, 0.1);
}

.pestaña.activa {
  background-color: #fff;
  font-weight: 700;
  color: #009ed8;
}

.contenido-documentos {
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
  color: #21244d;
  text-decoration: none;
  font-weight: 500;
}

.contenido-documentos a:hover {
  text-decoration: underline;
}
</style>
