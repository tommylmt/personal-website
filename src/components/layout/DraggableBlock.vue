<template>
    <div
        :class="['rounded-3xl md:absolute transition-shadow hover:shadow-2xl', isDragging ? 'cursor-grabbing' : 'cursor-grab']"
        :style="realStyle"
        ref="draggable"
        @mousedown="mouseDown"
    >
        <div class="rounded-3xl overflow-hidden relative shadow-md dark:shadow-slate-900 dark:shadow-lg">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import type { TDraggableBlockData } from '@/types/app.ts'

export default {
    props: {
        style: {
            type: Object,
            default: () => {
                return {}
            }
        },
        hideMobile: {
            type: Boolean,
            default: false
        }
    },
    data(): TDraggableBlockData {
        return {
            offsetX: null,
            offsetY: null,
            isDragging: false,
            left: null,
            top: null,
            isActive: false
        }
    },
    computed: {
        realStyle() {
            const style = this.style
            style.zIndex = this.isActive ? 5000 : this.isDragging ? 5000 : style.zIndex || 'auto'
            style.left = this.left || this.style.left
            style.top = this.top || this.style.top

            if (window.innerWidth < 765) {
                if (this.hideMobile) {
                    style.display = 'none'
                } else if (this.style.width) {
                    style.flex = `0 0 ${this.style.width}`
                }
            }

            return style
        }
    },
    mounted() {
        window.addEventListener('mouseup', this.mouseUp, false)
    },
    methods: {
        mouseUp() {
            this.isDragging = false
            window.removeEventListener('mousemove', this.moveElement, false)
        },
        mouseDown(e: MouseEvent) {
            e.preventDefault()
            this.isDragging = true
            const draggable = this.$refs.draggable as HTMLDivElement

            this.offsetX = e.clientX - draggable.offsetLeft
            this.offsetY = e.clientY - draggable.offsetTop

            window.addEventListener('mousemove', this.moveElement, false)
        },
        moveElement(e: MouseEvent) {
            this.left = e.clientX - (this.offsetX ?? 0) + 'px'
            this.top = e.clientY - (this.offsetY ?? 0) + 'px'
            const draggable = this.$refs.draggable as HTMLDivElement

            draggable.style.left = this.left
            draggable.style.top = this.top
        }
    }
}
</script>
