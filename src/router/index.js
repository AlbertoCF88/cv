import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
   // direccion base
  {
    path: '/arte',
    name: 'Arte',
    component: () => import('../views/Arte.vue')
  },
  
    // arte en minusculas para diferenciar del Arte, direccion componente cuadro
    {
      path: '/arte/:page',
      name: 'arte',
      component: () => import('../views/Arte.vue')
    },
     // direccion por cada foto del compornete cuadro
      {
        path: '/arte/:page/:fotografia',
        name: 'arte/:page',
        component: () => import('../components/ComDiapositiva.vue')
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
