<template>
    <div :class="[
        'md:hidden fixed bottom-6 left-5 w-12 h-12 rounded-full flex items-center justify-center',
        'bg-slate-200/60 dark:bg-slate-700/60 backdrop-blur-xl z-[9999]'
    ]" @click="openMenu = !openMenu">
        <Transition name="toggle-menu">
            <i class="ph-light ph-list text-3xl z-50 text-slate-900 dark:text-white absolute" v-if="!openMenu"></i>
            <i class="ph-light ph-x text-3xl z-50 text-slate-900 dark:text-white absolute" v-else></i>
        </Transition>
    </div>

    <nav
        v-show="openMenu || noResponsive"
        id="mainMenu"
        :class="[
            'fixed z-[9999] bottom-20 md:bottom-10 m-auto backdrop-blur-xl p-2 rounded-xl md:rounded-[50px] shadow-sm',
            'bg-slate-200/60 dark:bg-slate-700/60'
        ]"
    >
        <div
            class="bg-slate-900 dark:bg-slate-300 rounded-xl md:rounded-[45px] absolute transition-all duration-300"
            :style="{ left: currentLeft, width: currentWidth, top: currentTop, height: `${clientHeight}px` }"
        ></div>
        <ul class="md:flex gap-5 justify-between">
            <MenuItem
                v-for="page in localPages"
                :name="page.name"
                :current="page.current"
                :key="page.path"
                :path="page.path"
                :special="page.specialLink"
                @followItem="($e) => handleHover($e)"
                @hoverStop="retrieveCurrent()"
                @active-page-change="($e) => changeActivePage($e)"
            />
        </ul>
    </nav>
</template>

<script>
import MenuItem from './MenuItem.vue'

const localSelectors = {
    menuListItem: '#mainMenu ul li',
    currenItem: '#mainMenu ul li.current-item'
}

export default {
    components: {
        MenuItem
    },
    data() {
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
        this.clientHeight = document.querySelector(localSelectors.menuListItem).clientHeight
        this.retrieveCurrent()
    },
    watch: {
        '$i18n.locale'() {
            setTimeout(() => {
                this.currentWidth = `${this.getCurrentItem()?.clientWidth}px`;
                this.currentLeft = `${this.getCurrentItem()?.offsetLeft}px`
            }, 50)
        }
    },
    computed: {
        noResponsive() {
            return window.innerWidth >= 768;
        }
    },
    props: ['pages'],
    methods: {
        handleHover(e) {
            this.moveTracker(e.$refs.listItem)
            this.getCurrentItem().classList.add(['!text-slate-900', 'dark:text-slate-200'])
        },
        retrieveCurrent() {
            this.moveTracker(this.getCurrentItem())
            this.getCurrentItem().classList.remove(['!text-slate-900', 'dark:text-slate-200'])
        },
        moveTracker(element) {
            this.currentLeft = `${element.offsetLeft}px`
            this.currentWidth = `${element.clientWidth}px`
            this.currentTop = `${element.offsetTop}px`
        },
        changeActivePage(e) {
            this.localPages.forEach((element) => {
                element.current = element.path === e.$refs.link.to
            })
        },
        getCurrentItem() {
            return document.querySelector(localSelectors.currenItem)
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
