<template>
    <li
        :class="[mainClass, current ? currentClass : '']"
        ref="listItem"
        @mouseover="onHover()"
        @mouseleave="stopHover()"
    >
        <router-link :to="path" @click="changeActive()" ref="link" class="font-sans font-light">{{ name }}</router-link>
    </li>
</template>

<script>
export default {
    data() {
        return {
            mainClass: 'font-sans px-5 py-2 relative hover:text-white transition-color duration-300',
            currentClass: 'current-item text-white'
        }
    },
    props: ['path', 'current', 'name'],
    methods: {
        onHover() {
            this.$emit('followItem', this)
        },
        stopHover() {
            this.$emit('hoverStop', this)
        },
        changeActive() {
            this.$emit('active-page-change', this)
        }
    }
}
</script>
