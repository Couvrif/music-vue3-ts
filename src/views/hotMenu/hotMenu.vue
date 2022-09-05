<template>
  <div class="hot-menu">
    <songMenuListVue :dataList="allMenuList"></songMenuListVue>
  </div>
</template>

<script setup lang="ts">
import songMenuListVue from '@/components/song-menu-list/song-menu-list.vue'
import { getSongMenuList } from '@/service/home/home'
import { SONGTITLELIST } from '@/assets/data/songTitleList'
import { ref } from 'vue'

let allMenuList = ref<any[]>()
const getAllMenuList = async () => {
  let all = []
  for (const item of SONGTITLELIST) {
    const result = await getSongMenuList(item)
    all.push(result)
  }
  allMenuList.value = all
  console.log(allMenuList.value, '别搞')
}
getAllMenuList()
</script>

<style scoped lang="less">
.hot-menu {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>
