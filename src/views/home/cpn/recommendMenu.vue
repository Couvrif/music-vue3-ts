<template>
  <div class="recommend-menu">
    <areaHeaderVue
      title="推荐歌单"
      :more="true"
      :path="'/hotMenu'"
    ></areaHeaderVue>
    <div class="recommend-menu-content">
      <template v-for="item in recMenuList" :key="item.coverImgId">
        <div class="recommend-menu-item">
          <img :src="item.coverImgUrl" alt="" />
          <span>{{ formatNumber(item.playCount) }}</span>
          <div class="item-title">{{ item.name }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import areaHeaderVue from '@/components/area-header/area-header.vue'
import { getSongMenuList } from '@/service/home/home'
import { menuType } from '@/store/modules/music/type'
import { formatNumber } from '@/utils/changeData'
import { ref } from 'vue'

const recMenuList = ref<menuType[]>()
const ggetSongMenuList = async () => {
  const result = await getSongMenuList('华语')
  recMenuList.value = result.playlists
  console.log('歌单', result)
}
ggetSongMenuList()
</script>

<style scoped lang="less">
.recommend-menu {
  margin: 15px;
  .recommend-menu-content {
    display: flex;
    overflow-x: auto;
    width: 100%;
    align-items: center;
    &::-webkit-scrollbar {
      display: none;
    }
    .recommend-menu-item {
      // flex: 1;
      width: 110px;
      margin-left: 20px;
      position: relative;
      img {
        width: 105px;
        border-radius: 10px;
      }
      span {
        position: absolute;
        right: 5px;
        bottom: 50px;
        color: white;
        font-size: 14px;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 4px;
        border-radius: 8px;
      }
      .item-title {
        margin-top: 8px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; //显示的行数
      }
    }
    .recommend-menu-item:first-child {
      margin-left: 0;
    }
  }
}
</style>
