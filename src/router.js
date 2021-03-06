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
      redirect: '/home/friend'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'me',
          component: () => import('./views/HomeMe.vue'),
          name: 'home/me'
        },
        {
          path: 'friend',
          component: () => import('./views/HomeFriend.vue'),
          name: 'home/friend'
        }
      ]
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
      path: '/user/:name',
      component: () => import('./views/User.vue')
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
      path: '/admin',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/admin/index'),
          name: 'adminIndex'
        },
        {
          path: 'user',
          component: () => import('@/views/admin/user'),
          name: 'user'
        },
        {
          path: 'admin-user',
          component: () => import('@/views/admin/admin-user'),
          name: 'admin-user'
        },
        {
          path: 'moment',
          component: () => import('@/views/admin/moment'),
          name: 'moment'
        },
        {
          path: 'recommend',
          component: () => import('@/views/admin/recommend'),
          name: 'recommend'
        },
        {
          path: 'suggest',
          component: () => import('@/views/admin/suggest'),
          name: 'suggest'
        }
      ]
    },
    {
      // 管理员登陆
      path: '/adminLogin',
      name: 'adminLogin',
      component: () => import('./views/AdminLogin.vue')
    },
    {
      path: '/401',
      name: '401',
      component: () => import('./views/error/401.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('./views/error/404.vue')
    }
  ]
})
