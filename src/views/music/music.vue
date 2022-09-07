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
      @play="ready"
      @pause="pause"
      @timeupdate="timeupdate"
    ></audio>
    <van-icon name="arrow-left" class="arrow" @click="goBack()" />
    <div class="tabs">
      <span :style="{ color: isActive === 0 ? 'white' : '#d3d3d3' }">歌曲</span>
      <span style="color: #d3d3d3"> | </span>
      <span :style="{ color: isActive === 1 ? 'white' : '#d3d3d3' }">歌词</span>
    </div>
    <van-swipe @change="onChangeSwipe">
      <van-swipe-item>
        <div class="music-content">
          <img class="imgCenter" :src="songInfo.al.picUrl" alt="" />
          <div class="music-name">{{ songInfo.name }}</div>
          <div class="songer">{{ songInfo.ar[0].name }}</div>
          <div class="songerText">{{ songWord?.word }}</div>
          <van-slider
            @change="onChangeSlider"
            @update:model-value="sockeUpdate"
            active-color="#26ce8a"
            inactive-color="white"
            v-model="sliderValue"
          />
          <div class="time">
            <div class="firstTime">{{ formatDuration(currentTime) }}</div>
            <div class="endTime">{{ formatDuration(songInfo.dt) }}</div>
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
              :src="
                require(`../../assets/images/player/play_${
                  isPlaying ? 'pause' : 'resume'
                }.png`)
              "
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
      <van-swipe-item>
        <div
          class="word-content"
          v-memo="[lyric]"
          v-if="lyric.length > 0"
          ref="wordContentRef"
        >
          <template v-for="(item, index) in lyric" :key="index">
            <div
              class="word-item"
              :style="{
                color: index === Number(songWord.index) ? '#26ce8a' : '#c2bfbf'
              }"
              :ref="songWordRef"
            >
              {{ item.text }}
            </div>
          </template>
        </div>
      </van-swipe-item>
      <template #indicator></template>
    </van-swipe>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getSongDetail, getSongLyric } from '@/service/player/player'
import { useRoute, useRouter } from 'vue-router'
import { computed } from '@vue/reactivity'
import {
  formatDuration,
  transformWord,
  matchWord,
  wordType
} from '@/utils/changeData'

// 获取数据
const route = useRoute()
const router = useRouter()
let lyric = ref<Array<any>>()
let songInfo = ref<any>()
let songWord = ref<wordType>({ word: '', index: '' })
const gData = async () => {
  const res1 = await getSongDetail(route.params.id as string)
  const res2 = await getSongLyric(route.params.id as string)
  songInfo.value = res1.songs[0]
  lyric.value = transformWord(res2.lrc.lyric)
  console.log('111111111111111', songInfo.value, lyric)
}
gData()

// 点击右上角返回上一页
const goBack = () => {
  router.back()
}

// 判断选中颜色
let isActive = ref<number>(0)
const onChangeSwipe = (index: any) => (isActive.value = index)

// 播放音乐
const playMusic = computed(() => {
  return function music(id: string) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
  }
})

// 点击暂停控制音乐的播放
let isPlaying = ref<boolean>(true)
const musicRef = ref<InstanceType<typeof HTMLElement>>()
const play = () => {
  if (musicRef?.value?.paused) {
    musicRef.value.play()
  } else {
    musicRef?.value?.pause()
  }
  isPlaying.value = !isPlaying.value
  console.log('fdadsfsag', musicRef.value)
}

const ready = () => {
  console.log('开始播放')
}

const pause = () => {
  console.log('停止播放')
}

// 播放过程中控制时间和滑动条显示
let currentTime = ref<number>(0)
let sliderValue = ref<number>()
const timeupdate = () => {
  let playTime = musicRef?.value?.currentTime * 1000
  if (!isSocket.value) {
    currentTime.value = playTime
    sliderValue.value = (playTime * 100) / songInfo.value.dt
    console.log(musicRef?.value?.currentTime, sliderValue.value)
  }
  const wordResult = matchWord(playTime, lyric.value as Array<any>)
  if (wordResult.word !== songWord.value.word) {
    songWord.value = wordResult
  }
}

// 点击或拖动播放的滑动条将歌曲设置到相应播放时间
const onChangeSlider = (value: number) => {
  const goTime = (value * (songInfo.value.dt / 1000)) / 100
  if (musicRef.value) {
    musicRef.value.currentTime = goTime
  }

  // 拖动结束继续时间和拖动条变化
  isSocket.value = false
  console.log('进度条', value, currentTime.value, songInfo.value.dt, goTime)
}

// 实时拖动还没有触发结束时显示拖动对应时间，等触发结束后调整音频
let isSocket = ref<boolean>(false)
const sockeUpdate = (value: number) => {
  isSocket.value = true
  currentTime.value = ((value * (songInfo.value.dt / 1000)) / 100) * 1000
  console.log('实时拖动', value)
}

// 使用ref函数获取全部歌词div的高度
let allSongHeight = ref<Array<any>>()
let wordContentRef = ref<HTMLElement>()
const songWordRef = (value: any) => {
  console.log('对应的div', value, wordContentRef.value)
}
</script>

<style scoped lang="less">
.music {
  position: relative;
  padding-top: 46px;
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
      background: rgba(0, 0, 0, 0.4);
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
    z-index: 20;
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
      margin-top: 20px;
      width: 315px;
      height: 315px;
    }
    .music-name {
      margin-top: 12px;
      font-size: 23px;
      font-weight: 700;
    }
    .songer {
      margin-top: 12px;
      font-size: 15px;
    }
    .songerText {
      height: 17px;
      margin: 15px 0 30px;
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
      margin-top: 30px;
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

.word-content {
  margin: 25px;
  padding: 10px 0 0;
  height: 550px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .word-item {
    color: #c2bfbf;
    text-align: center;
    margin: 20px 0;
    font-size: 15px;
  }
  .word-item:last-child {
    padding-bottom: 260px;
  }
}
</style>
