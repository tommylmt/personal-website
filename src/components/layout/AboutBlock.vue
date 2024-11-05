<template>
    <section class="relative w-full 2xl:w-11/12 my-10 mx-auto">
        <div class="p-3 lg:p-6 sticky text top-0 w-full bg-white/80 z-30 backdrop-blur-lg">
            <h3 class="font-sans font-extrabold text-slate-800 text-3xl">{{ title }}</h3>
        </div>
        <div :class="customClass">
            <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Titre'
        },
        customClass: {
            type: [String, Array, Object],
            default: 'lg:flex gap-5 p-3 2xl:p-0',
        }
    }
}
</script>
