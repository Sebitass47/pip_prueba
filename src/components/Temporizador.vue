<template>
  <div class="temporizador">
    Tiempo restante para impugnar: {{ tiempoRestante }}
  </div>
</template>

<script>
export default {
  name: 'TemporizadorComponent',
  props: ['horaFin'],
  data() {
    return {
      tiempoRestante: ''
    };
  },
  mounted() {
    this.actualizarTiempo();
    this.timer = setInterval(this.actualizarTiempo, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
    actualizarTiempo() {
      const ahora = new Date();
      const [h, m] = this.horaFin.split(':').map(Number);
      const fin = new Date();
      fin.setHours(h, m, 0, 0);

      const diff = fin - ahora;
      if (diff <= 0) {
        this.tiempoRestante = '00:00:00';
        clearInterval(this.timer);
        return;
      }

      const horas = String(Math.floor(diff / 3600000)).padStart(2, '0');
      const minutos = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
      const segundos = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');

      this.tiempoRestante = `${horas}:${minutos}:${segundos}`;
    }
  }
};
</script>
<style scoped>

.temporizador {
  font-weight: bold;
  color: #444;
}
</style>