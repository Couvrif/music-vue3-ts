import { defineStore } from 'pinia'
import { getPlaylistDetail } from '@/service/home/home'
import { songList } from './type'

const useMusicStore = defineStore('music', {
  state: () => ({
    recommendSongList: [] as songList[]
  }),
  getters: {
    getSixRecommend(): songList[] {
      return this.recommendSongList.slice(0, 6)
    }
  },
  actions: {
    async ggetPlaylistDetail() {
      const result = await getPlaylistDetail(3778678)
      this.recommendSongList = result.playlist.tracks
    }
  }
})

export default useMusicStore
