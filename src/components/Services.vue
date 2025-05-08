<template>
    <article class="nuestros-servicios">
      <h1 class="title-articles blue">NUESTROS SERVICIOS</h1>
      <h1 class="title-article-2">LÍNEAS DE <span class="blue">NEGOCIO</span></h1>
      <p class="transparent">Sabemos de las necesidades de nuestros clientes, por eso es importante elegir lo que se requiere para cada uno de ellos.</p>
      <div class="cards-container">
        <div class="card grey">
          <h1 class="title-card">REGULADOS</h1>
          <p class="text-card">Productos que son exigidos a un proveedor de precios por regulación, sea propia o del cliente</p>
          <ul>
            <li>Vectores Oficiales</li>
            <li>Curvas Oficiales</li>
            <li>Matrices de Riesgo</li>
          </ul>
          <router-link to="/contacto" class="button-contact dark-blue">Contáctanos</router-link>
        </div>
        <div class="card blue-card">
          <h1 class="title-card">SOLUCIONES</h1>
          <p class="text-card">Productos complementarios a la proveeduría tradicional y que buscan satisfacer una necesidad particular del cliente. Implican la generación de contenido por parte de PiP.</p>
          <ul>
            <li>Consultoría y Capacitación</li>
            <li>Curvas</li>
            <li>Derivados</li>
            <li>Herramientas</li>
            <li>Índices</li>
            <li>Riesgos</li>
            <li>Superficies</li>
            <li>Valuaciones Especiales</li>
          </ul>
          <router-link to="/contacto" class="button-contact white">Contáctanos</router-link>
        </div>
        <div class="card grey">
          <h1 class="title-card">PERSONALIZADOS</h1>
          <p class="text-card">Productos hechos a la medida del cliente cuyo insumo principal es un producto o servicio ya generado previamente por PiP</p>
          <ul>
            <li>Complejo</li>
            <li>Medio</li>
            <li>Simple</li>
          </ul>
          <router-link to="/contacto" class="button-contact  dark-blue">Contáctanos</router-link>
        </div>
      </div>
    </article>
</template>

<script>
  export default {
    name: 'ServicesComponent',
  };
</script>

<style scoped>
.nuestros-servicios{
  display: flex;
  margin-top: 5em;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 80%;
}

.nuestros-servicios > p{
  width: 80%
}
.cards-container{
  width: 100%;
  margin: 2em 0 4em 0;
  display: flex;
  display: grid;
  gap: 2em; /* Espacio entre las tarjetas */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.card{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1em ;
  background-color: #21244d;
  border-radius: 20px;  
}

.title-card{
  font-size: 1.4em;
  margin: 0;
}

.text-card{
  text-align: left;
  margin-bottom: 1em;
}

.card ul{
  min-height: 200px;
  text-align: left;
}

.grey{
  background-color: #acb3b3;
  color: #01031a;
}

.blue-card{
  background-color: #009ed9;
  color:white;
}

.button-contact{
    padding: 1em 2.5em;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1em;
    letter-spacing: 1px;
    border: none;
    border-radius: 15px;
    text-decoration: none;
  }

  .dark-blue{
    background-color: #161b4e;
    color: white;
  }

  .white{
    background-color: white;
    color: #161b4e;
  }
</style>