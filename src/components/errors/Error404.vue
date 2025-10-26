<template>
    <div class="h-screen w-screen flex justify-center items-center">
        <div class="text-center">
            <h1 class="text-9xl text-black font-black uppercase">{{ $t('error.error') }} 404</h1>
            <p class="text-slate-400">Mmhhh.... It seems the page you are looking for does not exists.</p>

            <div class="flex justify-center mt-10">
                <router-link to="/" ref="link">
                    <ShimmerButton class="shadow-2xl scale-100 hover:scale-105" shimmer-size="2px">
                        <span
                            class="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10"
                        >
                            Take me home
                        </span>
                    </ShimmerButton>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import ShimmerButton from '@/components/ui/ShimmerButton.vue'
</script>
