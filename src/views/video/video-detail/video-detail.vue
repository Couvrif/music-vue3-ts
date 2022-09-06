<template>
  <div class="video-detail">
    <div class="videoContent">
      <video :src="allMv.url" autoplay controls></video>
    </div>
    <div class="video-info">
      <div class="dec">相关视频</div>
      <template v-for="item in allMv.related" :key="item.vid">
        <img :src="item.coverUrl" alt="" />
        <div class="info-name">{{ item.title }}</div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { getMVUrl, getMVInfo, getMVRelated } from '@/service/video/video'
import { reactive, ref } from 'vue'

const route = useRoute()
console.log(route.params.id)

let allMv = reactive<any>({})
const allGet = async () => {
  const url = await getMVUrl(route.params.id as string)
  allMv.url = url.data.url
  const info = await getMVInfo(route.params.id as string)
  allMv.info = info.data
  const related = await getMVRelated(route.params.id as string)
  allMv.related = related.data
  console.log('allMv', allMv)
}
allGet()
</script>

<style scoped lang="less">
.video-detail {
  padding-top: 46px;
  width: 100%;
  .videoContent {
    background-color: rgb(40, 46, 83);
    height: 225px;
    video {
      object-fit: fill;
      width: 100%;
      height: 225px;
    }
  }
  .video-info {
    margin: 20px 10px 0;
    .dec {
      margin: 15px 0;
      font-size: 17px;
      color: #26ce8a;
    }
    img {
      width: 100%;
      height: 170px;
      border-radius: 10px;
      margin: 0 auto;
    }
    .info-name {
      margin: 10px 0;
      color: forestgreen;
    }
  }
}
</style>
