<template>
    <div
        class="group basis-1/12 text-center transition-all hover:scale-110 cursor-pointer hover:shadow-xl rounded-xl p-2"
    >
        <div v-html="icon.svg" class="w-7/12 mx-auto fill-slate-300 group-hover:fill-slate-400"></div>
        <p class="font-sans text-xs text-slate-400 mt-5">{{ icon.title }}</p>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: Object,
            required: true,
        }
    }
}
</script>
