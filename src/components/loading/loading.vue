<template>
  <div class="loading" v-show="mainStore.loading">
    <div class="bg">
      <img src="@/assets/images/home/full-screen-loading.gif" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import useMainStore from '@/store/modules/main'
const mainStore = useMainStore()
</script>

<style scoped lang="less">
.loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 9999;
  .bg {
    width: 80px;
    height: 80px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    img {
      width: 70px;
      height: 70px;
    }
  }
}
</style>
