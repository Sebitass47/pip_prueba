<template>
    <section>
      <article class="article-contact">
        <p class="title-articles blue">CONTÁCTANOS</p>
        <p class="title-article-2">Mándanos un <span class="blue">Mensaje</span></p>
        <div class="text-contact">
            <p class="transparent">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptas molestiae magnam ut tempora cupiditate optio? Nostrum distinctio quia quo?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aspernatur dignissimos sit ratione neque laboriosam asperiores tempore consectetur pariatur minima!
            </p>
        </div>
        <div class="info-contact">    
            <p>OFFICE ADDRESS</p>
            <p><i class="bi bi-geo-alt-fill"></i>  Gallo de oro 74</p>
            <p>EMAIL ADDRESS</p>
            <p><i class="bi bi-envelope-fill"></i>  sdelarosa47@gmail.com</p>
            <p> PHONE NUMBER</p>
            <p><i class="bi bi-telephone-fill"></i> 5633715948</p>
        </div>
      </article>
      <article class="article-form">
        <form class="form-contact">
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
            <label for="email">Email</label><br>
            <input type="email" id="email" required />
            <p class="text-help">Example: mail@piplatam.com</p>
            <label for="comentario">Comentarios/Preguntas</label><br>
            <textarea></textarea>
            <p class="text-help">¿Cómo podemos ayudarte?</p>
            <div class="button-container">
                <button class="button-blue">Enviar</button>
            </div>

        </form>
      </article>
    </section>
 </template>


 <script>
  export default {
    name: 'ContactPage',
  };
 </script>

<style scoped>
    section{
        background: rgb(1,1,36);
        background: -moz-linear-gradient(90deg, rgba(1,1,36,1) 0%, rgba(16,21,77,1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(1,1,36,1) 0%, rgba(16,21,77,1) 100%);
        background: linear-gradient(90deg, rgba(1,1,36,1) 0%, rgba(16,21,77,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#010124",endColorstr="#10154d",GradientType=1);
        height: 100vh;
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

    .text-contact{
        width: 85%;
    }

    .info-contact{
        margin: 2.5em 0 0 1em;
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

    .lastname{
        margin-left: 1em;
    }

    label{
        margin-right: auto;
    }

    input, textarea{
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