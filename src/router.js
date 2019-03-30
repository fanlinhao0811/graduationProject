import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
/* Layout */
import Layout from '@/components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/finder',
      name: 'finder',
      component: () => import('./views/Finder.vue')
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('./views/New.vue')
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('./views/Me.vue')
    },
    {
      // 登陆
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      // 注册
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./views/Test.vue')
    },
    {
      path: '/admin',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/admin/index'),
          name: 'adminIndex'
        }
      ]
    },
    {
      // 管理员登陆
      path: '/adminLogin',
      name: 'adminLogin',
      component: () => import('./views/AdminLogin.vue')
    }
  ]
})
