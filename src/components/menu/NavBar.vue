<template>
    <nav id="mainMenu">
        <div class="mouse-tracker" :style="{left: currentLeft, width: currentWidth, height: `${clientHeight}px`}"></div>

        <ul>
            <MenuItem v-for="page in localPages"
                :name=page.name
                :current=page.current
                :key=page.path
                :path=page.path
                @followItem="$e => handleHover($e)"
                @hoverStop="retrieveCurrent()"
                @active-page-change="$e => changeActivePage($e)"
            />
        </ul>
    </nav>
</template>

<script>
import MenuItem from './MenuItem.vue';

const localSelectors = {
    menuListItem: '#mainMenu ul li',
    currenItem: '#mainMenu ul li.current-item'
};

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
        this.clientHeight =  document.querySelector(localSelectors.menuListItem).clientHeight;
        this.retrieveCurrent();
    },
    props: ['pages'],
    methods: {
        handleHover(e) {
            this.moveTracker(e.$refs.listItem);
            this.getCurrentItem().classList.add('stopped');
        },
        retrieveCurrent() {
            this.moveTracker(this.getCurrentItem());
            this.getCurrentItem().classList.remove('stopped');
        },
        moveTracker(element) {
            this.currentLeft = `${element.offsetLeft}px`;
            this.currentWidth = `${element.clientWidth}px`;
        },
        changeActivePage(e) {
            let element = this.localPages[e.$refs.link.getAttribute('href').slice(1) || '/'];
            Object.keys(this.localPages).forEach(key => { this.localPages[key].current = false});

            element.current = true;
        },
        getCurrentItem() {
            return document.querySelector(localSelectors.currenItem);
        }
    },
}
</script>