<template>
    <nav id="mainMenu" class="fixed bottom-10 m-auto bg-slate-200/60 backdrop-blur-xl p-2 rounded-[50px] shadow-sm">
        <div
            class="bg-slate-900 rounded-[45px] absolute transition-all duration-300"
            :style="{ left: currentLeft, width: currentWidth, height: `${clientHeight}px` }"
        ></div>
        <ul class="flex gap-5 justify-between">
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
            currentWidth: '50px',
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
            }, 50)
        }
    },
    props: ['pages'],
    methods: {
        handleHover(e) {
            this.moveTracker(e.$refs.listItem)
            this.getCurrentItem().classList.add('!text-slate-900')
        },
        retrieveCurrent() {
            this.moveTracker(this.getCurrentItem())
            this.getCurrentItem().classList.remove('!text-slate-900')
        },
        moveTracker(element) {
            this.currentLeft = `${element.offsetLeft}px`
            this.currentWidth = `${element.clientWidth}px`
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
