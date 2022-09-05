<template>
  <div class="area-header">
    <div class="area-header-title">{{ title }}</div>
    <div v-if="more" class="area-header-more" @click="changeRoute">
      <div>更多</div>
      <van-icon class="iconArrow" name="arrow" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  more: {
    type: Boolean,
    default: false
  },
  path: {
    type: String,
    default: '/home'
  }
})

const router = useRouter()
const changeRoute = () => {
  router.push(props.path)
}
</script>

<style scoped lang="less">
.area-header {
  display: flex;
  justify-content: space-between;
  margin-top: 22px;
  margin-bottom: 10px;

  .area-header-title {
    font-size: 18px;
    font-weight: 700;
    color: black;
  }
  .area-header-more {
    display: flex;
    justify-content: space-around;
    margin: auto 0;
    font-size: 14px;
    color: var(--font-color);
  }
}
</style>
