<template>
  <div class="search">
    <van-search
      shape="round"
      v-model="keywords"
      show-action
      @search="onSearch"
      @cancel="onCancel"
    />
    <hotSearchVue></hotSearchVue>
  </div>
</template>

<script setup lang="ts">
import hotSearchVue from './cpn/hotSearch.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const keywords = ref('')

const onSearch = () => {
  router.push(`/search/detail/${keywords.value}`)
}

const onCancel = () => {
  router.back()
}
</script>

<style scoped lang="less">
.search {
  padding: 46px 0 50px;
}
</style>
