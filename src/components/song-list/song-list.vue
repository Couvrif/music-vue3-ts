<template>
  <div class="song-list">
    <template v-for="(item, index) in dataList" :key="item.name">
      <div class="song-list-content">
        <div class="song-index">{{ index + 1 }}</div>
        <div class="song-info">
          <div class="info-name">{{ item?.name }}</div>
          <div class="info-songer">
            <img src="../../assets/images/icons/sq_icon.png" alt="" />{{
              item?.ar[0].name
            }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  dataList: {
    type: Array,
    default: () => []
  }
})
console.log('lllllll', props.dataList)
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

.song-list-content:first-child {
  margin-top: 10px;
}
</style>
