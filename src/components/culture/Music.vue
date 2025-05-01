<template>
    <div
        :key="song.id"
        :class="[
            'relative rounded-lg group overflow-hidden transition-all scale-100 hover:scale-110 cursor-pointer',
            'col-span-1 p-2 md:p-0 md:shadow-lg'
        ]"
        @mousemove="movePlayer"
        @mouseleave="resetPosition"
        ref="music"
    >
        <div
            class="rounded-lg absolute bg-slate-800/40 backdrop-blur-lg w-full h-full z-30 opacity-0 group-hover:opacity-100 group-hover:delay-700 transition-all duration-100 items-center justify-center hidden md:flex"
        >
            <div
                :class="[
                    'w-16 h-16 bg-white rounded-full flex items-center justify-center relative shadow-lg',
                    'hover:bg-blue-600 group text-slate-800 hover:text-white transition-all'
                ]"
                @click="changeSong"
                @mousemove="resetPosition"
                :style="{
                    left: `${left}px`,
                    top: `${top}px`
                }"
            >
                <i class="ph-light ph-play text-3xl"></i>
            </div>
        </div>
        <div class="relative w-full rounded-lg shadow-lg h-full md:shadow-none overflow-hidden md:overflow-visible">
            <img :src="getImage(song.album)" alt="Song" class="w-full" crossorigin />
            <div
                :class="[
                    'absolute rounded-md p-3 pt-5 bg-gradient-to-t from-black to-transparent w-full left-0',
                    'opacity-0 bottom-0 transition-all group-hover:opacity-100 flex gap-3 items-center'
                ]"
            >
                <div
                    class="w-10 h-10 rounded-full shadow-lg"
                    :style="{ background: `url(${getImage(song.artist, 'small')})`, backgroundSize: 'cover' }"
                ></div>
                <div>
                    <p class="text-sm text-white">{{ song.name }}</p>
                    <p class="text-xs text-white/70">{{ song.artist.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useMusicStore } from '@/stores/music'

export default {
    props: {
        song: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            top: 0,
            left: 0,
            sizes: {
                large: 0,
                medium: 1,
                small: 2
            }
        }
    },
    computed: {
        ...mapStores(useMusicStore)
    },
    methods: {
        resetPosition() {
            this.top = 0
            this.left = 0
        },
        getImage(entry, size = 'large') {
            return entry.images[this.sizes[size]].url
        },
        movePlayer(e) {
            const [width, height] = [this.$refs.music.offsetWidth, this.$refs.music.offsetHeight]
            const [offsetX, offsetY] = [e.offsetX - width / 2, e.offsetY - height / 2]

            if (Math.abs(offsetY) <= 50 && Math.abs(offsetX) <= 50) {
                this.resetPosition()

                return
            }

            this.top = offsetY / 4
            this.left = offsetX / 4
        },
        changeSong() {
            this.musicStore.currentSong = null
            this.musicStore.currentSong = this.song
        }
    }
}
</script>
