<template>
  <div class="timeline-container" v-intersect="iniciarAnimacion">
    <div class="timeline-center">
      <img src="@/assets/svg/Grupo_Cencor.svg" alt="Cencor" />
    </div>

    <!-- Cápsulas posicionadas de forma individual -->
    <transition name="fade-up">
      <div v-if="mostrar" class="capsula capsula-enlace">
        <img src="@/assets/svg/Grupo_Enlace.svg" alt="1993" />
      </div>
    </transition>

    <transition name="fade-up">
      <div v-if="mostrar" class="capsula capsula-pip">
        <img src="@/assets/svg/Grupo_Pip.svg" alt="2000" />
      </div>
    </transition>

    <transition name="fade-up">
      <div v-if="mostrar" class="capsula capsula-mei">
        <img src="@/assets/svg/Grupo_Mei.svg" alt="2005" />
      </div>
    </transition>

    <transition name="fade-up">
      <div v-if="mostrar" class="capsula capsula-biva">
        <img src="@/assets/svg/Grupo_Biva.svg" alt="2018" />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mostrar = ref(false)

function iniciarAnimacion() {
  mostrar.value = true
}
</script>

<style scoped>
.timeline-container {
  width: 100%;
}


.timeline-center img {
  width: 20em;
  height: auto;
}

/* Cápsulas generales */
.capsula {
  position: absolute;
  width: 15em;
  z-index: 5;
  opacity: 0;
  animation: fadeUp 0.8s ease forwards;
}

.capsula img {
  width: 100%;
}

/* Cápsulas posicionadas individualmente */
.capsula-enlace {
  top: 2%;
  left: 50%;
  animation-delay: 0s;
}

.capsula-pip {
  top: 25%;
  left: 60%;
  animation-delay: 1s;
}

.capsula-mei {
  bottom: 28%;
  left: 60%;
  animation-delay: 2s;
}

.capsula-biva {
  bottom: 3%;
  left: 50%;
  animation-delay: 3s;
}

/* Animación */
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateX(-40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 1200px) {
  .timeline-center img {
    width: 17em;
    height: auto;
  }

  /* Cápsulas posicionadas individualmente */
  .capsula-enlace {
    top: 2%;
    left: 40%;
    animation-delay: 0s;
  }

  .capsula-pip {
    top: 25%;
    left: 50%;
    animation-delay: 1s;
  }

  .capsula-mei {
    bottom: 28%;
    left: 50%;
    animation-delay: 2s;
  }

  .capsula-biva {
    bottom: 3%;
    left: 40%;
    animation-delay: 3s;
  }
}

@media (max-width: 860px) {
   .timeline-center img {
    width: 23em;
    height: auto;
  }
}

@media (max-width: 768px) {
   .timeline-center img {
    width: 12em;
    height: auto;
  }

  .capsula {
    position: absolute;
    width: 12em;
    z-index: 5;
    opacity: 0;
    animation: fadeUp 0.8s ease forwards;
  }

  .capsula-enlace {
    top: -10%;
    left: 40%;
    animation-delay: 0s;
  }

  .capsula-pip {
    top: 15%;
    left: 50%;
    animation-delay: 1s;
  }

  .capsula-mei {
    bottom: 20%;
    left: 50%;
    animation-delay: 2s;
  }

  .capsula-biva {
    bottom: -10%;
    left: 40%;
    animation-delay: 3s;
  }
}

</style>
