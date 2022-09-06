<template>
  <div class="search-detail">
    <van-search
      shape="round"
      v-model="keywords"
      show-action
      @search="onSearch"
      @cancel="onCancel"
    />
    <div class="true">最佳匹配</div>
    <hotSongVue
      :dataList="seaResList"
      :more="false"
      :isShowHeader="false"
    ></hotSongVue>
  </div>
</template>

<script setup lang="ts">
import hotSongVue from '@/components/hot-song/hot-song.vue'
import { defineProps, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getSearchResult } from '@/service/search/search'

const props = defineProps({
  dataList: {
    type: Array,
    default: () => []
  }
})

const route = useRoute()
let keywords = ref<string>(route.params.keywords as string)

let seaResList = ref<Array<any>>()
const ggetSearchSuggest = async () => {
  const res = await getSearchResult(keywords.value)
  seaResList.value = res.result.songs
  console.log('搜索结果', res)
}
ggetSearchSuggest()

const onSearch = () => {
  console.log()
}
const onCancel = () => {
  console.log()
}
</script>

<style scoped lang="less">
.true {
  margin: 10px 0 10px 17px;
  color: #26ce8a;
}

.search-detail {
  padding-top: 46px;
  padding-bottom: 46px;
}
</style>
