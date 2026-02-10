<script lang="ts" setup>
import '@phosphor-icons/web/regular'
import ContainerLayout from '@/components/layout/ContainerLayout.vue'
import { useRoute } from 'vue-router'
import { computed, inject, onMounted, ref } from 'vue'
import type { TCompleteBlogPost } from '@/types/blog.ts'
import axios from 'axios'
import markdownit from 'markdown-it'
import DynamicIsland from '@/components/ui/DynamicIsland.vue'

const { params } = useRoute()
const article = ref<TCompleteBlogPost | null>(null)
const hasError = ref<boolean>(false)
const baseUrl = inject('baseUrl')

const html = computed<string>(() => {
    const md = markdownit()

    return md.render(article.value?.content ?? '')
})

onMounted(async () => {
    try {
        article.value = await axios.get<TCompleteBlogPost>(`${baseUrl}/api/blog/${params.slug}`).then((res) => res.data)
    } catch (_) {
        hasError.value = true
    }
})
</script>

<template>
    <ContainerLayout>
        <template v-if="article">
            <div v-if="article.banner"></div>
            <DynamicIsland title="Table of content" class="bg-black text-white">
                <p>Hello</p>
                <p>TODO Table of content</p>
                <p>Right here</p>
            </DynamicIsland>

            <div class="relative flex gap-10 items-start">
                <div :class="['sticky top-10 rounded-3xl bg-neutral-100 shadow-lg shadow-neutral-100', 'p-7 basis-1/4 shrink-0']">
                    <div class="cursor-pointer w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <i class="ph ph-arrow-left text-white text-3xl"></i>
                    </div>

                    <div class="mt-4">
                        <h5 class="text-sm text-neutral-500">Estimated time to read</h5>
                        <p class="text-neutral-900 font-bold font-sans">{{ article.reading_time }} min</p>
                    </div>

                    <div class="mt-4">
                        <h5 class="text-sm text-neutral-500">Language</h5>
                        <p class="text-neutral-900 font-bold font-sans">{{ article.language_icon }} {{ article.language }}</p>
                    </div>

                    <div class="mt-4">
                        <h5 class="text-sm text-neutral-500">Published At</h5>
                        <i18n-d
                            tag="p"
                            class="font-bold font-sans text-neutral-900"
                            :value="new Date(article.published_at)"
                            format="long"
                        ></i18n-d>
                    </div>
                    <div class="flex items-center mt-4 gap-4">
                        <img :src="baseUrl + article.author.avatar" :alt="article.author.name" class="w-15 rounded-full" />
                        <div>
                            <h5 class="text-sm text-neutral-500">Published by</h5>
                            <p class="font-bold font-sans text-neutral-900">{{ article.author.name }}</p>
                        </div>
                    </div>
                </div>
                <div class="grow">
                    <div id="markdown" class="my-20" v-html="html"></div>
                </div>
            </div>
        </template>
    </ContainerLayout>
</template>

<style>
@import '@/assets/css/blog/index.css';
</style>
