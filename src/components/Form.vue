<template>
    <article class="form-container">
        <form class="form-contact animated slide-in-right"  @submit.prevent="enviarFormulario">
            <div class="form-design-container">
                <div class="izquierda-form-container">
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
                    <div class="name-lastname">
                        <label for="compania">Compañia</label>
                        <label for="cargo" class="lastname">Cargo</label>
                    </div>
                    <div class="name-lastname">
                        <input type="text" id="compania" v-model="form.Company" required />
                        <input type="text" id="cargo" class="lastname" v-model="form.Position" required />
                    </div>
                    <div class="name-lastname">
                        <p class="text-help">Nombre de la compañia o empresa</p>
                        <p class="text-help lastname">Título o cargo dentro de la empresa que labora</p>
                    </div>
                    <div class="name-lastname">
                        <label for="email">Email</label>
                        <label for="filial" class="lastname">Filial</label>
                    </div>
                    <div class="name-lastname">
                        <input type="text" id="email" v-model="form.Email" required />
                        <select id="filial" required v-model="form.Filial" class="input lastname">
                            <option value="México" selected>México</option>
                            <option value="Perú">Perú</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Panamá">Panamá</option>
                            <option value="Honduras">Honduras</option>
                        </select>
                    </div>
                    <div class="name-lastname">
                        <p class="text-help">Example: mail@piplatam.com</p>
                    </div>
                    <div class="name-lastname">
                        <label for="pais">País</label>
                        <label for="ciudad" class="lastname">Ciudad</label>
                    </div>
                    <div class="name-lastname">
                        <input type="text" id="pais" v-model="form.Country" required />
                        <input type="text" id="ciudad" v-model="form.City" class="lastname" required />
                    </div>
                    <div class="name-lastname">
                        <p class="text-help">País desde el cual nos escribres</p>
                        <p class="text-help lastname">Nombre de tu ciudad</p>
                    </div>
                </div>
                <div class="derecha-form-container">
                    <label for="comentario">Mensaje</label>
                    <textarea v-model="form.Message"></textarea>
                    <p class="text-help">¿Cómo podemos ayudarte?</p>
                </div>
            </div>
            <div class="button-container">
                <button class="button-blue">Enviar</button>
            </div>
        </form>
        <div v-if="mostrarModal" class="modal-mensaje" :class="{'modal-error': errorAlEnviar}">
            <p>{{ mensajeModal }}</p>
        </div>

    </article>
</template>
 <script>
  export default {
    name: 'FormPage',
    data() {
        return {
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
                Type: 's'
            },
            mostrarModal: false,
            mensajeModal: "",
            errorAlEnviar: false
        };
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


    }

  };
 </script>
<style scoped>
    .form-container{
        width: 90%;
    }
    .form-contact{
        padding: 20px;
    }
    
    .form-design-container{
        display: flex;
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

    .lastname{
        margin-left: 1em;
    }

    label{
        width: 6em;
        margin-right: auto;
    }

    input, textarea, .input{
        width: 100%;
        border: none;
        border-radius: 8px;
        height: 3em;
    }

    .izquierda-form-container{
        width: 60%;
    }

    .derecha-form-container{
        margin-left: 1em;
        margin-top: 4em;
        display: flex;
        width: 40%;
        flex-direction: column;
        justify-content: left;
        align-items: first baseline;
    }

    textarea{
        resize: none;
        height: 100%;
    }

    .button-container{
        display: flex;
        justify-content: center;
    }

    .text-help{
        font-size: 0.7em;
        color: rgba(255, 255, 255, 0.6);
        margin: 0.4em 0 3em 0;
        margin-bottom: 0.7em;
    }

    a {
        text-decoration: none !important;
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

    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
        10% { opacity: 1; transform: translateX(-50%) translateY(0); }
        90% { opacity: 1; }
        100% { opacity: 0; transform: translateX(-50%) translateY(20px); }
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

        .izquierda-form-container{
            width: 100%;
        }

        .derecha-form-container{
            width: 100%;
        }

        .text-contact{
            width: 100%;
        }

        .info-contact{
            margin: 1em 0 0 1em;
        }
    }

    @media (max-width: 1200px) {
        form{
            width: 100%;
        }
    
        .form-contact{
            width: 100%;
        }

        .form-design-container{
            width: 100%;
        }

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

    @media (max-width: 820px){
        .form-container{
            width: 90%;
        }
        .form-contact{
            padding: 0;
        }

        .button-container{
            margin-bottom: 3em;
        }
    }

    @media (max-width: 768px) {

        .form-design-container{
            width: 100%;
            display: flex;
            flex-direction: column;
        }

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

        .derecha-form-container{
            margin-left: 0em;
            margin-top: 0em;
        }

        textarea{
            height: 15em;
        }

        .text-contact{
            width: 100%;
        }

        .info-contact{
            margin: 1em 0 0 1em;
        }
    }
</style>