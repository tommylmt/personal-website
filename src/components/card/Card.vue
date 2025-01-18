<template>
    <div :class="[
        'group relative hover:shadow-lg border rounded-xl cursor-help overflow-hidden my-7 xl:my-0',
        'h-[500px] md:h-[275px] xl:h-[375px] 2xl:h-[500px] w-full md:w-[48%] lg:w-[22%]',
        'border-slate-50 dark:border-slate-900 intersect:motion-preset-slide-up',
    ]" data-aos="fade-up" :data-aos-delay="delay">
        <div class="w-full h-full rounded-xl transition-all duration-300 group-hover:scale-110" :style="{
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
        }"></div>
        <div class="absolute transition-all duration-200 content bg-white/90 backdrop-blur-md p-5 rounded-xl w-[96%] left-[2%] -bottom-[200px] -xl:bottom-[160px] group-hover:bottom-2 dark:bg-slate-950/80">
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
        },
        delay: {
            type: Number,
            default: 0
        }
    },
}
</script>
