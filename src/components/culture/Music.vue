<template>
    <div
        :key="song.id"
        :class="[
            'relative rounded-lg group overflow-hidden transition-all scale-100 hover:scale-110 cursor-pointer',
            'col-span-1 p-2 md:p-0 md:shadow-lg'
        ]"
    >
        <div
            :class="[
                'absolute w-full h-full top-0 left-0 backdrop-blur-md z-10 p-4 transition-all delay-700',
                'flex justify-center items-center  opacity-0 group-hover:opacity-100'
            ]"
        >
            <div class="text-center">
                <div
                    :style="{ background: `url(${getImage(song.artist, 'medium')})`, backgroundSize: 'cover' }"
                    class="rounded-full w-24 h-24 shadow-md m-auto border-2 border-white/70"
                ></div>
                <p class="font-sans text-white text-xs uppercase p-1 rounded-md bg-slate-900 -translate-y-4">{{ song.artist.name }}</p>
            </div>
        </div>
        <div class="relative w-full rounded-lg shadow-lg h-full md:shadow-none overflow-hidden md:overflow-visible">
            <img :src="getImage(song.album)" alt="Song" class="w-full h-full" crossorigin />
            <div
                :class="[
                    'absolute rounded-md p-3 pt-5 bg-gradient-to-t from-black to-transparent w-full left-0',
                    'opacity-0 bottom-0 transition-all group-hover:opacity-100 flex gap-3 items-center'
                ]"
            >
                <div
                    class="w-10 h-10 rounded-full shadow-lg shrink-0 border border-white/40"
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
export default {
    props: {
        song: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            sizes: {
                large: 0,
                medium: 1,
                small: 2
            }
        }
    },
    methods: {
        getImage(entry, size = 'large') {
            return entry.images[this.sizes[size]].url
        }
    }
}
</script>
