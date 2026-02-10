<template>
    <ContainerLayout>
        <h1 class="font-sans font-extrabold text-4xl md:text-5xl text-neutral-800 dark:text-neutral-300" data-aos="fade-up">
            {{ $t('blog.title') }}
        </h1>
        <p class="font-sans text-neutral-500 dark:text-neutral-400" data-aos="fade-up" data-aos-delay="100">
            {{ $t('blog.subtitle') }}
        </p>

        <ErrorBanner title="blog.error" v-if="hasErrors" />
        <div
            class="my-3 md:my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 xl:gap-6 md:p-0"
            data-aos="fade-up"
            data-aos-delay="200"
            v-else
        >
            <template v-if="isLoading">
                <div v-for="e in [...Array(8).keys()]" class="h-[400px] rounded-4xl col-span-1 bg-neutral-200 animate-pulse" :key="e"></div>
            </template>
            <BlogPost v-else v-for="article in articles" :key="article.slug" :post="article" />
        </div>
    </ContainerLayout>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, ref } from 'vue'
import type { TBlogPost } from '@/types/blog.ts'
import axios from 'axios'
import ErrorBanner from '@/components/errors/ErrorBanner.vue'
import BlogPost from '@/components/blog/BlogPost.vue'
import ContainerLayout from '@/components/layout/ContainerLayout.vue'

const articles = ref<TBlogPost[] | null>(null)
const hasErrors = ref<boolean>(false)

const isLoading = computed<boolean>(() => articles.value === null)
const baseUrl = inject('baseUrl')

onMounted(async () => {
    try {
        const { data } = await axios.get<TBlogPost[]>(`${baseUrl}/api/blog/list`)
        articles.value = data
    } catch (e) {
        hasErrors.value = true
    }
})
</script>
