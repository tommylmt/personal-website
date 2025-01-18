<template>
    <div
        :key="song.id"
        :class="[
            'relative rounded-lg group overflow-hidden transition-all scale-100 hover:scale-110 cursor-pointer',
            'w-1/2 md:w-1/5 lg:w-1/6 p-2 md:p-0 md:shadow-lg'
        ]"
        @mousemove="movePlayer"
        @mouseleave="resetPosition"
        ref="music"
    >
        <div class="rounded-lg absolute bg-slate-800/40 backdrop-blur-lg w-full h-full z-30 opacity-0 group-hover:opacity-100 group-hover:delay-700 transition-all duration-100 items-center justify-center hidden md:flex">
            <div
                :class="[
                    'w-16 h-16 bg-white rounded-full flex items-center justify-center relative shadow-lg',
                    'hover:bg-blue-600 group text-slate-800 hover:text-white transition-all',
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
        <div class="relative w-full rounded-lg shadow-lg md:shadow-none overflow-hidden md:overflow-visible">
            <img :src="song.album.cover_medium" alt="Song" class="w-full" crossorigin>
            <div :class="[
                'absolute bg-white/70 shadow-lg backdrop-blur-lg rounded-md p-2 w-[96%] left-[2%]',
                '-bottom-40 transition-all group-hover:bottom-1 dark:bg-slate-800/70'
            ]">
                <p class="text-sm text-slate-800 dark:text-white">{{ song.title }}</p>
                <p class="text-xs text-slate-500 dark:text-slate-400">{{ song.artist.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapStores} from "pinia";
import {useMusicStore} from "@/stores/music";

export default {
    props: {
        song: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            top: 0,
            left: 0,
        }
    },
    computed: {
        ...mapStores(useMusicStore)
    },
    methods: {
        resetPosition() {
            this.top = 0
            this.left = 0;
        },
        movePlayer(e) {
            const [width, height] = [this.$refs.music.offsetWidth, this.$refs.music.offsetHeight];
            const [offsetX, offsetY] = [(e.offsetX - (width / 2)), (e.offsetY - (height / 2))];

            if (Math.abs(offsetY) <= 50 && Math.abs(offsetX) <= 50) {
                this.resetPosition();

                return;
            }

            this.top = offsetY / 4;
            this.left = offsetX / 4;
        },
        changeSong() {
            this.musicStore.currentSong = null;
            this.musicStore.currentSong = this.song;
        }
    }
}
</script>
