<template>
  <div class="song-menu-list">
    <template v-for="item in dataList" :key="item">
      <areaHeaderVue :title="item.cat" :more="false"></areaHeaderVue>
      <div class="menu-list-content">
        <template v-for="value in item.playlists" :key="value.name">
          <div class="info-content">
            <div class="info-top">
              <img :src="value.coverImgUrl" alt="" />
              <span>{{ formatNumber(value.playCount) }}</span>
            </div>
            <div class="info-bottom">{{ value.name }}</div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import areaHeaderVue from '@/components/area-header/area-header.vue'
import { formatNumber } from '@/utils/changeData'
import { defineProps } from 'vue'

const props = defineProps({
  dataList: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped lang="less">
.song-menu-list {
  margin: 15px;
  .menu-list-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .info-content {
      width: 49%;
      margin-bottom: 10px;
      .info-top {
        position: relative;
        img {
          border-radius: 10px;
          width: 100%;
          height: 174px;
        }
        span {
          position: absolute;
          bottom: 0;
          right: 0;
          color: white;
          padding: 5px;
          font-size: 14px;
        }
      }
      .info-bottom {
        margin-top: 10px;
        font-size: 16px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; //显示的行数
      }
    }
  }
}
</style>
