<template>
    <li
        :class="[mainClass, current ? currentClass : '']"
        ref="listItem"
        @mouseover="onHover()"
        @mouseleave="stopHover()"
    >
        <router-link
            v-if="!special"
            :to="path"
            @click="changeActive()"
            ref="link"
            :class="classList"
        >
            {{ name }}
        </router-link>
        <a v-else :href="path" :class="classList" target="_blank">{{ name }}</a>
    </li>
</template>

<script>
export default {
    data() {
        return {
            mainClass: 'font-sans px-5 py-2 relative hover:text-white transition-color duration-300',
            currentClass: 'current-item text-white',
            classList: "font-sans font-light"
        }
    },
    props: ['path', 'current', 'name', 'special'],
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
