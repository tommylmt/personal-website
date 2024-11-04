<template>
    <section class="relative w-11/12 my-10 mx-auto">
        <div class="p-6 sticky text top-0 w-full bg-white/80 z-30 backdrop-blur-lg">
            <h3 class="font-sans font-extrabold text-slate-800 text-3xl">{{ title }}</h3>
        </div>
        <div :class="['flex gap-5', customClass]">
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
            default: '',
        }
    }
}
</script>
