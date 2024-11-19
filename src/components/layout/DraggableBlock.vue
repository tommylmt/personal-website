<template>
    <div :class="[
        'rounded-xl shadow-md overflow-hidden absolute dark:shadow-slate-900 dark:shadow-lg',
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
    ]" :style="style" @mousedown="startDragging" @mouseup="stopDragging">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        style: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    data() {
        return {
            offsetX: null,
            offsetY: null,
            isDragging: false,
        }
    },
    methods: {
        startDragging(e) {
            e.preventDefault();

            this.offsetX = e.clientX - e.target.getBoundingClientRect().left;
            this.offsetY = e.clientY - e.target.getBoundingClientRect().top;

            this.isDragging = true;

            document.addEventListener('mousemove', this.dragElement);
        },
        dragElement(e) {
            e.preventDefault();

            e.target.style.left = (e.clientX - this.offsetX) + 'px';
            e.target.style.top = (e.clientY - this.offsetY) + 'px';
        },
        stopDragging() {
            this.isDragging = false;

            document.removeEventListener('mousemove', this.dragElement);
        }
    }
}
</script>
