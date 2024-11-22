<template>
    <div
        :key="song.id"
        class="w-1/6"
        @mouseover="playMusic()"
        @mouseleave="stopMusic()"
    >
        <img :src="song.album.cover_medium" alt="Musique" />
        <p>{{ song.title }}</p>
        <h6>{{ song.artist.name }}</h6>
    </div>
</template>

<script>
export default {
    props: {
        song: {
            type: Object,
            required: true,
        }
    },
    methods: {
        playMusic() {

        },
        stopMusic() {

        }
    }
}
</script>
