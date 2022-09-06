<template>
  <div class="music" v-if="lyric">
    <div class="bg">
      <img :src="songInfo.al.picUrl" alt="" />
      <div class="bg-cover"></div>
    </div>
    <audio
      ref="musicRef"
      :src="playMusic(songInfo.id)"
      class="mp3"
      autoplay="autoplay"
    ></audio>
    <van-icon name="arrow-left" class="arrow" @click="goBack()" />
    <div class="tabs">
      <span :style="{ color: isActive === 0 ? 'white' : '#d3d3d3' }">歌曲</span>
      <span style="color: #d3d3d3"> | </span>
      <span :style="{ color: isActive === 1 ? 'white' : '#d3d3d3' }">歌词</span>
    </div>
    <van-swipe @change="onChange">
      <van-swipe-item>
        <div class="music-content">
          <img class="imgCenter" :src="songInfo.al.picUrl" alt="" />
          <div class="music-name">{{ songInfo.name }}</div>
          <div class="songer">{{ songInfo.ar[0].name }}</div>
          <div class="songerText">吉他：生产</div>
          <van-slider
            @change="onChange"
            active-color="#26ce8a"
            inactive-color="white"
          />
          <div class="time">
            <div class="firstTime">00:02</div>
            <div class="endTime">04:22</div>
          </div>
          <div class="operation">
            <img
              class="small left"
              src="../../assets/images/player/play_random.png"
              alt=""
            />
            <img
              class="small left"
              src="../../assets/images/player/play_prev.png"
              alt=""
            />
            <img
              class="big left"
              src="../../assets/images/player/play_resume.png"
              alt=""
              @click="play()"
            />
            <img
              class="small right"
              src="../../assets/images/player/play_next.png"
              alt=""
            />
            <img
              class="small right"
              src="../../assets/images/player/play_music.png"
              alt=""
            />
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getSongDetail, getSongLyric } from '@/service/player/player'
import { useRoute, useRouter } from 'vue-router'
import { computed } from '@vue/reactivity'

// 获取数据
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

const goBack = () => {
  console.log('aa')
  router.back()
}

// 判断选中颜色
let isActive = ref<number>(0)
const onChange = (index: any) => (isActive.value = index)

// 播放音乐
const playMusic = computed(() => {
  return function music(id: string) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
  }
})

// 控制音乐的播放
const musicRef = ref<InstanceType<typeof Element>>()
const play = () => {
  if (musicRef?.value?.paused) {
    musicRef.value.play()
  } else {
    musicRef?.value?.pause()
  }
  console.log('fdadsfsag', musicRef.value)
}
</script>

<style scoped lang="less">
.music {
  position: relative;
  padding-top: 46px;
  padding-bottom: 50px;
  .bg {
    img {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -20;
      filter: blur(6px);
      transform: scale(2.5);
    }
    .bg-cover {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -2;
      background: rgba(0, 0, 0, 0.2);
    }
  }
  .tabs {
    // color: #d3d3d3;
    width: 100%;
    text-align: center;
    font-size: 15px;
    position: absolute;
    z-index: 12;
    left: 0;
    top: 15px;
  }
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

    .imgCenter {
      margin-top: 50px;
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
    .songerText {
      margin: 30px 0 60px;
      font-size: 14px;
      text-align: center;
    }
    .time {
      display: flex;
      margin-top: 15px;
      justify-content: space-between;
      font-size: 13px;
    }
    .operation {
      margin-top: 50px;
      display: flex;
      justify-content: space-around;
      .small {
        margin: auto;
        width: 40px;
        height: 40px;
      }
      .big {
        width: 60px;
        height: 60px;
      }
      .left {
        margin-left: 0;
      }
      .right {
        margin-right: 0;
      }
    }
  }
}
</style>
