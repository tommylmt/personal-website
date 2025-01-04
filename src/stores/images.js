import { defineStore } from 'pinia'

export const useImagesStore = defineStore('images', {
    state() {
        return {
            isActive: false,
        }
    },
    actions: {
        toggle() {
            this.isActive = !this.isActive;
        }
    }
})
