// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Example route components
import Home from './views/Home.vue'
import About from './views/About.vue'
import ManufacturingExcellence from './views/ManufacturingExcellence.vue'
import Logistics from './views/Logistics.vue'
import Testimonials from './views/Testimonials.vue'
import Contact from './views/Contact.vue'
import Store from './views/Store.vue'
import PageNotFound from './components/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/manufacturing-excellence',
    name: 'ManufacturingExcellence',
    component: ManufacturingExcellence,
  },
  {
    path: '/logistics',
    name: 'Logistics',
    component: Logistics,
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: Testimonials,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/store',
    name: 'Store',
    component: Store,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
