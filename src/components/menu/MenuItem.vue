<template>
    <li :class="[mainClass, (current ? currentClass : '')] " ref="listItem"
        @mouseover="onHover()" 
        @mouseleave="stopHover()"
    >
        <a :href=path>{{ name }}</a>
    </li>
</template>

<script>
export default {
    data() {
        return {
            mainClass: 'menu-item',
            currentClass: 'current-item',
        }
    },
    props: ['path', 'current', 'name'],
    methods: {
        onHover() {
            this.$emit('followItem', this);
        },
        stopHover() {
            this.$emit('hoverStop', this);
        }
    }
}
</script>   