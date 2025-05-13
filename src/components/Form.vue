<template>
    <article class="form-container">
        <form class="form-contact animated slide-in-right" >
            <div class="form-design-container">
                <div class="izquierda-form-container">
                    <h1>PODEMOS AYUDARTE</h1>
                    <div class="name-lastname">
                        <label for="name">Nombre</label>
                        <label for="last_name" class="lastname">Apellidos</label>
                    </div>
                    <div class="name-lastname">
                        <input type="text" id="name" required />
                        <input type="text" id="last_name" class="lastname" required />
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
                        <input type="text" id="compania" required />
                        <input type="text" id="cargo" class="lastname" required />
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
                        <input type="text" id="email" required />
                        <select id="filial" required class="input lastname">
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
                        <input type="text" id="pais" required />
                        <input type="text" id="ciudad" class="lastname" required />
                    </div>
                    <div class="name-lastname">
                        <p class="text-help">País desde el cual nos escribres</p>
                        <p class="text-help lastname">Nombre de tu ciudad</p>
                    </div>
                </div>
                <div class="derecha-form-container">
                    <label for="comentario">Mensaje</label>
                    <textarea></textarea>
                    <p class="text-help">¿Cómo podemos ayudarte?</p>
                </div>
            </div>
            <div class="button-container">
                <button class="button-blue">Enviar</button>
            </div>
        </form>
    </article>
</template>
 <script>
  export default {
    name: 'FormPage',
  };
 </script>
<style scoped>
    .form-container{
        width: 70%;
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