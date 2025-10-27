<template>
    <div class="h-screen w-screen relative overflow-hidden">
        <ImageTrailCursor v-if="images.length > 0" :images="images" />
        <div class="absolute flex w-full top-0 h-full bottom-0 left-0 right-0 justify-center items-center">
            <div class="text-center">
                <h1 class="text-9xl text-black font-black uppercase">{{ $t('error.nope') }}</h1>
                <span class="font-mono bg-slate-100 rounded-md border border-slate-200 px-2">{{ $t('error.error') }} 404</span>
                <p class="text-slate-400 intersect-once intersect:motion-translate-x-out-25 intersect:motion-opacity-in-0">
                    Mmhhh.... It seems the page you are looking for does not exists. 🧐
                </p>

                <div class="flex justify-center mt-10">
                    <router-link to="/" ref="link">
                        <ShimmerButton class="shadow-2xl scale-100 hover:scale-105" shimmer-size="2px">
                            <span
                                class="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10 text-sm"
                            >
                                Take me home
                            </span>
                        </ShimmerButton>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ShimmerButton from '@/components/ui/ShimmerButton.vue'
import axios from 'axios'
import ImageTrailCursor from '@/components/ui/ImageTrailCursor/ImageTrailCursor.vue'

export default {
    components: {
        ImageTrailCursor,
        ShimmerButton
    },
    data() {
        return {
            images: []
        }
    },
    async mounted() {
        this.images = Object.values(await axios.get(`${this.$baseUrl}/api/camera-roll`).then((res) => res.data)).map(
            (i) => this.$baseUrl + i
        )
    }
}
</script>
