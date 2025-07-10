<template>
  <article class="contenedor-documentos">
    <div class="pestañas">
      <div
        v-for="(label, id) in pestañasPorFilial"
        :key="id"
        class="pestaña"
        :class="{ activa: id === pestañaActiva }"
        @click="cambiarPestaña(id)"
        >
        {{ label }}
    </div>

    </div>

   <div class="contenido-documentos">
      <div class="grid-info" v-if="infoMostrar.length">
        <div class="tarjeta-info" v-for="(item, i) in infoMostrar" :key="i">
          <h3 class="titulo-info">{{ item.titulo }}</h3>
          <p class="texto-info">{{ item.texto }}</p>
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
      pestañaActiva: 'regulados',
      infoMostrar: [],
      infoCompleta: {
        'regulados': [
        {
          'titulo': 'Vectores Oficiales', 
          'texto': 'Servicio de cálculo, determinación y proveeduría o suministro de precios actualizados para valuación de valores, documentos e instrumentos financieros. La licencia contiene el cierre oficial para los siguientes mercados nacionales: Gubernamental, Corporativo, Bancario, Derivados Listados (MexDer), Accionario y Fondos.' 
        },
        {
          'titulo': 'Curvas Oficiales',
          'texto': 'Paquete básico con curvas de descuento y valuación sobre tasas de interés, tipos de cambio y derivados (sin colateral) para mercados locales e internacionales.'
        },
        {'titulo': 'Matrices de Riesgo',
          'texto': 'Servicio que provee escenarios móviles y fijos sobre instrumentos de renta fija y variable para el cálculo de VaR histórico.'
        }
      ],
      'soluciones': [
        {
          'titulo': 'Portfolio Manager',
          'texto': 'Herramienta para la gestión de activos que incluye la administración de inventarios, definición de límites operativos, generación de escenarios “What If”, cálculo de rendimientos, error de seguimiento y valor en riesgo histórico (VaR).'
        },
        {
          'titulo': 'Curvas con Colateral',
          'texto': 'Servicio de generación de curvas sobre las principales tasas de referencia (TIIE de Fondeo, SOFR, ESTR, TONAR, SONIA, entre otras) considerando el colateral asociado a la operación valuada.'
        },
        {
          'titulo': 'Deterioro Financiero',
          'texto': 'Servicio que provee la tasa de probabilidad de incumplimiento y la tasa de severidad de la pérdida, conforme a lo establecido en el Boletín C-16 de las Normas de Información Financiera (NIF).'
        },
        {
          'titulo': 'Vector NIF VR',
          'texto': 'Servicio que reporta el nivel del instrumento (Nivel 1, 2 o 3), conforme a lo establecido en el Boletín B-17 de las Normas de Información Financiera (NIF) en materia de determinación del valor razonable.'
        }
      ],
      'personalizados': [
        {
          'titulo': 'Completo/Medio/Simple',
          'texto': 'Servicios o productos que se generan a solicitud del cliente. La complejidad del proyecto dependerá de si la información requerida ya existe en la base de datos de PiP, si es necesario desarrollar nuevos componentes, y/o si se requiere la contratación de licencias o insumos adicionales.'
        }
      ]


      },
      pestañasPorFilial: {
            "regulados": "Regulados",
            "soluciones": "Soluciones",
            "personalizados": "Personalizados"
        },
    };
  },
  methods: {
    cambiarPestaña(tab) {
      this.pestañaActiva = tab;
      this.infoMostrar = this.infoCompleta[tab];
    }
  },
  mounted() {
      this.cambiarPestaña(this.pestañaActiva);
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
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  min-width: 280px;
  max-width: 100%;
}

.titulo-info {
  font-weight: bold;
  color: #00a0d8;
  margin-bottom: 0.5rem;
}

.texto-info {
  color: #000;
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
