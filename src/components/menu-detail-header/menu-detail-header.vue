<template>
  <div class="menu-detail-header">
    <img class="bg" :src="dataList.coverImgUrl" alt="" />
    <div class="bg-cover"></div>
    <div class="header-content">
      <div class="content-top">
        <img :src="dataList.coverImgUrl" alt="" />
        <div class="content-top-right">
          <div class="right-name">{{ dataList.name }}</div>
          <div class="right-avator">
            <img :src="dataList.creator.avatarUrl" alt="" />
            <div class="right-avator-name">{{ dataList.creator.nickname }}</div>
          </div>
          <div class="right-description">{{ dataList.description }}</div>
        </div>
      </div>
      <div class="content-bottom">
        <div class="bottom-left">
          <img src="../../assets/images/icons/favor_icon.png" alt="" />
          <span>{{ formatNumber(dataList.playCount) }}</span>
        </div>
        <div class="bottom-left">
          <img src="../../assets/images/icons/share_icon.png" alt="" />
          <span>分享</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { formatNumber } from '@/utils/changeData'

const props = defineProps({
  dataList: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped lang="less">
// .menu-detail-header {
//   position: relative;
//   overflow: hidden;
//   .bg {
//     position: absolute;
//     width: 100%;
//     height: 200px;
//     top: 46px;
//     z-index: -1;
//     filter: blur(2px); // 模糊半径和变暗
//     transform: scale(1.6); // 控制边缘是否模糊，小于1的话边缘会模糊
//     img {
//       width: 100%;
//       height: 160px;
//     }
//   }
//   .bg-cover {
//     position: absolute;
//     top: 46px;
//     z-index: -1;
//     background-color: rgba(0, 0, 0, 0.5);
//   }
// }

.menu-detail-header {
  position: relative;
  width: 100%;
  height: 200px;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 200px;
  }
  .bg-cover {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
  }
}

.header-content {
  box-sizing: border-box;
  padding: 25px;
  .content-top {
    display: flex;
    img {
      width: 100px;
      height: 100px;
      border-radius: 10px;
      margin-right: 20px;
    }
    .content-top-right {
      flex: 1;
      color: white;
      .right-name {
        font-size: 17px;
        margin-bottom: 8px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; //显示的行数
      }
      .right-avator {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 8px;
        img {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          margin-right: 8px;
        }
        .right-avator-name {
          font-size: 14px;
        }
      }
      .right-description {
        font-size: 14px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1; //显示的行数
      }
    }
  }
  .content-bottom {
    margin-top: 25px;
    display: flex;
    justify-content: space-around;
    .bottom-left {
      color: white;
      img {
        margin-right: 8px;
        width: 20px;
        height: 20px;
      }
      span {
        font-size: 14px;
      }
    }
  }
}
</style>
