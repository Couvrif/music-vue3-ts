<template>
  <div class="show-song">
    <hotSongVue
      :title="title || '热歌榜'"
      :dataList="dataList"
      :more="false"
    ></hotSongVue>
  </div>
</template>

<script setup lang="ts">
import useMusicStore from '@/store/modules/music/music'
import hotSongVue from '@/components/hot-song/hot-song.vue'
import { ref, toRaw } from 'vue'
import { useRoute } from 'vue-router'
import { songList } from '@/store/modules/music/type'

const musicStore = useMusicStore()
const route = useRoute()

let title: any
const dataList = ref<songList[]>()
// 因为state是按的字母顺序来拍,所以基本可以确认固定的顺序
const getSongList = () => {
  // const allList: songList[][] = Object.values(toRaw(musicStore.$state))
  // if (allList.length > 0) {
  //   dataList.value = allList[Number(route.params.name)]
  //   title = musicStore.getThreePeaks[Number(route.params.id)].peakName
  //   console.log('你爸爸', allList, musicStore.$state, title)
  // }
  // console.log('我来了', toRaw(musicStore.$state)['newPeakList'])
  const name = route.params.name as string
  dataList.value = toRaw(musicStore.$state)[name]
  const info = musicStore.getThreePeaks.find((item) => item.name === name)
  title = info?.peakName
}
getSongList()
</script>

<style scoped lang="less">
.show-song {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>
