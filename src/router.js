import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/finder',
      name: 'finder',
      component: () => import('./views/Finder.vue')
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('./views/Me.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    }
  ]
})
