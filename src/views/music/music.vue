<template>
  <div class="music" v-if="lyric">
    <van-icon name="arrow-left" class="arrow" @click="goBack()" />
    <!-- <div class="tabs">
      <van-tabs v-model:active="active" swipeable>
        <van-tab title="选项 1"></van-tab>
        <van-tab title="选项 2"></van-tab>
      </van-tabs>
    </div> -->
    <div class="music-content">
      <div class="bg">
        <img :src="songInfo.al.picUrl" alt="" />
        <div class="bg-cover"></div>
      </div>
      <img class="imgCenter" :src="songInfo.al.picUrl" alt="" />
      <div class="music-name">{{ songInfo.name }}</div>
      <div class="songer">{{ songInfo.ar[0].name }}</div>
      <div class="slider"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getSongDetail, getSongLyric } from '@/service/player/player'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
let lyric = ref<string>()
let songInfo = ref<any>()
const gData = async () => {
  const res1 = await getSongDetail(route.params.id as string)
  const res2 = await getSongLyric(route.params.id as string)
  songInfo.value = res1.songs[0]
  lyric.value = res2.lrc.lyric
  console.log('111111111111111', songInfo.value, lyric)
}
gData()

const active = ref(0)

const goBack = () => {
  router.back()
}
</script>

<style scoped lang="less">
.music {
  position: relative;
  padding-top: 46px;
  padding-bottom: 50px;
  .arrow {
    position: absolute;
    z-index: 12;
    left: 20px;
    top: 15px;
    width: 20px;
    height: 20px;
    color: white;
  }
  .music-content {
    box-sizing: border-box;
    padding: 15px 30px;
    color: white;
    .bg {
      // position: relative;
      // width: 100%;
      // height: 100%;
      // z-index: -2;
      // overflow: hidden;
      img {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -20;
        filter: blur(6px);
        transform: scale(1.5);
      }
      .bg-cover {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -22;
        background: rgba(0, 0, 0, 0.4);
      }
    }
    .imgCenter {
      margin-top: 30px;
      width: 315px;
      height: 315px;
    }
    .music-name {
      margin-top: 25px;
      font-size: 23px;
      font-weight: 700;
    }
    .songer {
      margin-top: 20px;
      font-size: 15px;
    }
  }
}
</style>
