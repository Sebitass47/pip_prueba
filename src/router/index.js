import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Nosotros from '../pages/Nosotros.vue';
import Contact from '../pages/Contact.vue';
import Filiales from '../pages/Filiales.vue';
import Servicios from '../pages/Servicios.vue';

const routes = [
    { path: '/', component: Home, name: 'HomePage', meta: { title: 'Inicio' } },
    { path: '/nosotros', component: Nosotros, name: 'NosotrosPage', meta: { title: 'Nosotros' } },
    { path: '/contacto', component: Contact, name: 'ContactPage', meta: { title: 'Contacto' } },
    { path: '/servicios/', component: Servicios, name: 'ServiciosPage', meta: { title: 'Servicios' } },
    { path: '/filiales/:nombre', component: Filiales, name: 'FilialPage', meta: { title: 'Filiales' } }
];  

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
});

// Aquí agregamos el cambio dinámico del título
router.beforeEach((to, from, next) => {
  const baseTitle = "PIP Latam";
  if (to.meta.title) {
    document.title = to.path === '/' 
      ? baseTitle 
      : `${baseTitle} - ${to.meta.title}`;
  } else {
    document.title = baseTitle;
  }
  next();
});

export default router;
