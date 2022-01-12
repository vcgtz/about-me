import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '',
    },
    component: Home,
  },

  {
    path: '/contact',
    name: 'Contact',
    meta: {
      title: 'Contacto',
    },
    component:Contact
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

const mainTitleSite = 'Vicente Gutiérrez';
router.afterEach(to => {
  if (to.meta.title) {
    document.title = `${to.meta.title} - ${mainTitleSite}`;
  } else {
    document.title = mainTitleSite;
  }
});

export default router;
