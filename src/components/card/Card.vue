<template>
    <div class="group h-[500px] w-full lg:w-[25%] 2xl:w-[22%] relative hover:shadow-lg border border-slate-50 rounded-xl cursor-help overflow-hidden my-7 xl:my-0">
        <div class="w-full h-full rounded-xl transition-all duration-300 group-hover:scale-110" :style="{
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
        }"></div>
        <div class="absolute transition-all duration-200 content bg-white/90 backdrop-blur-md p-5 rounded-xl w-[96%] left-[2%] -bottom-[160px] group-hover:bottom-2">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            required: true
        }
    }
}
</script>
