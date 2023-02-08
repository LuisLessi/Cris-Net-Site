import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
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
