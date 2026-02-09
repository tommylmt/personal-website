<template>
    <div
        :class="[
            'md:hidden fixed left-5 w-12 h-12 rounded-full flex items-center justify-center',
            'bg-white/20 border border-slate-100/20 backdrop-blur-xl backdrop-saturate-200 z-[9999] transition-all bottom-6',
            'shadow-md'
        ]"
        @click="openMenu = !openMenu"
    >
        <Transition name="toggle-menu">
            <i class="ph-light ph-list text-3xl z-50 text-slate-900 dark:text-white absolute" v-if="!openMenu"></i>
            <i class="ph-light ph-x text-3xl z-50 text-slate-900 dark:text-white absolute" v-else></i>
        </Transition>
    </div>

    <Motion
        as="nav"
        :initial="{ y: 200, scale: 0 }"
        :animate="{ y: 0, scale: 1 }"
        :transition="{
            duration: 0.4,
            scale: { visualDuration: 0.4, type: 'spring', bounce: 0.5 }
        }"
        @animation-complete="retrieveCurrent"
        v-show="openMenu || noResponsive"
        id="mainMenu"
        :class="[
            'fixed z-[9999] bottom-20 m-auto backdrop-blur-xl backdrop-saturate-200 p-2 rounded-xl md:rounded-[50px] shadow-md',
            'bg-white/20 border border-slate-100/20 transition-all md:bottom-10'
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
    </Motion>
</template>

<script lang="ts">
import MenuItem from './MenuItem.vue'
import { Motion } from 'motion-v'
import type { TNavBarData } from '@/types/app.ts'
import { NAVBAR_SELECTORS } from '@/utils/constants.ts'

export default {
    components: {
        MenuItem,
        Motion
    },
    data(): TNavBarData {
        return {
            currentLeft: 0,
            currentTop: 0,
            currentWidth: '50px',
            openMenu: false,
            clientHeight: 0,
            localPages: this.pages
        }
    },
    mounted() {
        this.clientHeight = document.querySelector(NAVBAR_SELECTORS.menuListItem)!.clientHeight
        this.retrieveCurrent()
    },
    watch: {
        '$i18n.locale'() {
            setTimeout(() => {
                this.currentWidth = `${this.getCurrentItem()?.clientWidth}px`
                this.currentLeft = `${this.getCurrentItem()?.offsetLeft}px`
            }, 50)
        }
    },
    computed: {
        noResponsive() {
            return window.innerWidth >= 768
        }
    },
    props: ['pages'],
    methods: {
        handleHover(e: HTMLLIElement) {
            this.moveTracker(e)

            this.getCurrentItem()?.classList.remove('text-white')
            this.getCurrentItem()?.classList.add('text-slate-900')
        },
        retrieveCurrent() {
            const current = this.getCurrentItem()

            if (current) {
                this.moveTracker(current)
                current.classList.add('text-white')
                current.classList.remove('text-slate-900')
            }
        },
        moveTracker(element: HTMLLIElement) {
            this.currentLeft = `${element.offsetLeft}px`
            this.currentWidth = `${element.clientWidth}px`
            this.currentTop = `${element.offsetTop}px`
            this.clientHeight = element.clientHeight
        },
        changeActivePage(e: string) {
            this.localPages.forEach((element) => {
                element.current = element.path === e
            })
        },
        getCurrentItem(): HTMLLIElement {
            return document.querySelector(NAVBAR_SELECTORS.currenItem) as HTMLLIElement
        }
    }
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
