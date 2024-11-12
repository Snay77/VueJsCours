import Vue from 'vue'
import Router from 'vue-router'
import Rayon from '../components/Rayon.vue'
import Filtre from '../components/Filtre.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Rayon',
      name: 'Rayon',
      component: Rayon
    },
    {
      path: '/Filtre',
      name: 'Filtre',
      component: Filtre
    },
    {
      path: '/',
      redirect: '/rayon' // Chemin par défaut, par exemple
    }
  ]
})
