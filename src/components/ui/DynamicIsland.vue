<template>
    <MotionConfig
        :transition="{
            duration: 0.7,
            type: 'spring',
            bounce: 0.5
        }"
    >
        <div
            :class="['fixed left-1/2 top-12 z-[999] -translate-x-1/2 bg-primary/90 backdrop-blur-lg border-radius', $props.class]"
            @click="() => (open = !open)"
        >
            <motion.div
                id="motion-id"
                layout
                :initial="{
                    height: props.height,
                    width: 0
                }"
                :animate="{
                    height: open && isSlotAvailable ? 'auto' : props.height,
                    width: open && isSlotAvailable ? 320 : 260
                }"
                class="bg-natural-900 relative cursor-pointer overflow-hidden text-secondary"
            >
                <header class="gray- flex h-11 cursor-pointer items-center gap-2 px-4">
                    <AnimatedCircularProgressBar
                        :value="scrollPercentage * 100"
                        :min="0"
                        :max="100"
                        :circle-stroke-width="10"
                        class="w-6"
                        :show-percentage="false"
                        :duration="0.3"
                        :gauge-secondary-color="isDark ? '#6b728055' : '#6b728099'"
                        :gauge-primary-color="isDark ? 'black' : 'white'"
                    />
                    <h1 class="grow text-center font-bold">{{ title }}</h1>
                    <NumberFlow :value="scrollPercentage" :format="{ style: 'percent' }" locales="en-US" />
                </header>
                <motion.div
                    v-if="isSlotAvailable"
                    class="mb-2 flex h-full max-h-60 overflow-hidden flex-col gap-1 overflow-y-auto px-4 text-sm"
                >
                    <slot />
                </motion.div>
            </motion.div>
        </div>
    </MotionConfig>
</template>

<script lang="ts" setup>
import NumberFlow from '@number-flow/vue'
import { useColorMode } from '@vueuse/core'
import { motion, MotionConfig } from 'motion-v'
import { computed, onMounted, onUnmounted, ref, useSlots } from 'vue'
import AnimatedCircularProgressBar from '@/components/ui/AnimatedCircularProgressBar.vue'

interface Props {
    class?: string
    title?: string
    height?: number
    blockToObserve?: string
}

const props = withDefaults(defineProps<Props>(), {
    class: '',
    title: 'Progress',
    height: 44,
    blockToObserve: 'body'
})

const open = ref(false)
const slots = useSlots()

const scrollPercentage = ref<number>(0)

onMounted(() => {
    window.addEventListener('scroll', observeProgress)
    observeProgress()
})

const isDark = computed(() => useColorMode().value == 'dark')
const isSlotAvailable = computed(() => !!slots.default)
const borderRadius = computed(() => `${props.height / 2}px`)

const observeProgress = () => {
    const element = document.querySelector<HTMLElement>(props.blockToObserve)

    if (!element) {
        return
    }

    const windowBottom = window.scrollY + window.innerHeight
    const elementTop = element.getBoundingClientRect().top + window.scrollY
    const percentage = (windowBottom - elementTop) / element.offsetHeight

    if (percentage >= 1) {
        scrollPercentage.value = 1
    } else if (windowBottom >= elementTop) {
        scrollPercentage.value = percentage
    } else {
        scrollPercentage.value = 0
    }
}

onUnmounted(() => {
    window.removeEventListener('scroll', observeProgress)
})
</script>

<style scoped>
.border-radius {
    border-radius: v-bind(borderRadius);
}
</style>
