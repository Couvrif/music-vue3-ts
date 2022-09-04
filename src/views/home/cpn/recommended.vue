<template>
  <div class="recommended">
    <areaHeaderVue title="推荐歌曲" :more="true"></areaHeaderVue>
    <template v-for="(item, index) in musicStore.getSixRecommend" :key="index">
      <div class="recommend-content">
        <img :src="item.al.picUrl" alt="" />
        <div class="recommend-content-info">
          <div class="info-left">
            <div class="song-name">{{ item.al.name }}</div>
            <div class="song-persong">{{ getPersongName(item.ar) }}</div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import areaHeaderVue from '@/components/area-header/area-header.vue'
import useMusicStore from '@/store/modules/music/music'
import { ref, computed } from 'vue'

const musicStore = useMusicStore()
musicStore.ggetPlaylistDetail()

const getPersongName = computed((songerList) => {
  const songerStr = songerList.map((item: any) => item.name).join('/')
  return songerStr
})
</script>

<style scoped></style>
