<template>
  <section>
    <article class="article-nosotros">
      <img :src="require('@/assets/img/about.png')" alt="Logo">
      <div class="text-nosotros">
        <h1 class="title-articles blue">NOSOTROS</h1>
        <h1  class="title-article-2">LOREM IPSUM DOLOR SIT AMET, <span class="blue">CONSECTETUR</span></h1>
        <p class="transparent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis, voluptatem voluptas atque architecto ipsum debitis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ullam dolorem aut mollitia in, soluta necessitatibus tempore voluptatem voluptas atque architecto ipsum debitis?</p>
        <div class="valores-container">
          <ul class="transparent">
            <li>Lorem ipsum </li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <ul class="transparent">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
      </div>
    </article>
    <article class="article-nosotros margin-menus">
      <div class="text-valores">
        <h1 class="title-articles blue">VALORES</h1>
        <h1 class="title-article-2">LOREM IPSUM DOLOR SIT AMET, <span class="blue">CONSECTETUR</span></h1>
        <p class="transparent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis, fuga odio voluptate reprehenderit eos?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis, fuga odio voluptate reprehenderit eos? Unde ullam dolorem aut mollitia in, soluta necessitatibus tempore voluptatem voluptas atque architecto ipsum debitis?</p>
      </div>
      <div class="vision-mision-container">
        <div class="vision">
          <h1>VISIÓN</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores, accusantium fugiat eveniet dignissimos doloribus inventore modi veniam perspiciatis, in, iste nulla at. Magnam eum error, voluptates assumenda expedita voluptas?</p>
        </div>
        <div class="mision">
          <h1>MISIÓN</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores, accusantium fugiat eveniet dignissimos doloribus inventore modi veniam perspiciatis, in, iste nulla at. Magnam eum error, voluptates assumenda expedita voluptas?</p>
        </div>
      </div>
    </article>
    <article class="expertos-valores">
      <h1 class="title-articles blue">EXPERTOS</h1>
      <h1 class="title-article-2">CONOCE A NUESTRO <span class="blue">EQUIPO</span></h1>
      <p class="transparent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis, fuga odio voluptate reprehenderit eos? Unde ullam dolorem aut mollitia in, soluta necessitatibus tempore voluptatem voluptas atque architecto ipsum debitis?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis, fuga odio voluptate reprehenderit eos? Unde ullam dolorem aut mollitia in, soluta necessitatibus tempore voluptatem voluptas atque architecto ipsum debitis?</p>
      <div class="expertos-imagenes-container">
        <div class="card">
          <img :src="require('@/assets/img/expert.png')" alt="Experto">
          <h1 class="nombre-experto">LOREM IPSUM</h1>
          <p class="cargo-experto transparent">Lorem ipsum</p>
          <hr/>
          <span class="redes-experto">
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-twitter"></i>
          </span>
        </div>
        <div class="card">
          <img :src="require('@/assets/img/expert.png')" alt="Experto">
          <h1 class="nombre-experto">LOREM IPSUM</h1>
          <p class="cargo-experto transparent">Lorem ipsum</p>
          <hr/>
          <span class="redes-experto">
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-twitter"></i>
          </span>
        </div>
        <div class="card">
          <img :src="require('@/assets/img/expert.png')" alt="Experto">
          <h1 class="nombre-experto">LOREM IPSUM</h1>
          <p class="cargo-experto transparent">Lorem ipsum</p>
          <hr/>
          <span class="redes-experto">
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-twitter"></i>
          </span>
        </div>
        <div class="card">
          <img :src="require('@/assets/img/expert.png')" alt="Experto">
          <h1 class="nombre-experto">LOREM IPSUM</h1>
          <p class="cargo-experto transparent">Lorem ipsum</p>
          <hr/>
          <span class="redes-experto">
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-twitter"></i>
          </span>
        </div>
      </div>
    </article>
  </section>
</template>
<script>
export default {
  name: 'NosotrosPage',
};
</script>

<style scoped>
section{
  background-color: #01031a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.article-nosotros{
  width: 90%;
  min-height: 85vh;
  display: flex;
  margin-top: 70px; 
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
}

.article-nosotros img{
  width: 45%;
}

.text-nosotros{
  width: 40%;
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

.text-valores{
  margin-left: 2em;
  width: 45%;
}

.text-valores p{
  width: 95%;
}

.margin-menus{
  margin-top: -10em !important;
}

.vision-mision-container{
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 1em 0;
}

.vision, .mision {
  max-width: 300px;
  background-color: #151b4d;
  border: #009ed8 1px solid;
  margin: 1em;
  padding: 0 1em 0.5em 1em;
  border-radius: 8px;
  box-shadow: 0 14px 28px rgba(0, 158, 216, 0.25), 0 10px 10px rgba(0, 158, 216, 0.22);
}

.expertos-valores{
  display: flex;
  margin-top: 5em;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 80%;
}

.expertos-valores > p{
  width: 80%
}
.expertos-imagenes-container{
  width: 100%;
  margin: 2em 0 4em 0;
  display: flex;
  display: grid;
  gap: 2em; /* Espacio entre las tarjetas */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.card{
  padding: 0.5em;
  background-color: #21244d;
  border-radius: 8px;
}

.card img{
  border-radius: 5px;
  width: 100%;
  object-fit: cover;
}

.nombre-experto{
  font-weight: 500;
  margin: 0.5em 0 0 0;
}

.cargo-experto{
  font-weight: 200;
  margin-bottom: 1em;
  margin: 0
}

hr{
  border: none;
  height: 1px; /* Grosor del `<hr>` */
  background-color: #24456c;
  width: 90px;
  margin-bottom: 1em;
}

.redes-experto{
  margin: 0 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: #8cd3ff;
}
@media (max-width: 1200px) {
  .article-nosotros img{
    width: 70%;
  }

  .text-nosotros{
    width: 100%;
    margin-left: 3em;
  }

  .text-valores h1{
    width: 90%;
  }

  .text-valores p{
    width: 90%;
  }

  .vision-mision-container{
      flex-direction: row;
      width: 50%;
    }

  }

  @media (max-width: 860px) {
    .article-nosotros{
      width: 100%;
      margin-top: 70px;
      min-height: 90vh;
      padding: 0;
      display: flex;
      flex-direction: column;
    }

    .margin-menus{
        margin-top: 0 !important;
      }

    .text-nosotros{
      width: 90%;
      margin-left: 0;
    }

    .valores-container ul{
      width: 40%;
    }

    .article-nosotros img{
      width: 90%;
    }

    .text-valores{
      margin-left: 0;
    }

    .text-valores h1{
      width: 100%;
    }

    .text-valores p{
      width: 100%;
    }

    .vision-mision-container{
      flex-direction: row !important;
      width: 90%;
      margin-top: -5em ;
    }

    .text-valores{
      width: 90%;
    }

    .vision, .mision {
      max-width: 300px;
      background-color: #151b4d;
      border: #009ed8 1px solid;
      margin: 1em;
      padding: 0 1em 0.5em 1em;
      border-radius: 8px;
    }

  }

  @media (max-width: 768px) {
    .vision-mision-container{
      flex-direction: column !important;
      width: 90%;
      margin-top: 0em;
    }

    .margin-menus{
        margin-top: 0 !important;
      }
    
    .expertos-valores{
      margin-top: 1em;
    }

    .expertos-valores > p{
      width: 100%
    }
  }
</style>