<template>
    <AnimatePresence :initial="true">
        <Motion
            v-if="isOpen"
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1, delay: 300 }"
            :exit="{ opacity: 0 }"
            as="div"
            class="backdrop-blur-sm bg-slate-800/60 w-screen h-screen fixed top-0 left-0 z-40"
        ></Motion>
        <Motion
            v-if="isOpen"
            :initial="{ opacity: 0, scale: 0 }"
            :animate="{ scale: 1, opacity: 1 }"
            :exit="{ opacity: 0, scale: 0, delay: 300 }"
            key="filmModal"
            as="div"
            class="bg-white p-10 rounded-3xl shadow-lg w-1/2 fixed top-10 left-1/4 z-50"
        >
            <div
                @click="close"
                :class="[
                    'w-7 h-7 flex items-center justify-center bg-black rounded-full shadow-md cursor-pointer',
                    'transition-all hover:rotate-180 sticky top-10 right-10'
                ]"
            >
                <i class="ph-light ph-x text-white text-lg"></i>
            </div>
        </Motion>
    </AnimatePresence>
</template>

<script>
import { AnimatePresence, Motion } from 'motion-v'
import { mapStores } from 'pinia'
import { useCultureStore } from '@/stores/cultureStore'
import axios from 'axios'

export default {
    components: { AnimatePresence, Motion },
    data() {
        return {
            isOpen: false,
            data: {}
        }
    },
    computed: {
        ...mapStores(useCultureStore)
    },
    watch: {
        'cultureStore.uuid'(newValue) {
            if (newValue) {
                this.isOpen = true
                this.fetch(newValue)
            }
        }
    },
    methods: {
        close() {
            this.isOpen = false
            this.cultureStore.$reset()
        },
        async fetch(uuid) {
            const { data } = await axios.get(`${this.$baseUrl}/api/${this.$i18n.locale}/culture/${uuid}/details`)

            this.data = data
        }
    }
}
</script>
