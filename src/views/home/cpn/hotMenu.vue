<template>
  <div class="hot-menu">
    <areaHeaderVue title="热门歌单" :more="true"></areaHeaderVue>
    <div class="hot-menu-content">
      <template v-for="item in hotMenuList" :key="item.coverImgId">
        <div class="hot-menu-item">
          <img :src="item.coverImgUrl" alt="" />
          <span>{{ formatNumber(item.playCount) }}</span>
          <div class="item-title">{{ item.name }}</div>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getSongMenuList } from '@/service/home/home'
import { formatNumber } from '@/utils/changeData'
import areaHeaderVue from '@/components/area-header/area-header.vue'
import { ref } from 'vue'

const hotMenuList = ref([])
const ggetSongMenuList = async () => {
  const result = await getSongMenuList()
  hotMenuList.value = result.playlists
  console.log('歌单', result)
}
ggetSongMenuList()
</script>
<style lang="less" scoped>
.hot-menu {
  margin: 15px;
}
.hot-menu-content {
  display: flex;
  width: 100%;
  overflow-x: auto;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
  .hot-menu-item {
    flex: 1;
    margin-left: 20px;
    width: 110px;
    position: relative;
    // white-space: nowrap;
    img {
      width: 100px;
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
}

.hot-menu-item:first-child {
  margin-left: 0;
}
</style>
