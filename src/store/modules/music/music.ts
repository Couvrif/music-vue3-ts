import { defineStore } from 'pinia'
import { getPlaylistDetail } from '@/service/home/home'
import { songList, peakSongListType } from './type'

export const peakListsMap = {
  newPeakList: 3779629,
  originPeakList: 2884035,
  upPeakList: 19723756
}

const useMusicStore = defineStore('music', {
  state: () => ({
    recommendSongList: [] as songList[],
    newPeakList: [] as songList[],
    originPeakList: [] as songList[],
    upPeakList: [] as songList[]
  }),
  getters: {
    getSixRecommend(): songList[] {
      return this.recommendSongList.slice(0, 6)
    },
    getThreePeaks(): Array<peakSongListType<songList>> {
      // 懒得改，直接写死算了
      const allPeaks = [
        {
          peakName: '新歌榜',
          coverImgUrl:
            'https://p1.music.126.net/wVmyNS6b_0Nn-y6AX8UbpQ==/109951166952686384.jpg',
          playCount: '135486731',
          peakList: this.newPeakList.slice(0, 3),
          id: '0'
        },
        {
          peakName: '飙升榜',
          coverImgUrl:
            'https://p1.music.126.net/ZyUjc7K_GDpD8MO1-GQkmA==/109951166952706664.jpg',
          playCount: '4378573922',
          peakList: this.upPeakList.slice(0, 3),
          id: '3'
        },
        {
          peakName: '原创榜',
          coverImgUrl:
            'https://p1.music.126.net/iFZ_nw2V86IFk90dc50kdQ==/109951166961388699.jpg',
          playCount: '9654389342',
          peakList: this.originPeakList.slice(0, 3),
          id: '1'
        }
      ]
      console.log('all', allPeaks)
      return allPeaks
    }
  },
  actions: {
    async ggetPlaylistDetail() {
      const result = await getPlaylistDetail(3778678)
      this.recommendSongList = result.playlist.tracks
    },
    async fetchPeakList() {
      for (const key in peakListsMap) {
        const id = peakListsMap[key as keyof typeof peakListsMap]
        const result = await getPlaylistDetail(id)
        this.$state[key as keyof typeof peakListsMap] = result.playlist.tracks
      }
      console.log(this.$state, 'dafsadgs')
    }
  }
})

export default useMusicStore
