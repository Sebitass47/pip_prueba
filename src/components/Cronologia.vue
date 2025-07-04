<template>
  <div class="timeline-wrapper">
    <div class="timeline-container">
      <div class="timeline" ref="timelineRef">
        <div class="timeline-item" v-for="(item, index) in events" :key="index">
          <p class="year">{{ item.year }}</p>
          <div class="content">
            <h3>{{ item.title }}</h3>
            <p class="location">{{ item.location }}</p>
            <p class="desc">{{ item.description }}</p>
          </div>
        </div>
      </div>

      <!-- Botones abajo -->
      <div class="buttons">
        <span class="arrow" @click="scrollLeft">‹</span>
        <span class="arrow" @click="scrollRight">›</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimelineCarousel',
  data() {
    return {
      utoScrollInterval: null,
      autoScrollActive: true,
      events: [
        { year: 2000, title: 'Autorización CNBV', description: 'Marca el inicio oficial de la empresa en el sector financiero mexicano.' },
        { year: 2000, title: 'Inicio de operaciones en México', description: 'Comienza la actividad operativa que consolida la presencia inicial.' },
        { year: 2001, title: 'Creación de PiP Benchmarks', description: 'Pioneros en índices de deuda en México, aportando transparencia y referencia al mercado.' },
        { year: 2005, title: 'Lanzamiento del Vector de Analíticos', description: 'Expansión de la oferta de servicios para el mercado financiero.' },
        { year: 2007, title: 'Fundación de PIPCA (Centroamérica)', description: 'Marca el inicio de nuestra expansión hacia los mercados del sur del continente.' },
        { year: 2008, title: 'Vector de PIPCA sustituye al de la Bolsa de Costa Rica', description: 'Consolida nuestra presencia y liderazgo en la región.' },
        { year: 2008, title: 'Ganadores en Perú como proveedor de precios', description: 'Seleccionados por Sociedades Administradoras de Fondos Mutuos del Perú como su proveedor de precios.' },
        { year: 2010, title: 'Autorización oficial en Perú', description: 'Autorización por parte de la Superintendencia del Mercado de Valores para operar formalmente.' },
        { year: 2011, title: 'Inicio de operaciones en Perú', description: 'Inicio de operaciones en el mercado peruano.' },
        { year: 2011, title: 'Inicio de operaciones en Panamá', description: 'Ampliando nuestra cobertura en Centroamérica.' },
        { year: 2013, title: 'Aprobación en Colombia', description: 'Ingreso al mercado colombiano tras aprobación de la Superintendencia Financiera.' },
        { year: 2013, title: 'Creación de RDVAL en República Dominicana', description: 'Apoyamos a la Bolsa de Valores de RD en el desarrollo del proveedor de precios RDVAL.' },
        { year: 2014, title: 'Migración a AWS', description: 'Migramos infraestructura a la nube de AWS, optimizando eficiencia y seguridad.' },
        { year: 2014, title: 'Alianza con FTSE para índices de renta fija', description: 'Desarrollo y comercialización de índices de renta fija bajo la marca FTSE PiP.' },
        { year: 2014, title: 'Aprobación de metodología Col MXN por CNBV', description: 'Consolidamos liderazgo técnico en valuación con la curva colateralizada en MXN.' },
        { year: 2015, title: 'FTSE PiP en Colombia', description: 'Creación y comercialización de índices de renta fija para el mercado colombiano.' },
        { year: 2016, title: 'Adquisición estratégica en Panamá', description: 'Nos consolidamos como el único proveedor autorizado de valoraciones razonables.' },
        { year: 2016, title: 'Alianza Numerix PiP', description: 'Acuerdo con Numerix para crear servicios en derivados con tecnología de punta.' },
        { year: 2017, title: 'Regulación en el mercado de Perú', description: 'Regulación obliga uso de proveedores de precios para entidades financieras.' },
        { year: 2018, title: 'Migración de Derivados a Curvas Colaterales', description: 'Traspaso exitoso de carteras de derivados a valuación con curvas colateralizadas.' },
        { year: 2020, title: 'Metodología curva SOFR', description: 'Construcción y comercialización de la curva colateralizada en USD con base SOFR.' },
        { year: 2020, title: 'Transición de FedFunds a SOFR', description: 'Cambio clave en estándares del mercado para derivados en USD.' },
        { year: 2021, title: 'Transición de TIIE a TIIE de Fondeo', description: 'Desarrollamos curva TIIE Fondeo como nueva referencia clave en el mercado mexicano.' },
        { year: 2022, title: 'Honduras: Vector de Precios', description: 'Creación del primer vector de precios para el mercado bursátil de Honduras.' },
        { year: 2024, title: 'Asociación con NetGo Chile', description: 'Comercialización de plataforma “Xymmetry” para gestión de portafolios de derivados.' },
        { year: 2024, title: 'Autorización oficial en Honduras', description: 'Autorización por parte de la CNBS como proveedor de precios.' },
        { year: 2024, title: 'Índices PiP en Costa Rica', description: 'Creación y comercialización de índices de renta fija en Costa Rica.' },
        { year: 2024, title: 'Lanzamiento de la Tasa PiP Fondeo 28D', description: 'Nueva referencia con información actualizada del mercado.' },
        { year: 2024, title: 'Lanzamiento de PiP Document Analyst', description: 'Herramienta con IA para extracción automatizada de datos de mercado.' },
        { year: 2024, title: 'Conversión de Swaps TIIE28D a TIIE de Fondeo', description: 'Conversión exitosa alineada a nuevas metodologías de valuación.' },
        { year: 2025, title: 'RDVAL adopta software SK1', description: 'Uso de software bajo licencia fortalece integración tecnológica en RD.' },
        { year: 2025, title: 'Lanzamiento de EMINA', description: 'Primera API para clientes que proporciona curvas, precios y analíticos.' },
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.startAutoScroll();
    });
  },
  beforeUnmount() {
    clearInterval(this.autoScrollInterval);
  },
  methods: {
    scrollLeft() {
      this.autoScrollActive = false;
      this.$refs.timelineRef.scrollBy({ left: -300, behavior: 'smooth' });
    },
    scrollRight() {
      this.autoScrollActive = false;
      this.$refs.timelineRef.scrollBy({ left: 300, behavior: 'smooth' });
    },
    startAutoScroll() {
      const step = () => {
        if (!this.autoScrollActive) return;

        const el = this.$refs.timelineRef;
        if (!el || !el.scrollWidth) return;

        const maxScrollLeft = el.scrollWidth - el.clientWidth;

        if (el.scrollLeft >= maxScrollLeft) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
          setTimeout(() => {
          if (this.autoScrollActive) {
              this.autoScrollInterval = requestAnimationFrame(step);
            }
          }, 800); 
        } else {
          el.scrollBy({ left: 5 });
          this.autoScrollInterval = requestAnimationFrame(step);
        }
      };

      this.autoScrollInterval = requestAnimationFrame(step);
    },
  }
  
};
</script>

<style scoped>
.timeline-wrapper {
  margin-top: 3em;
  width: 100%;
  color: white;
}

.title {
  font-size: 2rem;
  letter-spacing: 0.3em;
  margin-bottom: 2rem;
  font-weight: bold;
  text-align: center;
}

.timeline-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 4rem;
  padding: 1rem 2rem;
  scrollbar-width: none;
  width: 90%;
  max-width: 1000px;
}

.timeline::-webkit-scrollbar {
  display: none;
}

.timeline-item {
  flex: 0 0 auto;
  width: 200px;
  color: #fff;
  text-align: left;
}

.year {
  font-size: 2.5rem;
  color: #00aaff;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-weight: bold;
  margin-bottom: 1rem;
}

.content h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
}

.location {
  font-size: 0.85rem;
  color: #00aaff;
  margin: 0.2rem 0;
}

.desc {
  font-size: 0.8rem;
  color: #ccc;
  width: 100%;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 1.1rem;
  gap: 2rem;
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

@media (max-width: 768px) {
  .timeline-wrapper {
    width: 90%;
    color: white;
    }
  .timeline {
    padding: 1rem;
    gap: 2rem;
  }

  .timeline-item {
    min-width: 160px;
  }

  .year {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .content h3 {
    font-size: 0.95rem;
  }

  .location {
    font-size: 0.75rem;
  }

  .desc {
    font-size: 0.7rem;
  }

  .buttons {
    gap: 1rem;
    margin-top: 1rem;
  }

  .arrow {
    font-size: 1.5rem;
    padding: 0.3rem 0.6rem;
  }

  .title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .timeline-wrapper {
    padding: 1rem;
  }
}

</style>
