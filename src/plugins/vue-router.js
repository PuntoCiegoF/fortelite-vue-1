import { createWebHistory, createRouter } from 'vue-router'
import IndexView from '@/views/IndexView.vue'

import SegmentsView from '@/views/SegmentsView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ContactView from '@/views/ContactView.vue'
import AboutUsView from '@/views/AboutUsView.vue'

const routes = [
  { path: '/', component: IndexView },
  {path: '/segments', redirect: '/segments/alimentos-y-bebidas'},
  { path: '/segments/:segment_slug', component: SegmentsView },
  { path: '/clients', component: AboutUsView },
  { path: '/services', component: ServicesView },
  { path: '/:catchAll(.*)', redirect: '/'},
  { path: '/contact', component: ContactView},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router