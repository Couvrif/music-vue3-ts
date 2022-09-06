<template>
  <div class="peak-list">
    <areaHeaderVue title="巅峰榜" :more="false"></areaHeaderVue>
    <template v-for="item in musicStore.getThreePeaks" :key="item.peakName">
      <div class="peak-content" @click="goShowSong(item.name)">
        <div class="peak-left">
          <div class="peak-title">{{ item.peakName }}</div>
          <template v-for="(value, index) in item.peakList" :key="index">
            <div class="peak-item">
              {{ `${index + 1}.${value.name}-${getPersongName(value.ar)}` }}
            </div>
          </template>
        </div>
        <img :src="item.coverImgUrl" alt="" />
        <span>{{ formatNumber(item.playCount) }}</span>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import useMusicStore from '@/store/modules/music/music'
import areaHeaderVue from '@/components/area-header/area-header.vue'
import { songPerson } from '@/store/modules/music/type'
import { formatNumber } from '@/utils/changeData'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const musicStore = useMusicStore()
const router = useRouter()
musicStore.fetchPeakList()

const getPersongName = computed(() => {
  return function getAllPerson(songerList: songPerson[]) {
    const songerStr = songerList.map((item: any) => item.name).join('/')
    return songerStr
  }
})

const goShowSong = (name: string) => {
  router.push(`/showSong/${name}`)
}
</script>

<style scoped lang="less">
.peak-list {
  margin: 15px;
  .peak-content {
    background-color: #eeeeee;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    border-radius: 10px;
    position: relative;
    .peak-left {
      box-sizing: border-box;
      padding: 15px 20px 0;
      flex: 1;
      .peak-title {
        font-size: 18px;
        margin-bottom: 10px;
      }
      .peak-item {
        max-width: 190px;
        font-size: 14px;
        color: var(--font-color);
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1; //显示的行数
      }
    }
    img {
      width: 110px;
      height: 110px;
      border-bottom-right-radius: 10px;
      border-top-right-radius: 10px;
    }
    span {
      position: absolute;
      bottom: 5px;
      right: 5px;
      color: white;
      font-size: 14px;
    }
  }
}
</style>
