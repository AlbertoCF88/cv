import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/arte',
    name: 'Arte',
    component: () => import('../views/Arte.vue')
  },
  //arte en minusculas para diferenciar del Arte
  {
    path: '/arte/:page',
    name: 'arte',
    component: () => import('../views/Arte.vue')
  },
  {
    path: '/webs',
    name: 'Webs',
    component: () => import('../views/Webs.vue')
  },
  {
    path: '/post-it',
    name: 'Post-it',
    component: () => import('../views/Post-it.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
