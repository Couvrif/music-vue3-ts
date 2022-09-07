<template>
  <div class="song-list" v-if="dataList.length > 0">
    <template v-for="(item, index) in dataList" :key="item.name">
      <div class="song-list-content" @click="goMusicPlay(item.id)">
        <div class="song-index">{{ index + 1 }}</div>
        <div class="song-info">
          <div class="info-name">{{ item.name }}</div>
          <div class="info-songer">
            <img src="../../assets/images/icons/sq_icon.png" alt="" />{{
              getSongerName(item)
            }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  dataList: {
    type: Array,
    default: () => []
  }
})

const getSongerName = computed(() => {
  return function (item: any) {
    if (!item) return
    let name = ''
    // name = item.ar && item.ar[0].name
    // name = item.artists && item.artists[0].name
    name = item.ar ? item.ar[0].name : item.artists[0].name
    return name
  }
})

const router = useRouter()
const goMusicPlay = (id: string) => {
  router.push(`/music/${id}`)
}
</script>

<style scoped lang="less">
.song-list {
  // padding-top: 46px;
  // padding-bottom: 50px;
}
.song-list-content {
  box-sizing: border-box;
  padding: 10px 0;
  display: flex;
  justify-content: flex-start;
  .song-index {
    line-height: 2.5;
    font-size: 15px;
    margin-right: 18px;
  }
  .song-info {
    .info-name {
      margin-bottom: 8px;
    }
    .info-songer {
      font-size: 14px;
      color: var(--font-color);
      img {
        width: 20px;
        height: 13px;
        margin-right: 8px;
      }
    }
  }
}

// .song-list-content:first-child {
//   margin-top: 10px;
// }
</style>
