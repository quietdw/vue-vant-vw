import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LayoutMain',
    component: () => import('@/views/layout/Main'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: '主页',
        meta: {
          icon: 'home-o'
        },
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'about',
        name: '简介',
        meta: {
          icon: 'orders-o'
        },
        component: () => import('@/views/About.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
