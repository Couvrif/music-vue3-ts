<template>
  <div class="menu-detail-header">
    <div class="header-content">
      <div class="content-top">
        <img :src="dataList.coverImgUrl" alt="" />
        <div class="content-top-right">
          <div class="right-name">{{ dataList.name }}</div>
          <div class="right-avator">
            <img :src="dataList.creator.avatarUrl" alt="" />
            <div class="right-avator-name">{{ dataList.creator.nickname }}</div>
          </div>
          <div class="right-description">{{ dataList.description }}</div>
        </div>
      </div>
      <div class="content-bottom">
        <div class="bottom-left">
          <img src="../../assets/images/icons/favor_icon.png" alt="" />
          <span>{{ formatNumber(dataList.playcount) }}</span>
        </div>
        <div class="bottom-left">
          <img src="../../assets/images/icons/search_icon.png" alt="" />
          <span>分享</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { formatNumber } from '@/utils/changeData'

const props = defineProps({
  dataList: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped></style>
