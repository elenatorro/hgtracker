import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/expediciones',
    name: 'expediciones',
    component: () => import(/* webpackChunkName: "about" */ '../views/Expeditions.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
    path: '/nueva-expedicion',
    name: 'nueva-expedicion',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateExpedition.vue')
  },
  {
    path: '/expedicion/:id',
    name: 'expedicion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Expedition.vue')
  },
  {
    path: '/expedicion/:id/transecto/:tid',
    name: 'transecto',
    component: () => import(/* webpackChunkName: "about" */ '../views/Transect.vue')
  },
  {
    path: '/expedicion/:id/registro/:mode',
    name: 'registro-transecto',
    component: () => import(/* webpackChunkName: "about" */ '../views/TransectRecord.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
