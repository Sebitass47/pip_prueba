<template>
    <footer>
        <div class="footer-one">
            <div class="footer-pip">
                <h1>PiP</h1>
                <p class="footer-sections">SIGUENOS</p>
                <div class="redes-footer">
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-instagram"></i>
                </div>
            </div>
            <div class="empresas">
                <h1 class="footer-sections">EMPRESAS DEL GRUPO</h1>
                <div class="logos-empresas">

                    <img :src="enlace" alt="Logo de Enlace">
                    <img :src="mei" alt="Logo de Mei">
                    <img :src="biva" alt="Logo de Biva">
                    <img :src="cencor" alt="Logo de Cencor">
                </div>
            </div>
        </div>
        <div class="footer-two">
            <p>Copyright © 2025. Proveedor Integral de Precios. Todos los derechos reservados.</p>
            <div class="footer-links">
                <p>Términos & condiciones</p>
                <p>Políticas de Privacidad</p>
            </div>
        </div>
    </footer>   
</template>
  
  <script>
  export default {
    name: 'MainFooter',
    data() {
      return {
        enlace: require('@/assets/svg/enlace.svg'),
        mei: require('@/assets/svg/mei.svg'),
        biva: require('@/assets/svg/biva.svg'),
        cencor: require('@/assets/svg/cencor.svg'),
      };
    }
  };
  </script>
  
<style scoped>
  footer{
    display: flex;
    padding: 0 !important;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #929395;
    color: white;
    padding: 20px;
  }

  .footer-one{
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
}

.footer-sections{
    font-weight: 500;
    font-size: 1em;
    margin: 0 0 0.4em 0;
  }

  .redes-footer{
    display: flex;
    gap: 1.5em;
  }

  img{
    width: 10em;
    color: #122041;
  }

  .empresas{
    margin-top: 1em;
  }

  .logos-empresas{     
    width: 100%;
    display: flex;
    gap: 2em;
  }

  .footer-two{
    width: 100%;
    padding: 1.3em 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.8em;
    font-weight: 200;
    background-color: #151b4d;
    color: #dadce4;
  }

  .footer-links{
    display: flex;
    gap: 3em;
    flex-direction: row;
  }

  .footer-links p{
    cursor: pointer;
  }

  .footer-links p:hover{
    cursor: pointer;
    border-bottom: 0.5px solid white;
  }

  @media (max-width: 1180px) {
    .footer-one{
        width: 80%;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .footer-pip{
        margin-bottom: 1em;
    }

    .footer-two{
        flex-direction: column;
    }

    img{
        width: 10em;
    }
}

@media (max-width: 780px) {
    .logos-empresas{
        flex-direction: column;
        align-items: center;
    }

    .footer-two{
        text-align: center;
    }
    
  }
  </style>
  