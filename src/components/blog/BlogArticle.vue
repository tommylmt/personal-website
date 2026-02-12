<script lang="ts" setup>
import '@phosphor-icons/web/regular'
import ContainerLayout from '@/components/layout/ContainerLayout.vue'
import { useRoute } from 'vue-router'
import { computed, inject, onMounted, ref } from 'vue'
import type { TCompleteBlogPost } from '@/types/blog.ts'
import axios from 'axios'
import markdownit from 'markdown-it'
import DynamicIsland from '@/components/ui/DynamicIsland.vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.min.css'

const { params } = useRoute()
const article = ref<TCompleteBlogPost | null>(null)
const hasError = ref<boolean>(false)
const baseUrl = inject('baseUrl')

const html = computed<string>(() => {
    const md = markdownit({
        html: true,
        highlight: (str, lang) => {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(str, { language: lang }).value
                } catch (_) {
                    hasError.value = true
                }
            }

            return ''
        }
    })

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
            <div
                v-if="article.banner"
                class="rounded-4xl h-[500px] mb-10 relative flex items-end"
                :style="{
                    background: `url(${baseUrl + article.banner}`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }"
            >
                <div class="absolute bg-linear-to-t from-neutral-900/80 to-transparent h-full w-full rounded-4xl"></div>
                <h1 class="text-white font-bold text-6xl relative p-10 z-20">{{ article.title }}</h1>
            </div>
            <DynamicIsland title="Table of contents" class="bg-black text-white">
                <p
                    v-for="(section, key) in article.table_of_contents"
                    :key="key"
                    :style="{
                        marginLeft: section.level * 7 + 'px'
                    }"
                >
                    {{ section.text }}
                </p>
            </DynamicIsland>

            <div class="relative flex gap-10 items-start">
                <div :class="['sticky top-10 rounded-3xl bg-neutral-100 shadow-lg shadow-neutral-100', 'p-7 basis-1/4 shrink-0']">
                    <RouterLink to="/blog">
                        <div class="cursor-pointer w-12 h-12 bg-black rounded-full flex items-center justify-center">
                            <i class="ph ph-arrow-left text-white text-3xl"></i>
                        </div>
                    </RouterLink>

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
                    <div id="markdown" class="mb-20" v-html="html"></div>
                </div>
            </div>
        </template>
    </ContainerLayout>
</template>

<style>
@import '@/assets/css/blog/index.css';
</style>
