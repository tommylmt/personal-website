<template>
    <section class="relative w-full 2xl:w-11/12 my-10 mx-auto">
        <div class="p-3 lg:p-6 sticky text top-0 w-full bg-white/80 z-30 backdrop-blur-lg dark:bg-slate-950/80">
            <h3 class="font-sans font-extrabold text-slate-800 text-3xl dark:text-slate-400 intersect-once intersect:motion-translate-x-out-25 intersect:motion-opacity-in-0">
                {{ title }}
            </h3>
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
