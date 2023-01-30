import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/planos',
      name: 'planos',
      component: () => import(/* webpackChunkName: "planos" */ '../views/Planos.vue')
    },
    {
      path: '/cobertura',
      name: 'cobertura',
      component: () => import(/* webpackChunkName: "planos" */ '../views/Cobertura.vue')
    },
    {
      path: '/Duvidas',
      name: 'duvidas',
      component: () => import(/* webpackChunkName: "planos" */ '../views/Duvidas.vue')
    },
  ]
})

export default router
