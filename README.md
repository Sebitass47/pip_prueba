# piplatam

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Environment Variables

Antes de correr el proyecto, asegúrate de crear los archivos .env.development y .env.produccion en la raíz del proyecto. Ambos archivos deben contener las siguientes variables:

```
VUE_APP_API_INDICADORES_URL=
VUE_APP_API_HORARIOS_URL=
VUE_APP_API_NOTIFICACIONES_URL=
VUE_APP_API_DOCUMENTOS_URL=
VUE_APP_API_SERVICIOS_URL=
VUE_APP_API_BANNERS_URL=
VUE_APP_API_FORM_URL=
VUE_APP_API_GRAFICA_URL=
```

Reemplaza los valores con las URLs correspondientes para desarrollo o producción.
