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
      events: [
        { year: 1988, title: 'CENCOR', location: 'MÉXICO', description: 'Fundación' },
        { year: 1993, title: 'CENTRAL DE ENLACES', location: 'MÉXICO', description: 'Creación' },
        { year: 1996, title: 'ENLACES PREBON', location: 'MÉXICO', description: 'Sociedad con Prebon Yamane' },
        { year: 1998, title: 'ENLACES PREBON', location: 'MÉXICO', description: 'Autorización de CNBV como facilitador de operación de valores' },
        { year: 2000, title: 'Otro evento', location: 'MÉXICO', description: 'Más historia...' },
      ]
    };
  },
  methods: {
    scrollLeft() {
      this.$refs.timelineRef.scrollBy({ left: -300, behavior: 'smooth' });
    },
    scrollRight() {
      this.$refs.timelineRef.scrollBy({ left: 300, behavior: 'smooth' });
    }
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
