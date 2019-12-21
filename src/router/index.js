import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/wareDetail',
    name: 'wareDetail',
    component: () => import('../views/wareDetail.vue')
  },
  {
    path: '/commentDetail',
    name: 'commentDetail',
    component: () => import('../views/commentDetail.vue')
  },
  {
    path: '/concernDetail',
    name: 'concernDetail',
    component: () => import('../views/concernDetail.vue')
  },
  {
    path: '/publishWare',
    name: 'publishWare',
    component: () => import('../views/publishWare.vue')
  },
  {
    path: '/publishing',
    name: 'publishing',
    component: () => import('../views/publishing.vue')
  },
  {
    path: '/publishSuccess',
    name: 'publishSuccess',
    component: () => import('../views/publishSuccess.vue')
  },
  {
    path: '/privateInfo',
    name: 'privateInfo',
    component: () => import('../views/privateInfo.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/chat.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
