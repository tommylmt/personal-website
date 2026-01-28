import { defineStore } from 'pinia'

export const useCultureStore = defineStore('culture', {
    state() {
        return {
            uuid: null
        }
    }
})
