<template>
  <loadingVue></loadingVue>
  <tabbarVue></tabbarVue>
  <router-view />
</template>

<script setup lang="ts">
import tabbarVue from './components/tabbar/tabbar.vue'
import loadingVue from './components/loading/loading.vue'
</script>

<style></style>
