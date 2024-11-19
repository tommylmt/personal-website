<template>
    <div :class="[
        'rounded-xl shadow-md overflow-hidden absolute dark:shadow-slate-900 dark:shadow-lg cursor-grab'
    ]" :style="style">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        style: {
            type: Object,
            default: () => {
                return {};
            }
        }
    }
}
</script>
