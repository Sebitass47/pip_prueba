<template>
  <div id="app">
    <main>
      <MainNavbar></MainNavbar>
      <LoginComponent></LoginComponent>
      <router-view></router-view>
      <MainFooter></MainFooter>
    </main>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import MainNavbar from './components/Navbar.vue';
import LoginComponent from './components/Login.vue';
import MainFooter from './components/Footer.vue';
import { useGeo } from './composables/useGeo';

export default {
  name: 'App',
  components: {
    MainNavbar,
    LoginComponent,
    MainFooter
  },
  setup() {
    const { loadGeoData } = useGeo();

    onMounted(() => {
      loadGeoData(); // Se ejecuta una vez al montar la app
    });
  }
};
</script>



<style>

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-user-select: none; /* Safari y Chrome */
  -moz-user-select: none;    /* Firefox */
  -ms-user-select: none;     /* Internet Explorer/Edge */
  user-select: none;         /* Estándar */
}

#app{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  color: white;
}

main{
  width: 100%;
}

.button-blue{
  background-color: #009fd9;
  padding: 1em 2.5em;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1em;
  letter-spacing: 1px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  text-decoration: none;
}

.transparent{
      color: rgba(255, 255, 255, 0.6);
  }

  .title-articles{
      font-weight: 500;
      font-size: 1.4em; 
      margin-bottom: 0.5em;
  }

  .blue{
      color: #009ed8;
  }

  .title-article-2{
      font-weight: 700;
      font-size: 3em;
      margin: 0;
  }
  @media (max-width: 1600px) {
    .title-article-2{
      font-size: 2.8em;
    }
  }

  @media (max-width: 768px) {
    .title-article-2{
      font-size: 2.4em;
    }
  }

  /* Requiere: `animated` como clase base */
.animated {
  opacity: 0;
  transition: all 2s ease;
  will-change: transform, opacity;
}

.delay-2s {
  animation-delay: 2s;
}

/* Rebote desde arriba */
.bounce-in-top {
  animation: bounceInTop 1s ease forwards;
}
@keyframes bounceInTop {
  0% {
    opacity: 0;
    transform: translateY(-200px);
  }
  60% {
    opacity: 1;
    transform: translateY(30px);
  }
  80% {
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
/* De izquierda a derecha */
.slide-in-left {
  animation: slideInLeft 1s ease-out forwards;
}
@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-150px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* De derecha a izquierda */
.slide-in-right {
  animation: slideInRight 1s ease-out forwards;
}
@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: translateX(150px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Aparece poco a poco desde la derecha */
.fade-in-right {
  animation: fadeInRight 1.5s ease-out forwards;
}
@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>
