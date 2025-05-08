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
import MainNavbar from './components/Navbar.vue';
import LoginComponent from './components/Login.vue';
import MainFooter from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    MainNavbar,
    LoginComponent,
    MainFooter
  },
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
</style>
