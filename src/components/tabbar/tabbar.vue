<template>
  <div class="tabbar">
    <van-tabbar route v-model="active">
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item replace :to="item.path">
          <span>{{ item.name }}</span>
          <template #icon>
            <img v-if="active === index" :src="item.active" />
            <img v-else :src="item.imgUrl" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { tabbarData } from '@/assets/data/tabbarData'
import { useRoute } from 'vue-router'

const active = ref(0)
const route = useRoute()
watch(route, (newValue) => {
  const index = tabbarData.findIndex((item) => item.path === newValue.path)
  if (index === -1) return
  active.value = index
})
</script>

<style scoped lang="less">
.tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
</style>
