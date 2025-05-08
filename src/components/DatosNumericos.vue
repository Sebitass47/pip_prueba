<template>
    <article class="datos-numericos">
        <div class="dato-numerico">
            <h1 class="title"><span class="blue">+</span>100,000</h1>
        <p class="transparent">Precios diarios de valuación</p>
        </div>
        <div class="dato-numerico">
            <h1 class="title"><span class="blue">+</span>5</h1>
        <p class="transparent">Paises en los que tenemos presencia</p>
        </div>
        <div class="dato-numerico">
            <h1 class="title"><span class="blue">+</span>25</h1>
            <p class="transparent">Precios diarios de valuación</p>
        </div>
    </article>
</template>

<script>
export default {
    name: 'DatosComponent',
  };
</script>


<style scoped>
.datos-numericos{
  width: 90%;
  display: flex;
  justify-content: space-between;
  text-align: center;
}

</style>