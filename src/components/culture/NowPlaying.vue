<template>
    <Transition name="slide">
        <div v-if="song"
            class="bg-slate-800/70 backdrop-blur-lg p-1 rounded-lg shadow-md fixed top-5 right-5 z-[5000] flex items-center gap-3"
        >
            <img :src="song.album.cover_medium" alt="Currently playing" class="rounded-md" width="60">
            <div class="w-64 flex items-center gap-5 justify-between pe-5">
                <div>
                    <p class="text-white text-sm">{{ song.title }}</p>
                    <h6 class="text-xs text-slate-400">{{ song.artist.name }}</h6>
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
                console.log(this.howler.duration());
            })
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
