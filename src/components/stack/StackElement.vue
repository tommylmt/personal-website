<template>
    <Transition appear name="icons" type="transition">
        <div
            class="group basis-1/12 text-center transition-all hover:scale-110 cursor-pointer hover:shadow-xl rounded-xl p-2"
        >
            <div v-html="icon.svg" class="transition-all w-7/12 mx-auto fill-slate-300 group-hover:fill-slate-400"></div>
            <p class="font-sans text-xs text-slate-400 mt-5">{{ icon.title }}</p>
        </div>
    </Transition>
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

<style lang="scss">
.icons-move,
.icons-enter-active,
.icons-leave-active {
    transition: all .3s ease;
    transform: translateX(30px), scale(.3);
}

.icons-enter-from, .icons-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.icons-leave-active {
    position: absolute;
}
</style>
