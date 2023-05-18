<template>
    <li :class="['menu-item', (current ? 'current-item' : '')] "
        @mouseover="$emit('followItem')" 
        @mouseleave="$emit('retrieveCurrent')"
    >
        <a :href=path>{{ name }}</a>
    </li>
</template>

<script>
export default {
    props: ['path', 'current', 'name'],
}
</script>   