<template>
    <div class="w-96 p-3">
        <div
            class="w-full h-[500px] rounded-lg flex items-end p-1"
            :style="{
                background: `url(${$baseUrl + file})`,
                backgroundSize: 'cover'
            }"
        >
            <div :class="[
                'shadow-lg backdrop-blur-lg w-full p-3 flex justify-between items-center rounded-lg',
                'bg-white/70 dark:bg-slate-800/70'
            ]">
                <p class="text-slate-500 dark:text-slate-300 text-sm">{{ subtitle }}</p>
                <p class="text-slate-800 dark:text-slate-100 font-sans">{{ artist }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        file: { type: String, required: true },
        subtitle: { type: String, required: true },
        artist: { type: String, required: true }
    },
}
</script>
