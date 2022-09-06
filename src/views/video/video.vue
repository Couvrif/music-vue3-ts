<template>
  <div class="video">
    <template v-for="item in videoList" :key="item.id">
      <div class="video-content" @click="goVideoDetail(item.id)">
        <div class="video-item">
          <img :src="item.cover" alt="" />
          <div class="video-info">
            <div class="count">{{ formatNumber(item.playCount) }}</div>
            <div class="duration">
              {{ formatDuration(item.mv.videos[0].duration) }}
            </div>
          </div>
        </div>
        <div class="name">{{ item.name }}-{{ item.artistName }}</div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { getTopMV } from '@/service/video/video'
import { ref } from 'vue'
import { formatNumber, formatDuration } from '@/utils/changeData'
import { useRouter } from 'vue-router'

const videoList = ref<any>()
const ggetTopMV = async () => {
  const result = await getTopMV()
  console.log('shiping', result)
  videoList.value = result.data
}
ggetTopMV()

const router = useRouter()
const goVideoDetail = (id: string) => {
  router.push(`/video/detail/${id}`)
}
</script>

<style scoped lang="less">
.video {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 46px 9px 50px;
  .video-content {
    width: 48%;
    height: 140px;
    margin-bottom: 15px;

    .video-item {
      position: relative;
      img {
        width: 100%;
        height: 100px;
        border-radius: 10px;
      }
      .video-info {
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: space-between;
        bottom: 0;
        left: 0;
        font-size: 14px;
        color: white;
        margin: 0 8px;
        .duration {
          margin-right: 10px;
        }
      }
    }
    .name {
      margin-top: 10px;
      font-size: 16px;
      color: black;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; //显示的行数
    }
  }
}
</style>
