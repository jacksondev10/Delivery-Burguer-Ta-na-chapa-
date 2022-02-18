import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Pedidos',
    name: 'Pedidos',
    component: () => import(/* webpackChunkName: "Pedidos" */ '../views/Pedidos.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
