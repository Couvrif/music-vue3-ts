import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('../views/video/video.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search/search.vue')
  },
  {
    path: '/showSong/:id',
    name: 'showSong',
    component: () => import('../views/showSong/showSong.vue')
  },
  {
    path: '/hotMenu',
    name: 'hotMenu',
    component: () => import('../views/hotMenu/hotMenu.vue')
  },
  {
    path: '/menuDetail/:id',
    name: 'menuDetail',
    component: () => import('../views/menuDetail/menuDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
  // 解决路由跳转后，不显示在首行
  // scrollBehavior(to, from, savedPosition) {
  //   if (to.name === 'Detail') {
  //     return { top: 0 }
  //   }
  //   return savedPosition
  // }
})

export default router
