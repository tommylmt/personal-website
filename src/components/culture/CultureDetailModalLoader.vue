<template>
    <div class="culture-loader rounded-2xl p-10 h-[450px]"></div>
    <div class="culture-loader rounded-lg h-16 w-2/3 my-2"></div>

    <div
        v-for="line in lines"
        class="culture-loader rounded-lg h-7 mt-1"
        :key="line"
        :class="line === overviewLines - 1 ? 'w-1/2' : 'w-full'"
    ></div>

    <div class="culture-loader rounded-lg h-12 w-56 mt-8 mb-4"></div>

    <div class="flex gap-3">
        <div v-for="actor in cast" :key="actor" class="culture-loader h-60 basis-1/5 rounded-3xl"></div>
    </div>

    <div class="culture-loader rounded-lg h-12 w-1/3 mt-8 mb-4"></div>

    <div class="flex gap-1">
        <div v-for="director in directors" :key="director" class="culture-loader h-60 basis-1/5 rounded-3xl"></div>
    </div>
</template>

<script lang="ts">
export default {
    data: () => ({
        overviewLines: 3,
        castNumber: 5,
        directorsNumber: 1
    }),
    computed: {
        lines() {
            return [...Array(this.overviewLines).keys()]
        },
        cast() {
            return [...Array(this.castNumber).keys()]
        },
        directors() {
            return [...Array(this.directorsNumber).keys()]
        }
    }
}
</script>
