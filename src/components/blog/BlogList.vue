<template>
    <ContainerLayout>
        <h1 class="font-sans font-extrabold text-4xl md:text-5xl text-neutral-800 dark:text-neutral-300" data-aos="fade-up">
            {{ $t('blog.title') }}
        </h1>
        <p class="font-sans text-neutral-500 dark:text-neutral-400" data-aos="fade-up" data-aos-delay="100">
            {{ $t('blog.subtitle') }}
        </p>

        <ErrorBanner title="blog.error" v-if="hasErrors" data-aos="fade-up" data-aos-delay="200" />
        <template v-else>
            <BlogListColumnContainer v-if="isLoading">
                <div
                    v-for="e in [...Array(8).keys()]"
                    class="h-100 md:h-80 lg:h-100 2xl:h-120 rounded-4xl col-span-1 culture-loader"
                    :key="e"
                    :data-test="TestIds.Blog.List.aLoaderSkeleton"
                ></div>
            </BlogListColumnContainer>
            <BlogListColumnContainer v-else-if="articles && articles.length > 0">
                <BlogPost v-for="article in articles" :key="article.slug" :post="article" :data-test="TestIds.Blog.List.aBlogPost" />
            </BlogListColumnContainer>
            <NoArticleFound v-else />
        </template>
    </ContainerLayout>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, ref } from 'vue'
import type { TBlogPost } from '@/types/blog.ts'
import axios from 'axios'
import ErrorBanner from '@/components/errors/ErrorBanner.vue'
import BlogPost from '@/components/blog/BlogPost.vue'
import ContainerLayout from '@/components/layout/ContainerLayout.vue'
import { TestIds } from '@/utils/testIds.ts'
import NoArticleFound from '@/components/blog/NoArticleFound.vue'
import BlogListColumnContainer from '@/components/blog/BlogListColumnContainer.vue'

const articles = ref<TBlogPost[] | null>(null)
const hasErrors = ref<boolean>(false)

const isLoading = computed<boolean>(() => articles.value === null)
const baseUrl = inject('baseUrl')

onMounted(async () => {
    try {
        const { data } = await axios.get<TBlogPost[]>(`${baseUrl}/api/blog/list`)
        articles.value = data
    } catch (_) {
        hasErrors.value = true
    }
})
</script>
