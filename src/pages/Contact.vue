<template>
    <section>
      <article class="article-contact animated slide-in-left" >
        <p class="title-articles blue">CONTÁCTANOS</p>
        <p class="title-article-2">Mándanos un <span class="blue">Mensaje</span></p>
        <div v-if="contactoDelPais" class="text-contact">
            <p class="red">{{ contactoDelPais.nombre }}:</p>
            <p class="info-contacto">
            <span v-if="contactoDelPais.direccion">Dirección: {{ contactoDelPais.direccion }}<br></span>
            <span v-if="contactoDelPais.correo">
                Correo:
                <a :href="`mailto:${contactoDelPais.correo}`" class="blue">{{ contactoDelPais.correo }}</a><br>
            </span>
            <span v-if="contactoDelPais.telefono">
                Número Telefónico:
                <a :href="`tel:${contactoDelPais.telefono}`" class="blue">{{ contactoDelPais.telefono }}</a>
            </span>
            </p>
        </div>

      </article>
      <article class="article-form">
        <form class="form-contact animated slide-in-right" @submit.prevent="enviarFormulario">
            <h1>PODEMOS AYUDARTE</h1>
            <div class="name-lastname">
                <label for="name">Nombre</label>
                <label for="last_name" class="lastname">Apellidos</label>
            </div>
            <div class="name-lastname">
                <input type="text" id="name" v-model="form.FirstName" required />
                <input type="text" id="last_name" v-model="form.SecondName" class="lastname" required />
            </div>
            <div class="name-lastname">
                <p class="text-help">Introduce tu nombre</p>
                <p class="text-help lastname">Introduce tu apellido</p>
            </div>
            <label for="email">Email</label><br>
            <input type="email" id="email" v-model="form.Email" required />
            <p class="text-help">Example: mail@piplatam.com</p>
            <label for="filial">Filial</label><br>
            <select id="filial" v-model="form.Filial" required class="input">
                <option value="México" selected>México</option>
                <option value="Perú">Perú</option>
                <option value="Colombia">Colombia</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Panamá">Panamá</option>
                <option value="Honduras">Honduras</option>
            </select>
            <p class="text-help">Selecciona la filial correspondiente</p>
            <label for="comentario">Mensaje</label><br>
            <textarea v-model="form.Message"></textarea>
            <p class="text-help">¿Cómo podemos ayudarte?</p>
            <div class="button-container">
                <button class="button-blue">Enviar</button>
            </div>

        </form>
        <div v-if="mostrarModal" class="modal-mensaje" :class="{'modal-error': errorAlEnviar}">
            <p>{{ mensajeModal }}</p>
        </div>
      </article>
    </section>
 </template>


<script>
import { useGeo } from '@/composables/useGeo';

export default {
  name: 'ContactPage',
  data() {
    return {
      contactos: {
        'Mexico': {
          nombre: 'PiP México',
          direccion: 'Torre Esmeralda II, Boulevard Manuel Ávila Camacho N° 36, Piso 22, Lomas de Chapultepec, CP 11000, Ciudad de México',
          correo: 'comercial@piplatam.mx',
          telefono: '+52(55)94483000'
        },
        'Colombia': {
          nombre: 'PiP Colombia',
          direccion: 'Carera 9, N°77-67, Oficina 902, Bogotá',
          correo: 'comercial@piplatam.co',
          telefono: '+57(60)17448480'
        },
        'Peru': {
          nombre: 'PiP Perú',
          direccion: 'Av. República de Panamá N°3418, Oficina 2101 San Isidro, Edificio Barlovento',
          correo: 'comercialpe@piplatam.pe',
          telefono: '+51(1)6156161'
        },
        'Costa Rica': {
          nombre: 'PiP Costa Rica',
          direccion: null,
          correo: 'dvarela@piplatam.cr',
          telefono: '+50622047005'
        },
        'Panama': {
          nombre: 'PiP Panamá',
          direccion: null,
          correo: 'rcervantes@piplatam.com.pa',
          telefono: null
        },
        'Honduras': {
          nombre: 'PiP Honduras',
          direccion: null,
          correo: 'fgonzalezq@piplatam.hn',
          telefono: null
        }
      },
      pais: null,
      form: {
        FirstName: "",
        SecondName: "",
        Company: "",
        Position: "",
        Email: "",
        Filial: "",
        Country: "",
        City: "",
        Message: "",
        type: 'c'
    },
    mostrarModal: false,
    mensajeModal: "",
    errorAlEnviar: false
    };
  },
  computed: {
    contactoDelPais() {
      return this.contactos[this.pais] || this.contactos['Mexico'];
    }
  },
  methods: {
    async enviarFormulario() {
        try {
            const response = await fetch(process.env.VUE_APP_API_FORM_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.form),
            });

            if (!response.ok) throw new Error('Error al enviar el formulario');

            await response.json();

            this.mostrarModal = true;
            this.mensajeModal = '¡Formulario enviado con éxito!';
            this.errorAlEnviar = false;

            // Limpiar campos
            Object.keys(this.form).forEach(key => {
            if (key !== 'Type') this.form[key] = "";
            });

        } catch (error) {
            console.error('Hubo un error al enviar el formulario:', error);
            this.mostrarModal = true;
            this.mensajeModal = 'Hubo un error al enviar el formulario.';
            this.errorAlEnviar = true;
        } finally {
            setTimeout(() => {
            this.mostrarModal = false;
            }, 5000);
        }
    }
  },
  mounted() {
    const { geoData, loadGeoData } = useGeo();
    loadGeoData().then(() => {
      this.pais = geoData.value.country_name;
    });
  }
};
</script>

<style scoped>
    section{
        background: rgb(1,1,36);
        background: -moz-linear-gradient(90deg, rgba(1,1,36,1) 0%, rgba(16,21,77,1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(1,1,36,1) 0%, rgba(16,21,77,1) 100%);
        background: linear-gradient(90deg, rgba(1,1,36,1) 0%, rgba(16,21,77,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#010124",endColorstr="#10154d",GradientType=1);
        min-height: 100vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .article-contact {
    width: 37%;
    margin: 0 0 0 auto;
    padding: 20px;
    box-sizing: border-box;
    }

    .red{
        color: #d83127;
        margin: 0 !important;
    }
    
    .info-contacto{
        width: 85%;
        margin-top: 0;
    }

    .info-contact i{
        margin-right: 10px;
    }

    .article-form{
        width: 30%;
        margin: 0 auto 0 0;
    }

    .form-contact{
        padding: 20px;
        background-color: #21244d;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        border-radius: 8px;
    }

    .name-lastname{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    .name-lastname p{
        width: 100%;
    }

     .modal-mensaje {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #28a745;
        color: white;
        padding: 12px 24px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        font-weight: bold;
        z-index: 1000;
        animation: fadeInOut 5s ease-in-out forwards;
    }

    .modal-error {
        background-color: #dc3545;
    }

    .lastname{
        margin-left: 1em;
    }

    label{
        margin-right: auto;
    }

    input, textarea, .input{
        width: 100%;
        border: none;
        border-radius: 8px;
        height: 3em;
    }

    textarea{
        resize: none;
        height: 9em;
    }

    .button-container{
        display: flex;
        justify-content: center;
    }

    .text-help{
        font-size: 0.7em;
        color: rgba(255, 255, 255, 0.6);
        margin: 0.4em 0 3em 0;
    }

    a {
        text-decoration: none !important;
    }


    @media (max-width: 1600px) {
        .article-contact {
            width: 40%;
            margin-top: 2.8em;
        }
        
        .article-form{
            margin-left: 2em;
            width: 35%;
        }

        .text-contact{
            width: 100%;
        }

        .info-contact{
            margin: 1em 0 0 1em;
        }
    }

    @media (max-width: 1200px) {
        .article-contact {
            width: 40%;
            margin-top: 2.8em;
        }
        
        .article-form{
            margin-top: 3em;
            margin-left: 2em;
            width: 45%;
        }

        .text-contact{
            width: 100%;
        }

        .info-contact{
            margin: 1em 0 0 1em;
        }

        .info-contacto{
            width: 100%;
            margin-top: 0;
        }
    }

    @media (max-width: 768px) {
        section{
            flex-direction: column;
            justify-content: left;
            height: auto;
        }

        .article-contact {
            width: 100%;
            margin-top: 2.5em;
        }

        .article-form{
            width: 100%;
            margin: 0;
        }

        .text-contact{
            width: 100%;
        }

        .info-contact{
            margin: 1em 0 0 1em;
        }
    }
 </style>  