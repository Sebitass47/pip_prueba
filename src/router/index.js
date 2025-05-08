import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Nosotros from '../pages/Nosotros.vue';
import Contact from '../pages/Contact.vue';
import Filiales from '../pages/Filiales.vue';
import Servicios from '../pages/Servicios.vue';

const routes = [
    { path: '/', component: Home, name: 'HomePage' },
    { path: '/nosotros', component: Nosotros, name: 'NosotrosPage' },
    { path: '/contacto', component: Contact, name: 'ContactPage' },
    {path: '/servicios/', component: Servicios, name: 'ServiciosPage'},
    {path: '/filiales/:nombre', component: Filiales, name: 'FilialPage'}
];  

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
});

export default router;
