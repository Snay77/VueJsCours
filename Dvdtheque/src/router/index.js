import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Movies from '../components/Movies.vue'
import MovieAffiche from '../components/MovieAffiche.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/movieAffiche/:id', // Route avec un paramètre d'ID
      name: 'MovieAffiche',
      component: MovieAffiche,
    },
    {
      path: '/',
      redirect: '/home' // Chemin par défaut, par exemple
    }
  ]
})
