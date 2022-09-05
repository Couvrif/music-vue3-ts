<template>
  <div class="search">
    <van-search input-align="center" disabled shape="round" />
    <hotSearchVue></hotSearchVue>
  </div>
</template>

<script setup lang="ts">
import hotSearchVue from './cpn/hotSearch.vue'
</script>

<style scoped lang="less">
.search {
  padding: 46px 0 50px;
}
</style>
