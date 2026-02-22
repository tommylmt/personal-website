<script setup lang="ts">
import '@phosphor-icons/web/regular'
import '@phosphor-icons/web/fill'
import type { TBlogPost } from '@/types/blog.ts'
import { inject } from 'vue'
import { TestIds } from '@/utils/testIds.ts'

const baseUrl = inject('baseUrl')

defineProps<{
    post: TBlogPost
}>()
</script>

<template>
    <div class="col-span-1">
        <RouterLink :to="{ name: 'blog_post', params: { slug: post.slug } }" :data-test="TestIds.Blog.Post.link">
            <div class="h-100 md:h-80 lg:h-100 2xl:h-120 rounded-4xl relative group cursor-pointer overflow-hidden">
                <div
                    class="h-full w-full absolute scale-110 transition-all group-hover:scale-100"
                    :data-test="TestIds.Blog.Post.cardImage"
                    :style="{
                        background: `url(${baseUrl + '/cdn' + post.card_image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }"
                ></div>
                <div class="relative w-full h-full rounded-4xl z-20 flex items-end">
                    <div
                        class="transition-all absolute bg-white rounded-full flex justify-center items-center h-12 w-12 right-5 top-5 group-hover:bg-black group-hover:right-3 group-hover:top-3"
                    >
                        <i class="transition-all ph ph-arrow-up-right text-black text-3xl group-hover:text-white"></i>
                    </div>

                    <div class="w-full transition-all p-5">
                        <span class="text-xs bg-black text-white rounded-2xl py-1 px-3" :data-test="TestIds.Blog.Post.metadata">
                            {{ post.language_icon }}
                            <i class="ph-fill ph-dot"></i>
                            <i18n-d :value="new Date(post.published_at)" format="short"></i18n-d>
                        </span>
                        <div class="mt-2 bg-white px-3 py-2 rounded-3xl">
                            <p class="font-sans text-neutral-900 text-3xl" :data-test="TestIds.Blog.Post.title">
                                {{ post.title }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </RouterLink>
    </div>
</template>
