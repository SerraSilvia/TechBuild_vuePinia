import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Botiga from '@/views/Botiga.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/botiga', name: 'Botiga', component: Botiga }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router