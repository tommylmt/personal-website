<template>
    <section class="relative w-full 2xl:w-11/12 xl:my-10 mx-auto">
        <div class="p-3 lg:p-6 sticky text top-0 w-full bg-white/80 z-30 backdrop-blur-lg dark:bg-black/80">
            <h2 class="font-sans font-extrabold text-slate-800 text-3xl dark:text-slate-400">
                {{ title }}
            </h2>
        </div>
        <div :class="customClass">
            <slot></slot>
        </div>
    </section>
</template>

<script lang="ts">
export default {
    props: {
        title: {
            type: String,
            default: 'Titre'
        },
        customClass: {
            type: [String, Array, Object],
            default: 'flex-nowrap md:flex-wrap md:flex lg:flex-nowrap gap-5 p-3 2xl:p-0'
        }
    }
}
</script>
