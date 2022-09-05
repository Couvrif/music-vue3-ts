<template>
  <div class="menu-detail">
    <menuDetailHeaderVue
      :dataList="menuDetailData.playlist"
    ></menuDetailHeaderVue>
    <hotSongVue
      :isShowHeader="false"
      :dataList="menuDetailData.playlist.tracks"
    ></hotSongVue>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { getPlaylistDetail } from '@/service/music/music'
import menuDetailHeaderVue from '@/components/menu-detail-header/menu-detail-header.vue'
import hotSongVue from '@/components/hot-song/hot-song.vue'
import { ref } from 'vue'

const route = useRoute()

const menuDetailData = ref<any>()
const ggetPlaylistDetail = async () => {
  const result = await getPlaylistDetail(route.params.id as string)
  menuDetailData.value = result
  console.log(menuDetailData, 'gfdshgfj')
}
ggetPlaylistDetail()
</script>

<style scoped></style>
