<template>
  <van-nav-bar title="MYMUSIC" class="navbar" />
  <loadingVue></loadingVue>
  <tabbarVue></tabbarVue>
  <router-view />
</template>

<script setup lang="ts">
import tabbarVue from './components/tabbar/tabbar.vue'
import loadingVue from './components/loading/loading.vue'
</script>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
</style>
