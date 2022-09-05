<template>
  <div class="main-music" v-show="musicStore.upPeakList.length > 0">
    <van-search
      placeholder="请输入搜索关键词"
      input-align="center"
      disabled
      shape="round"
      @click="goSearch"
    />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in bannerData" :key="index">
        <van-swipe-item>
          <img :src="item.imageUrl" alt="" />
        </van-swipe-item>
      </template>
    </van-swipe>
    <recommendedVue></recommendedVue>
    <hotMenuVue></hotMenuVue>
    <recommendMenuVue></recommendMenuVue>
    <peakListVue></peakListVue>
  </div>
</template>

<script setup lang="ts">
import { getMusicBanner } from '@/service/home/home'
import useMusicStore from '@/store/modules/music/music'
import recommendedVue from './cpn/recommended.vue'
import hotMenuVue from './cpn/hotMenu.vue'
import recommendMenuVue from './cpn/recommendMenu.vue'
import peakListVue from './cpn/peakList.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// 请求轮播图数据
let bannerData = ref<any>()
const ggetMusicBanner = async () => {
  const result = await getMusicBanner()
  bannerData.value = result.banners
}
ggetMusicBanner()

const musicStore = useMusicStore()

const router = useRouter()
const goSearch = () => {
  router.push('/search')
}
</script>

<style scoped lang="less">
.main-music {
  height: 100%;
  overflow-y: auto;
  padding-bottom: 50px;
  padding-top: 46px;
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
