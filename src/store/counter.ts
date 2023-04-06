import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 100,
  }),
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    },
  },
  actions: {
    changeCounterAction(newCounter: number) {
      this.counter = newCounter // 这里可以通过this获取counter
    },
  },
})

export default useCounterStore
