<template>
  <van-nav-bar
    title="MYMUSIC"
    class="navbar"
    @click-left="onClickLeft"
    :left-arrow="isShowBack"
  />
  <loadingVue></loadingVue>
  <tabbarVue></tabbarVue>
  <router-view />
</template>

<script setup lang="ts">
import tabbarVue from './components/tabbar/tabbar.vue'
import loadingVue from './components/loading/loading.vue'
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()
const onClickLeft = () => {
  router.back()
}
const isShowBack = computed(() => {
  if (route.path === '/home' || route.path === '/video') {
    return false
  } else {
    return true
  }
})
</script>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.van-nav-bar .van-icon {
  color: black;
}
</style>
