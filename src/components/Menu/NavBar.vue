<template>
    <nav id="menu">
        <div 
            class="mouse-tracker" 
            :style="{ left: currentLeft, width: currentWidth, background: currentColor }">
        </div>
        <ul>
            <template v-for="page in pages">
                <li @mouseover="handleHover" @mouseleave="retrieveCurrent" :class="[ page.current ? 'current-item' : '' ]">
                    <RouterLink :to="page.path" @click="e => changeActivePage(e, page)">{{ page.name }}</RouterLink>
                </li>
            </template>
        </ul>
    </nav>
</template>

<script>
const localSelectors = {
    menuListItem: '#menu ul li',
    currenItem: '#menu ul li.current-item'
}

export default {
    props: {
        pages: {
            type: [Array, Object],
            default: () => {
                return []
            }
        }
    },
    data() {
        return {
            currentLeft: 0,
            currentWidth: '50px',
            currentColor: '',
        }
    },
    mounted() {
        this.retrieveCurrent()
    },
    computed: {
        currentPage() {
            this.pages.forEach(p => {
                if (p.path === this.$route.path) {
                    return p;
                }
            })

            return null;
        },
        currentItem() {
            return document.querySelector(localSelectors.currenItem)
        }
    },
    methods: {
        handleHover(e) {
            this.moveTracker(e)
            this.currentItem.classList.add('stopped')
        },
        retrieveCurrent() {
            this.moveTracker(this.currentItem)
            this.currentItem.classList.remove('stopped')

            this.currentColor = this.currentPage?.color;
        },
        moveTracker(element) {
            this.currentLeft = `${element.offsetLeft || element.offsetX}px`
            this.currentWidth = `${element.clientWidth}px`

            console.log(element.offsetLeft ?? element.offsetX);
            console.log(element.clientWidth)
        },
        changeActivePage(e, page) {
            this.pages.forEach((element) => {
                element.current = element.path === e.target.getAttribute('href')
            })

            this.currentColor = page.color;
        },
    }
}
</script>