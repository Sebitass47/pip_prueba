<template>
  <nav :class="{ 'navbar-transparent': isHomePage(), 'navbar-blue': !isHomePage() }">
    <!-- Barra de navegación para móviles -->
    <div class="mobile-nav" v-if="isMobile">
      <span class="logo">
        <router-link to="/"><img :src="logo" alt="Logo" class="logo" /></router-link>
      </span>
      <button @click="toggleMenu" class="hamburger">
        ☰
      </button>

      <div 
        v-if="menuOpen" 
        class="modal-container" 
        @click.self="menuOpen = false"
      >
        <div class="modal">
          <router-link to="/nosotros" class="link">NOSOTROS</router-link>
          <router-link to="/contacto" class="link">CONTACTO</router-link>
          <span class="link" @click.prevent="toggleLatamMenu">
            FILIALES
            <i class="bi bi-caret-up-fill" v-if="latamMenuOpen"></i>
            <i class="bi bi-caret-down-fill" v-else></i>
          </span>
          <div v-if="latamMenuOpen" class="latam-mobile-submenu">
            <router-link :to="{ name: 'FilialPage', params: { nombre: 'centroamerica' } }" class="latam-link">Centroamérica</router-link>
            <router-link :to="{ name: 'FilialPage', params: { nombre: 'colombia' } }" class="latam-link">Colombia</router-link>
            <router-link :to="{ name: 'FilialPage', params: { nombre: 'mexico' } }" class="latam-link">México</router-link>
            <router-link :to="{ name: 'FilialPage', params: { nombre: 'peru' } }" class="latam-link">Perú</router-link>
          </div>
          <button class="login-button" @click="openLoginModal">LOGIN</button>
        </div>
      </div>
    </div>

    <!-- Barra de navegación para escritorio -->
    <div class="desktop-nav" v-else>
      <span class="logo">
        <router-link to="/"><img :src="logo" alt="Logo" class="logo" /></router-link>
      </span>
      <span class="links">
        <router-link to="/nosotros" class="link">NOSOTROS</router-link>
        <router-link to="/contacto" class="link">CONTACTO</router-link>
        <span class="link" @click.prevent="toggleLatamMenu">
          FILIALES 
          <i class="bi bi-caret-up-fill" v-if="latamMenuOpen"></i>
          <i class="bi bi-caret-down-fill" v-else></i>
        </span>
        <div 
          v-if="latamMenuOpen" 
          class="latam-popup"
        >
          <router-link :to="{ name: 'FilialPage', params: { nombre: 'centroamerica' } }" class="latam-link">Centroamérica</router-link>
          <router-link :to="{ name: 'FilialPage', params: { nombre: 'colombia' } }" class="latam-link">Colombia</router-link>
          <router-link :to="{ name: 'FilialPage', params: { nombre: 'mexico' } }" class="latam-link">México</router-link>
          <router-link :to="{ name: 'FilialPage', params: { nombre: 'peru' } }" class="latam-link">Perú</router-link>
        </div>
        <button class="login-button" @click="openLoginModal">LOGIN</button>
      </span>
    </div>
  </nav>
</template>

<script>
import { isLoginModalOpen } from "@/composables/useLoginModal";
import { useRoute } from "vue-router";
export default {
  name: 'MainNavbar',
  data() {
    return {
      logo: require('@/assets/logo.svg'),
      menuOpen: false, // Controla si el menú está abierto o cerrado en móviles
      isMobile: window.innerWidth <= 1150, // Determina si es un dispositivo móvil
      latamMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 1150;
    },
    toggleLatamMenu() {
      this.latamMenuOpen = !this.latamMenuOpen; // Alterna el estado del menú LATAM +
    },
    openLoginModal() {
      isLoginModalOpen.value = true;
    },
    isHomePage() {
      const route = useRoute(); // Usamos useRoute para obtener la información de la ruta activa
      return route.name === "HomePage"; // Comparamos si la ruta es la página principal
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize); // Escucha el cambio de tamaño de la pantalla
  },
  unmounted() {
  window.removeEventListener('resize', this.handleResize);
}

};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}

.navbar-transparent {
  background-color: transparent;
  transition: background-color 0.3s ease; /* Suaviza la transición del cambio de fondo */
}

.navbar-blue {
  background-color: #151b4d;
  transition: background-color 0.3s ease;
}

.desktop-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  height: 2em;
  width: auto;
  margin-left: 16%;
}

.links {
  display: flex;
  gap: 3rem;
  margin-right: 13%;
}

.link {
  display: flex;
  text-decoration: none;
  gap: 0.5rem;
  align-items: center;
  color: inherit;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 1em 0;
}

.login-button {
  background-color: #009fd9;
  border: none;
  color: white;
  padding: 20px 40px;
  margin-bottom: 0.7em;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1em;
  letter-spacing: 1px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  width: 100%; /* Asegura que se extienda completamente */
  position: relative;
  top: 0;
}

.router-link-active {
  color: #009ed8;
}

.mobile-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 1em;
}

.hamburger {
  font-size: 2em;
  background: none;
  border: none;
  color: white;
}

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Fondo semitransparente */
  display: flex;
  justify-content: flex-end; /* Modal aparece al lado derecho */
  z-index: 10;
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2em;
  z-index: 10;
}

.modal .link {
  color: white;
  margin: 1em 0;
}

.latam-popup {
  position: absolute;
  top: 100%; /* Debajo del botón */
  left: 75%;
  background-color: #009fd9;
  color: white;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  z-index: 20;
}

.latam-link {
  display: block;
  padding: 0.5em 1em;
  text-decoration: none;
  border-radius: 5px;
  color: inherit;
}

.latam-link:hover {
  background-color: #151b4d;
}

.latam-mobile-submenu {
  text-align: center;
}

@media (max-width: 1150px) {
  .logo {
    margin-left: 5%;
  }

  .login-button {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 20px;
  }
}

@media (max-width: 1300px) {
  .latam-popup {/* Debajo del botón */
    left: 70%;
   
  }
}
</style>
