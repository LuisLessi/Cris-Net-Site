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
  ]
})

export default router
