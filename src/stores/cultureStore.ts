import { defineStore } from 'pinia'
import type { TCultureStoreState } from '@/types/culture.ts'

export const useCultureStore = defineStore('culture', {
    state(): TCultureStoreState {
        return {
            uuid: null
        }
    }
})
