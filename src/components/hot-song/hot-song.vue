<template>
  <div class="hot-song">
    <areaHeaderVue
      :title="title"
      :more="isMore"
      v-if="isShowHeader"
    ></areaHeaderVue>
    <songListVue :dataList="dataList"></songListVue>
  </div>
</template>

<script setup lang="ts">
import songListVue from '@/components/song-list/song-list.vue'
import areaHeaderVue from '@/components/area-header/area-header.vue'
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  isMore: {
    type: Boolean,
    default: false
  },
  dataList: {
    type: Array,
    default: () => []
  },
  isShowHeader: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped lang="less">
.hot-song {
  padding-top: 46px;
  padding-bottom: 50px;
  margin: 0 18px;
}
</style>
