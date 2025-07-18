import { createRouter, createWebHistory } from 'vue-router'
import CalculoView from '@/views/CalculoView.vue'
import RegistroView from '@/views/RegistroView.vue'


const routes = [
  {
    path: '/',
    redirect: '/calculo'
  },
  {
    path: '/calculo',
    name: 'Calculo',
    component: CalculoView
  },
  {
    path: '/registro',
    name: 'Registro',
    component: RegistroView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router