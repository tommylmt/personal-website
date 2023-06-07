<template>
    
</template>

<script>
export default {
    data() {
        return {
            movies: []
        };
    },
    mounted() {
        console.log(import.meta.env);
        // this.fetchMovies();
    },
    methods: {
        // async fetchMovies() {
        //     const movies = fetch()
        // }
    }
}
</script>

<style scoped lang="scss">
main {
    width: 0;
    padding: 0;
}
</style>