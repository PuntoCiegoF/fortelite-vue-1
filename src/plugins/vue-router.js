import { createWebHistory, createRouter } from 'vue-router'
import IndexView from '@/views/IndexView.vue'
import SegmentsView from '@/views/SegmentsView.vue'
import FinishesView from '@/views/FinishesView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ContactView from '@/views/ContactView.vue'
import AboutUsView from '@/views/AboutUsView.vue'

const routes = [
  { path: '/', component: IndexView, meta: { title: 'Inicio' } },
  { path: '/segments', redirect: '/segments/alimentos-y-bebidas', meta: { title: 'Segmentos' } },
  { path: '/segments/:segment_slug', component: SegmentsView, meta: { title: 'Segmentos' } },
  { path: '/acabados', component: FinishesView, meta: { title: 'Acabados' } },
  { path: '/clients', component: AboutUsView, meta: { title: 'Clientes' } },
  { path: '/services', component: ServicesView, meta: { title: 'Servicios' } },
  { path: '/:catchAll(.*)', redirect: '/', meta: { title: 'Inicio' } },
  { path: '/contact', component: ContactView, meta: { title: 'Contacto' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      // hace scroll suave al elemento con ese id
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80, // ajusta según la altura de tu header (80–140)
      }
    }
    return { top: 0 }
  },
})

router.beforeEach((to) => {
  const { title } = to.meta;
  const defaultTitle = 'Inicio';

  document.title = 'Fortelite -' + (title || defaultTitle);
})

export default router
