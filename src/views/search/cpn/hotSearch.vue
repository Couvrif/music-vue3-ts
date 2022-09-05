<template>
  <div class="hot-search">
    <areaHeaderVue title="热门搜索" :more="false"></areaHeaderVue>
    <div class="hot-content">
      <template v-for="item in searchHotList" :key="item.first">
        <div class="hot-item">{{ item.first }}</div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import areaHeaderVue from '@/components/area-header/area-header.vue'
import { getSearchHot } from '@/service/search/search'
import { ref } from 'vue'

let searchHotList = ref<any>()
const ggetSearchHot = async () => {
  const result = await getSearchHot()
  searchHotList.value = result.result.hots
  console.log(searchHotList.value, 'aaaa')
}
ggetSearchHot()
</script>

<style scoped lang="less">
.hot-search {
  margin: 15px;
  .hot-content {
    margin-top: 22px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    .hot-item {
      color: black;
      font-size: 15px;
      box-sizing: border-box;
      padding: 5px;
      margin: 6px 10px 10px 0;
      border-radius: 8px;
      background-color: white;
    }
    .hot-item:first-child {
      color: #26ce8a;
    }
  }
}
</style>
