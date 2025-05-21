<template>
    <div :class="['relative inline-block', this.class]" ref="wrapper">
        <a
            :href="url"
            :class="['text-black dark:text-white cursor-pointer', linkClass]"
            @mousemove="handleMouseMove"
            @mouseenter="showPreview"
            @mouseleave="hidePreview"
            target="_blank"
        >
            <slot />
        </a>

        <div v-show="isVisible" ref="preview" class="pointer-events-none absolute z-50" :style="previewStyle">
            <div class="overflow-hidden rounded-xl shadow-xl" :class="[popClass, { 'transform-gpu': !isStatic }]">
                <div class="block rounded-xl border-2 border-transparent bg-white p-1 shadow-lg dark:bg-gray-900">
                    <img
                        :src="previewSrc"
                        :width="width"
                        :height="height"
                        class="size-full rounded-lg object-cover"
                        :style="imageStyle"
                        alt="preview"
                        @load="handleImageLoad"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isStatic: {
            type: Boolean,
            default: false
        },
        imageSrc: {
            type: String,
            default: ''
        },
        linkClass: {
            type: String,
            default: ''
        },
        class: {
            type: String,
            default: ''
        },
        url: {
            type: String,
            required: true
        },
        width: {
            type: Number,
            default: 300
        },
        height: {
            type: Number,
            default: 188
        }
    },
    data() {
        return {
            isVisible: false,
            hasPopped: false,
            mousePosition: {
                x: 0,
                y: 0
            }
        }
    },

    computed: {
        previewSrc() {
            if (this.isStatic) return this.imageSrc

            const params = new URLSearchParams({
                url: this.url,
                screenshot: 'true',
                meta: 'false',
                embed: 'screenshot.url',
                colorScheme: 'light',
                'viewport.isMobile': window.innerWidth <= 784 ? 'true' : 'false',
                'viewport.deviceScaleFactor': '1',
                'viewport.width': String(this.width * 3),
                'viewport.height': String(this.height * 3)
            })

            return `https://api.microlink.io/?${params.toString()}`
        },
        previewStyle() {
            if (!this.isVisible) return {}

            const linkRect = this.$refs.wrapper?.getBoundingClientRect()
            const offset = 20
            let mouseMove = this.mousePosition.x - linkRect?.left
            const propName = this.height + offset >= linkRect.top ? 'top' : 'bottom'

            return {
                left: `${linkRect?.width / 2 - this.width / 2 + mouseMove}px`,
                [propName]: `${linkRect?.height + offset}px`,
                width: `${this.width}px`,
                height: `${this.height}px`
            }
        },
        imageStyle() {
            return {
                width: `${this.width}px`,
                height: `${this.height}px`
            }
        },
        popClass() {
            if (!this.hasPopped) return ''

            return 'animate-pop'
        }
    },
    methods: {
        handleMouseMove({ clientX, clientY }) {
            ;[this.mousePosition.x, this.mousePosition.y] = [clientX, clientY]
        },
        showPreview() {
            this.isVisible = true

            setTimeout(() => {
                this.hasPopped = true
            }, 50)
        },
        hidePreview() {
            this.isVisible = false
            this.hasPopped = false
        },
        handleImageLoad() {
            this.isLoading = false
        }
    }
}
</script>

<style scoped>
.transform-gpu {
    transform: scale3d(0, 0, 1);
    transform-origin: center bottom;
    will-change: transform;
    backface-visibility: hidden;
}

.animate-pop {
    animation: pop 1000ms ease forwards;
    will-change: transform;
}

@keyframes pop {
    0% {
        transform: scale3d(0.26, 0.26, 1);
    }
    25% {
        transform: scale3d(1.1, 1.1, 1);
    }
    65% {
        transform: scale3d(0.98, 0.98, 1);
    }
    100% {
        transform: scale3d(1, 1, 1);
    }
}
</style>
