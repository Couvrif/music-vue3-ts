import { defineStore } from 'pinia'

const useMainStore = defineStore('main', {
  state: () => ({
    loading: false
  }),
  actions: {}
})

export default useMainStore
