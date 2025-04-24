import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Nosotros from '../pages/Nosotros.vue';
import Contact from '../pages/Contact.vue';
import Filiales from '../pages/Filiales.vue';

const routes = [
    { path: '/', component: Home, name: 'HomePage' },
    { path: '/nosotros', component: Nosotros, name: 'NosotrosPage' },
    { path: '/contacto', component: Contact, name: 'ContactPage' },
    {path: '/filiales/:nombre', component: Filiales, name: 'FilialPage'},
];  

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
