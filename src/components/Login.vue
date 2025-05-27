<template>
      <!-- Pop-up de inicio de sesión -->
      <div class="modal-overlay" v-if="isLoginModalOpen" @click.self="closeModal">
        <div class="modal-content">
          <h3>Favor de llenar los campos señalados</h3>
          
          <form @submit.prevent="handleLogin">
            <input type="text" id="username" v-model="username" placeholder="USUARIO" required />
  
            <input type="password" id="password" v-model="password" placeholder="CONTRASEÑA" required />
  
            <button type="submit" class="button-blue submit-button">Ingresar</button>
          </form>
  
          <p class="forgot-password">
            ¿Olvidaste tu contraseña? <a href="#">Haz clic aquí</a>
          </p>
        </div>
      </div>
  </template>
  
  <script>
  import { isLoginModalOpen } from "@/composables/useLoginModal";
  export default {
    name: 'LoginComponent',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    setup() {
        const closeModal = () => {
            isLoginModalOpen.value = false;
        };
        return { isLoginModalOpen, closeModal };
    },
    methods: {
      handleLogin() {
        alert(`Usuario: ${this.username}, Contraseña: ${this.password}`);
        this.showModal = false;
      }
    }
  };
  </script>
  
  <style scoped>
  
  /* Modal */
  .modal-overlay {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: #21244d;
    padding: 1em 2em;
    border-radius: 10px;
    max-width: 400px;
    width: 90%;
    text-align: center;
  }
  
  label {
    display: block;
    margin: 1em 0 0.5em;
    font-weight: bold;
  }
  
  input {
        width: 100%;
        margin-bottom: 1em;
        border: 1px solid #ccc;
        border-radius: 8px;
        height: 3em;
  }

  input::placeholder {
    padding-left: 1em;
    font-family: 'Montserrat', sans-serif;
}

  
.submit-button {
    box-shadow: none !important;
    padding: 0.5em 1em;
  }
  
  .forgot-password {
    font-size: 0.9em;
  }
  
  .forgot-password a {
    color: red;
    text-decoration: none;
  }

  </style>
  