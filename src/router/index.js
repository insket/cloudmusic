import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listview',
    name: 'listview',
    component: () => import('../views/ListView.vue')
  }, 
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/me',
    name: 'me',
    beforeEnter: (to, from, next) => {
      console.log('是否登录',store.state.user);
      if (store.state.user.isLogin) {
        next()
      }else{
        next('/login')
      }
      
    },
    component: () => import('../views/Me.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
