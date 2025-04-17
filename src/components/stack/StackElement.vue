<template>
    <div class="item" :data-type="icon.type">
        <div class="item-content">
            <div
                :class="[
                    'group text-center bg-white transition-all rounded-xl md:p-2',
                    'hover:shadow-lg hover:scale-110 dark:bg-slate-950',
                    isGrabbing ? 'cursor-grabbing' : 'cursor-grab'
                ]"
                @mousedown="isGrabbing = true"
                @mouseup="isGrabbing = false"
            >
                <div
                    v-html="icon.svg"
                    class="transition-all w-7/12 mx-auto fill-slate-300 group-hover:fill-slate-400 dark:fill-slate-600"
                ></div>
                <p class="font-sans text-xs text-slate-400 mt-5 dark:text-slate-600">
                    {{ icon.title }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: Object,
            required: true
        },
        delay: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            isGrabbing: false
        }
    }
}
</script>
