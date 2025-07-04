<template>
    <article class="datos-numericos">
      <div
        class="dato-numerico"
        v-for="(dato, index) in datos"
        :key="index"
        v-intersect="() => iniciarContador(index)"
      >
        <h1 class="title">
          <span class="blue">+</span>{{ contadores[index] }}
        </h1>
        <p class="transparent">{{ dato.descripcion }}</p>
      </div>
    </article>
  </template>
  
  <script>
  export default {
    name: 'DatosComponent',
    data() {
      return {
        datos: [
          { final: 150000, descripcion: 'Precios diarios de valuación' },
          { final: 5, descripcion: 'Paises en los que tenemos presencia' },
          { final: 25, descripcion: 'Años de experiencia en el mercado financiero' },
        ],
        contadores: [0, 0, 0],
        yaAnimado: [false, false, false],
      };
    },
    methods: {
  iniciarContador(index) {
    if (this.yaAnimado[index]) return;
    this.yaAnimado[index] = true;

    setTimeout(() => {
        const total = this.datos[index].final;
        const duration = 1500; // 1.5s
        const steps = 30;
        const incremento = total / steps;
        let actual = 0;

        const intervalo = setInterval(() => {
            actual += incremento;
            if (actual >= total) {
            this.contadores[index] = total.toLocaleString();
            clearInterval(intervalo);
            } else {
            this.contadores[index] = Math.floor(actual).toLocaleString();
            }
        }, duration / steps);
        }, 500); // 2 segundos de espera antes de iniciar
    }
}

  };
  </script>
  


<style scoped>
.datos-numericos{
  width: 90%;
  display: flex;
  justify-content: space-between;
  text-align: center;
}
@media (max-width: 768px) {
    .datos-numericos{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
        }
  }
</style>