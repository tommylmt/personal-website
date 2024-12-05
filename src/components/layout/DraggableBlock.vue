<template>
    <div :class="[
        'rounded-xl md:absolute transition-shadow hover:shadow-2xl',
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
    ]" :style="realStyle" ref="draggable" @mousedown="mouseDown">
        <div class="rounded-xl overflow-hidden relative shadow-md dark:shadow-slate-900 dark:shadow-lg">
            <slot></slot>
        </div>
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
            left: null,
            top: null,
        }
    },
    computed: {
        realStyle() {
            let style = this.style;
            style.zIndex = this.isDragging ? 5000 : (style.zIndex || 'auto');
            style.left = this.left || this.style.left;
            style.top = this.top || this.style.top;

            return style;
        }
    },
    mounted() {
        window.addEventListener('mouseup', this.mouseUp, false);
    },
    methods: {
        mouseUp() {
            this.isDragging = false;
            window.removeEventListener('mousemove', this.moveElement, false);
        },
        mouseDown(e) {
            e.preventDefault();
            this.isDragging = true;

            this.offsetX = e.clientX - this.$refs.draggable.offsetLeft;
            this.offsetY = e.clientY - this.$refs.draggable.offsetTop;

            window.addEventListener('mousemove', this.moveElement, false);
        },
        moveElement(e) {
            this.left = (e.clientX - this.offsetX) + 'px';
            this.top = (e.clientY - this.offsetY) + 'px';

            this.$refs.draggable.style.left = this.left;
            this.$refs.draggable.style.top = this.top;
        }
    }
}
</script>
