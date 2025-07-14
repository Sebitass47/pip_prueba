<template>
    <footer>
        <div class="footer-one">
            <div class="footer-pip">
                <img :src="pip" alt="Logo de PIP" class='logo-pip'>
                <p class="footer-sections">SIGUENOS</p>
                <div class="redes-footer">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img :src="lkd" alt="Logo de Linkedin">
                  </a>

                </div>
            </div>
            <div class="empresas">
                <h1 class="footer-sections">EMPRESAS DEL GRUPO</h1>
                <div class="logos-empresas">
                  <img :src="enlace" alt="Logo de Enlace" class="logo enlace-logo">
                  <img :src="mei" alt="Logo de Mei" class="logo mei-logo">
                  <img :src="biva" alt="Logo de Biva" class="logo biva-logo">
                  <img :src="cencor" alt="Logo de Cencor" class="logo cencor-logo">
                  <img :src="quantit" alt="Logo de Quantit" class="logo enlace-logo">
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
        enlace: require('@/assets/svg/Enlace_Logo.svg'),
        mei: require('@/assets/svg/Mei_Logo.svg'),
        biva: require('@/assets/svg/Biva_Logo.svg'),
        cencor: require('@/assets/svg/Cencor_Logo.svg'),
        pip: require('@/assets/svg/PIP_logo.svg'),
        fb: require('@/assets/svg/FB_Logo.svg'),
        ig: require('@/assets/svg/IG_Logo.svg'),
        lkd: require('@/assets/svg/Linkedin_Logo.svg'),
        quantit: require('@/assets/svg/Quantit_Logo.svg'),
      };
    }
  };
  </script>
  
<style scoped>
  footer{
    position: relative;
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
    width: 100%;
  }
  
  .logo-pip{
    margin-top: 2em;
    width: 7em;
  }

  .redes-footer img{
    width: 2em;
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

  .logo {
    height: 80px; /* o el tamaño que tú necesites */
    object-fit: contain;
    display: block;
    margin: 0 auto;
  }

  /* Ajustes individuales */
  .enlace-logo {
    padding-top: 20px;
  }

  .mei-logo {
    padding-bottom: 15px;
  }

  .biva-logo {
    padding-top: 17px;
    transform: scale(0.9); 
    /* transform: translateY(4px); */
  }

  .cencor-logo {
    padding-top: 10px;
    padding-left: 15px;
    transform: scale(1.3); 
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

@media (max-width: 820px) {
    .logos-empresas{
        flex-direction: column;
        align-items: center;
    }

    .footer-two{
        text-align: center;
    }
    
  }
  </style>
  