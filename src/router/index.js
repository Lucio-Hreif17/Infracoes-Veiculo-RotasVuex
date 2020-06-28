import Vue from 'vue'
import VueRouter from 'vue-router'
import CompoPrincipal from '../views/CompoPrincipal.vue'
import CompoSecundario from '../views/CompoSecundario.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'CompoPrincipal',
    component: CompoPrincipal
  },
  {
    path: '/componente2',
    name: 'CompoSecundario',
    component: CompoSecundario
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router