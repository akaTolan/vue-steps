import Vue from 'vue'
import VueRouter from 'vue-router'
import Preparar from '../views/Preparar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/preparar',
    name: 'Preparar',
    component: Preparar
  },
  { path: '/', redirect: '/preparar' },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
