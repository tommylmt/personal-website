<template>
    <div
        :class="[
            'md:hidden fixed left-5 w-12 h-12 rounded-full flex items-center justify-center',
            'bg-white/20 border border-neutral-100/20 backdrop-blur-xl backdrop-saturate-200 z-[9999] transition-all bottom-6',
            'shadow-md',
            mobileButtonAnimation
        ]"
        @click="openMenu = !openMenu"
    >
        <Transition name="toggle-menu">
            <i class="ph-light ph-list text-3xl z-50 text-neutral-900 dark:text-white absolute" v-if="!openMenu"></i>
            <i class="ph-light ph-x text-3xl z-50 text-neutral-900 dark:text-white absolute" v-else></i>
        </Transition>
    </div>

    <nav
        v-show="openMenu || noResponsive"
        id="mainMenu"
        :class="[
            'fixed z-[9999] m-auto backdrop-blur-xl backdrop-saturate-200 p-2 rounded-xl md:rounded-[50px] shadow-md',
            'bg-white/20 border border-neutral-100/20 transition-all duration-500',
            animation
        ]"
    >
        <div
            class="bg-black rounded-xl md:rounded-[45px] absolute transition-all duration-300"
            :style="{
                left: currentLeft,
                width: currentWidth,
                top: currentTop,
                height: `${clientHeight}px`
            }"
        ></div>
        <ul class="md:flex gap-5 justify-between">
            <MenuItem
                v-for="page in localPages"
                :name="page.name"
                :current="page.current"
                :key="page.path"
                :path="page.path"
                :special="page.specialLink"
                @follow-item="handleHover"
                @hover-stop="retrieveCurrent"
                @active-page-change="changeActivePage"
                :data-test="$testIds.About.NavBar.items"
            />
        </ul>
    </nav>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import type { MenuItem as TMenuItem } from '@/types/menu'
import { NAVBAR_SELECTORS } from '@/utils/constants.ts'
import { nextTick, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAnimation } from '@/composables/useAnimation.ts'

const i18n = useI18n()
const animation = useAnimation('-bottom-50 scale-0 opacity-0', 'bottom-20 md:bottom-10 scale-100 opacity-100', 750)
const mobileButtonAnimation = useAnimation('-bottom-50 scale-0 opacity-0', 'bottom-6 scale-100 opacity-100', 750)

const props = defineProps<{
    pages: TMenuItem[]
}>()

const clientHeight = ref<number>(0)
const currentLeft = ref<number | string>(0)
const currentTop = ref<number | string>(0)
const currentWidth = ref<string>('50px')
const openMenu = ref<boolean>(false)
const localPages = ref(props.pages)

onMounted(() => {
    clientHeight.value = document.querySelector(NAVBAR_SELECTORS.menuListItem)!.clientHeight
    retrieveCurrent()
})

watch(i18n.locale, () => {
    setTimeout(() => {
        currentWidth.value = `${getCurrentItem()?.clientWidth}px`
        currentLeft.value = `${getCurrentItem()?.offsetLeft}px`
    }, 50)
})

watch(openMenu, async () => {
    await nextTick()
    retrieveCurrent()
})

const noResponsive = window.innerWidth >= 768

const handleHover = (e: HTMLLIElement) => {
    moveTracker(e)

    getCurrentItem()?.classList.remove('text-white')
    getCurrentItem()?.classList.add('text-neutral-900')
}

const retrieveCurrent = () => {
    const current = getCurrentItem()

    if (current) {
        moveTracker(current)
        current.classList.add('text-white')
        current.classList.remove('text-neutral-900')
    }
}

const moveTracker = (element: HTMLLIElement) => {
    currentLeft.value = `${element.offsetLeft}px`
    currentWidth.value = `${element.clientWidth}px`
    currentTop.value = `${element.offsetTop}px`
    clientHeight.value = element.clientHeight
}

const changeActivePage = (e: string) => {
    localPages.value.forEach((element) => {
        element.current = element.path === e
    })
}

const getCurrentItem = (): HTMLLIElement => {
    return document.querySelector(NAVBAR_SELECTORS.currenItem) as HTMLLIElement
}
</script>

<style>
.toggle-menu-enter-active,
.toggle-menu-leave-active {
    transition: all 0.25s ease-out;
}
.toggle-menu-enter-from {
    opacity: 0;
    transform: translateY(30px);
}
.toggle-menu-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>
