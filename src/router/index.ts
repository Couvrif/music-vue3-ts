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
    meta: {
      title: '推荐视频'
    },
    component: () => import('../views/video/video.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test/test.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search/search.vue')
  },
  {
    path: '/search/detail/:keywords',
    name: 'searchDetail',
    component: () => import('../views/search/search-detail/search-detail.vue')
  },
  {
    path: '/video/detail/:id',
    name: 'videoDetail',
    component: () => import('../views/video/video-detail/video-detail.vue')
  },
  {
    path: '/showSong/:name',
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
  },
  {
    path: '/music/:id',
    name: 'music',
    component: () => import('../views/music/music.vue')
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
