<template>
    <nav id="mainMenu">
        <div class="mouse-tracker"></div>

        <ul>
            <MenuItem v-for="page in pages" 
                :name=page.name
                :current=page.current
                :key=page.path
                :path=page.path
            />
        </ul>
    </nav>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
    components: {
        MenuItem
    },
    props: ['pages'],
    methods: {
        handleHover() {

        }
    }
}
</script>