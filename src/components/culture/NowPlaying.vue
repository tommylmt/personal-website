<template>
    <Transition name="slide">
        <div v-if="song"
            class="bg-slate-800/70 backdrop-blur-lg p-1 rounded-lg shadow-md fixed top-5 right-5 z-[5000] flex items-center gap-3"
        >
                <img :src="song.album.cover_medium" alt="Currently playing" class="rounded-md" width="60">
                <div class="w-64 pe-5">
                    <div class="flex items-center gap-5 justify-between">
                        <div>
                            <p class="text-white text-sm">{{ song.title }}</p>
                            <h6 class="text-xs text-slate-300">{{ song.artist.name }}</h6>
                        </div>
                        <div class="text-white flex items-center gap-3">
                            <i
                                :class="[
                                'ph-light text-xl cursor-pointer transition-all hover:text-slate-400',
                                isPlaying ? 'ph-pause' : 'ph-play',
                            ]"
                                @click="managePlayPause"
                            ></i>
                            <i
                                class="ph-light ph-stop text-xl cursor-pointer transition-all hover:text-slate-400"
                                @click="stop"
                            ></i>
                        </div>
                    </div>
                    <div class="my-1">
                        <div class="w-full bg-slate-700 rounded-3xl">
                            <div
                                class="h-1 bg-slate-200 transition-all w-0 rounded-3xl"
                                :style="{width: `${((this.tracker * 100 / this.duration))}%`}"
                            ></div>
                        </div>
                    </div>
                </div>
        </div>
    </Transition>
</template>

<script>
import { mapStores } from "pinia";
import { useMusicStore } from "@/stores/music";
import { Howl } from 'howler';

export default {
    computed: {
        ...mapStores(useMusicStore),
        song() {
            return this.musicStore.currentSong;
        }
    },
    data() {
        return {
            howler: null,
            isPlaying: false,
            duration: null,
            tracker: 0,
            timeoutId: null,
        }
    },
    watch: {
        'song'(newValue) {
            if (newValue) {
                this.destroyHowler();
                this.play();
            }
        }
    },
    methods: {
        play() {
            this.howler = new Howl({
                src: [`${this.$baseUrl}/api/culture/track/${this.song.id}.mp3`],
                onend: () => {
                    this.stop();
                }
            })

            this.howler.on('load', () => {
                this.howler.fade(0, 1, 2000, this.howler.play());
                this.isPlaying = true;

                this.duration = this.howler.duration();
                this.trackTime();
            })
        },
        trackTime() {
            this.timeoutId = setTimeout(() => {
                if (this.isPlaying) {
                    this.tracker += 1;
                }

                this.trackTime();
            }, 1000);
        },
        managePlayPause() {
            if (this.isPlaying) {
                this.howler.pause();
            } else {
                this.howler.play();
            }

            this.isPlaying = !this.isPlaying;
        },
        destroyHowler() {
            if (this.howler) {
                this.howler.unload();
            }
        },
        stop() {
            this.destroyHowler();
            this.musicStore.$reset();
            this.duration = this.tracker = 0;

            clearTimeout(this.timeoutId);
        }
    }
}
</script>

<style>
.slide-enter-active,
.slide-leave-active {
    transition: right .3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
    right: -400px;
}
</style>
