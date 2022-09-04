<template>
  <div class="main-music">
    <van-nav-bar title="MYMUSIC" />
    <van-search
      placeholder="请输入搜索关键词"
      input-align="center"
      disabled
      shape="round"
    />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in bannerData" :key="index">
        <van-swipe-item>
          <img :src="item.imageUrl" alt="" />
        </van-swipe-item>
      </template>
    </van-swipe>
    <recommendedVue></recommendedVue>
  </div>
</template>

<script setup lang="ts">
import { getMusicBanner } from '@/service/home/home'
import recommendedVue from './cpn/recommended.vue'
import { ref } from 'vue'

// 请求轮播图数据
let bannerData = ref<any>()
const ggetMusicBanner = async () => {
  const result = await getMusicBanner()
  bannerData.value = result.banners
}
ggetMusicBanner()
</script>

<style scoped lang="less">
.main-music {
  height: 100%;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  img {
    width: 100%;
    height: 150px;
  }
}
</style>
