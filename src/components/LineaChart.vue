<template>
    <div class="chart-container">
      <canvas ref="canvas"></canvas>
    </div>
</template>
  
<script>
  import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Legend, Tooltip } from 'chart.js';
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Legend, Tooltip);

  
  export default {
    name: "LineaChart",
    props: {
      grafica: {
        type: Object,
        required: true
      }
    },
    mounted() {
      this.renderChart();
    },
    methods: {
        renderChart() {
            const ctx = this.$refs.canvas.getContext("2d");
            new Chart(ctx, {
                type: "line",
                data: {
                labels: this.grafica.datos.map((punto) => punto.plazo),
                datasets: [
                    {
                    label: this.grafica.titulo,
                    data: this.grafica.datos.map((punto) => punto.valor),
                    borderColor: "red",
                    borderWidth: 2,
                    backgroundColor: "rgba(0, 0, 255, 0.1)",
                    tension: 0.4,
                    },
                ],
                },
                options: {
                responsive: true,
                plugins: {
                    legend: { display: true },
                    title: { display: true, text: this.grafica.titulo },
                },
                scales: {
                    x: { type: "category" },
                    y: { type: "linear" },
                },
                },
            });
        }
    },
  };
  </script>
  
<style scoped>
  .chart-container {
    background-color: rgb(6, 11, 40);
    padding: 10px; 
    border-radius: 10px;
    border: 0.5px solid #ccc; 
  }
  canvas {
    max-width: 100%;
  }
  </style>
  