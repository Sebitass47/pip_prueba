<template>
    <div class="contenedor-tabla">
      <div class="header">
        <span class="opcion-menu">HORARIOS DE LIBERACIÓN</span>
        <div class="leyenda">
          <p><strong>CIERRE ALEATORIO:</strong> {{ cierreAleatorio }}</p>
          <span class="contenedor-horarios">
              <p class="inicio">🟩 Inicia: {{ inicio }}</p>
              <p class="fin">🟥 Finaliza: {{ fin }}</p>
            </span>
        </div>
      </div>
      <div class="table-container scroll">
            <table class="tabla-horarios">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Operativo</th>
                        <th>Previo</th>
                        <th>Definitivo</th>
                        <th>Complementos</th>
                        <th>Reproceso</th>
                        <th>Regeneración</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in procesos" :key="index">
                        <td>{{ item.nombre }}</td>
                        <td>{{ item.operativo }}</td>
                        <td>{{ item.previo }}</td>
                        <td class="definitivo">{{ item.definitivo }}</td>
                        <td>{{ item.complementos }}</td>
                        <td>{{ item.reproceso }}</td>
                        <td>{{ item.regeneracion }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TablaHorarios',
    data() {
      return {
        cierreAleatorio: '13:57',
        inicio: '17:12',
        fin: '19:12',
        procesos: [
          {
            nombre: 'Vector Aforado Promedio',
            operativo: '',
            previo: '',
            definitivo: '18:44',
            complementos: '',
            reproceso: '',
            regeneracion: ''
          },
          {
            nombre: 'Benchmark',
            operativo: '',
            previo: '',
            definitivo: '19:02',
            complementos: '',
            reproceso: '',
            regeneracion: ''
          },
          {
            nombre: 'Vector Consar',
            operativo: '',
            previo: '',
            definitivo: '17:12',
            complementos: '',
            reproceso: '',
            regeneracion: ''
          },
          {
            nombre: 'Curvas',
            operativo: '',
            previo: '',
            definitivo: '16:04',
            complementos: '',
            reproceso: '',
            regeneracion: ''
          },
          {
            nombre: 'Vector de Derivados',
            operativo: '',
            previo: '',
            definitivo: '16:25',
            complementos: '',
            reproceso: '',
            regeneracion: ''
          },
          {
            nombre: 'Vector de Índices',
            operativo: '',
            previo: '',
            definitivo: '17:14',
            complementos: '',
            reproceso: '',
            regeneracion: ''
          },
          {
            nombre: 'Matriz Alfa',
            operativo: '',
            previo: '',
            definitivo: '18:57',
            complementos: '',
            reproceso: '',
            regeneracion: ''
          },
          {
            nombre: 'Matriz Alfa Reparto',
            operativo: '',
            previo: '',
            definitivo: '16:09',
            complementos: '',
            reproceso: '',
            regeneracion: ''
          },
          {
            nombre: 'Matriz Delta',
            operativo: '',
            previo: '',
            definitivo: '19:45',
            complementos: '',
            reproceso: '',
            regeneracion: ''
          },
          {
            nombre: 'Matriz Omega de Acciones',
            operativo: '',
            previo: '',
            definitivo: '18:32',
            complementos: '',
            reproceso: '',
            regeneracion: ''
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .contenedor-tabla {
    
    background-color: white;
    color: black;
    font-family: Arial, sans-serif;
    max-width: 100%;
    border-radius: 10px;
  }

  .contenedor-tabla p{
    font-family: 'Poppins', sans-serif;
  }

  .opcion-menu{
    font-family: 'Poppins', sans-serif;
    text-align: center;
    cursor: pointer;
    font-size: 1.2em;
    background-color: white;
    color: black;
    font-weight: 700;
  }

  .opcion-menu i{
    font-size: 2.3em;
    color: #009ed8;
  }

  .table-container{
    width: 100%;
    
    border-radius: 10px;
    max-height: 220px;
    overflow-y: auto;
  }

  .tabla-horarios{
    width: 100%; /* Ocupa todo el ancho disponible */
    border-collapse: collapse; /* Elimina el espacio entre bordes */
    background-color: white; /* Fondo blanco para toda la tabla */
    font-family: 'Poppins', sans-serif;
    border-radius: 10px;
    overflow: hidden;
  }

  .tabla-horarios thead {
    background-color: #17406b; /* Fondo gris claro para el encabezado */
    color: white;
  }

  .tabla-horarios th, .tabla-horarios td {
    text-align: left; /* Alineación del texto */
    padding: 4px; /* Espaciado interno */
    border-top: none;
    border-left: none;
    border-right: none;
  }

  .tabla-horarios tbody tr {
    
    border-bottom: 1px solid #ccc;
  }

  .tabla-horarios tbody tr:last-child {
    border-bottom: none; /* Elimina la línea final si no quieres */
  }
  
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
    padding: 0 0.5em;
  }

  .header p{
    margin-bottom: 0;
  }
  
  .leyenda {
    display: flex;
    flex-direction: column;
  }

  .leyenda p{
    margin-top: 0;
  }
  
  .contenedor-horarios{
    display: flex;
    justify-content: space-between;
  }

  .inicio {
    color: green;
  }
  
  .fin {
    color: red;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
  }
  
  th, td {
    border: 1px solid #ccc;
    padding: 6px 8px;
    text-align: left;
  }

  .scroll::-webkit-scrollbar {
    width: 8px; /* Ancho del scrollbar */
  }

  /* Estilo del track (fondo del scrollbar) */
  .scroll::-webkit-scrollbar-track {
    background: #f1f1f1; /* Color gris claro */
    border-radius: 10px; /* Orillas redondeadas */
  }

  /* Estilo del thumb (barra que se mueve) */
  .scroll::-webkit-scrollbar-thumb {
    background: #888; /* Color gris */
    border-radius: 10px; /* Orillas redondeadas */
  }

  /* Hover en el thumb (cuando pasas el mouse sobre la barra) */
  .scroll::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color gris oscuro */
  }
  
  .definitivo {
    background-color: #dcd6f3;
    text-align: center !important;
  }
  </style>
  