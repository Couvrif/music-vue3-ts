<template>
  <div class="recommended">
    <areaHeaderVue
      title="推荐歌曲"
      :more="true"
      :path="'/showSong/recommendSongList'"
    ></areaHeaderVue>
    <template v-for="(item, index) in musicStore.getSixRecommend" :key="index">
      <div class="recommend-content" @click="goMusic(item.id)">
        <img :src="item.al.picUrl" alt="" />
        <div class="recommend-content-info">
          <div class="info-left">
            <div class="song-name">{{ item.al.name }}</div>
            <div class="song-persong">{{ getPersongName(item.ar) }}</div>
          </div>
          <van-icon class="goArrow" name="arrow" />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import areaHeaderVue from '@/components/area-header/area-header.vue'
import useMusicStore from '@/store/modules/music/music'
import { songPerson } from '@/store/modules/music/type'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const musicStore = useMusicStore()
musicStore.ggetPlaylistDetail()

const getPersongName = computed(() => {
  return function getAllPerson(songerList: songPerson[]) {
    const songerStr = songerList.map((item: any) => item.name).join('/')
    return songerStr
  }
})

const router = useRouter()
const goMusic = (id: string) => {
  router.push(`/music/${id}`)
}
</script>

<style scoped lang="less">
.recommended {
  margin: 15px;
  .recommend-content {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding: 10px 0;
    img {
      width: 65px;
      height: 65px;
      border-radius: 10px;
      margin-right: 10px;
    }
    .recommend-content-info {
      flex: 1;
      display: flex;
      justify-content: space-between;
      .info-left {
        .song-name {
          margin: 8px;
          font-size: 16px;
        }
        .song-persong {
          margin: 8px;
          font-size: 14px;
          color: var(--font-color);
        }
      }
      .goArrow {
        margin: auto 0;
      }
    }
  }
}
</style>
