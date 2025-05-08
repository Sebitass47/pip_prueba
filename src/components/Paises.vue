<template>
    <article class="article-paises" :style="{ backgroundImage: `url(${require('@/assets/img/filiales/background.jpg')})` }">
        <div class="text-nosotros">
            <h1 class="title-articles blue">UN GRAN GRUPO</h1>
            <h1  class="title-article-2">SOMOS <span class="blue">PIP LATAM</span></h1>
            <p>Nuestro grupo está conformado por las siguientes empresas:</p>
            <div class="valores-container">
                <ul >
                    <li>México </li>
                    <li>Perú</li>
                    <li>Colombia</li>
                    <li>Costa Rica</li>
                </ul>
                <ul >
                    <li>Panamá</li>
                    <li>Honduras</li>
                    <li>Quantit</li>
                </ul>
            </div>
        </div>
    </article>
</template>

<script>
    export default{
        name: 'PaisesComponent',
    }
</script>
<style scoped>
    .article-paises{
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
    }

    .valores-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 1em 0;
    }

    .valores-container ul{
        width: 50%;
    }

    .text-nosotros{
        width: 40%;
        padding: 3em;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }

    @media (max-width: 860px) {
    .valores-container ul{
      width: 40%;
    }

    @media (max-width: 768px) {
        .valores-container ul{
            width: 100%;
        }

        .text-nosotros{
            width: 100%;
            padding: 3em;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
        }   
    }
}
</style>