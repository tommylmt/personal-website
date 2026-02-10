<template>
    <AboutBlock :title="'💻 ' + $t('about.pro.title')">
        <Card v-for="(element, index) in xp" :key="index" :img="element.image" :delay="100 * index">
            <p class="font-sans text-neutral-800 dark:text-neutral-200">
                {{ element.name }}
            </p>
            <p class="font-sans text-neutral-800 text-sm italic dark:text-neutral-200">
                {{ $t(element.work) }}
            </p>

            <p class="font-sans text-sm text-neutral-500">
                <span class="me-1">📍</span>
                {{ $t(element.location) }}
            </p>

            <div class="flex mt-2 justify-center items-center gap-3 w-full">
                <div class="text-xl font-light text-neutral-400 dark:text-neutral-600">
                    {{ element.years.start }}
                </div>
                <div class="w-10 h-1 bg-neutral-300 dark:bg-neutral-800 rounded-xl"></div>
                <div class="text-xl font-light text-neutral-400 dark:text-neutral-600">
                    {{ typeof element.years.end === 'string' ? $t(element.years.end) : element.years.end }}
                </div>
            </div>
        </Card>
    </AboutBlock>
</template>

<script lang="ts">
import AboutBlock from '@/components/layout/AboutBlock.vue'
import Card from '@/components/card/Card.vue'
import type { TProSituationData } from '@/types/about.ts'

export default {
    components: { Card, AboutBlock },
    data(): TProSituationData {
        return {
            xp: [
                {
                    name: 'Mipih',
                    location: 'about.pro.location.toulouse',
                    image: '/img/pro/mipih.webp',
                    years: { start: 2019, end: 2019 },
                    work: 'about.pro.status.intern'
                },
                {
                    name: 'Freelance',
                    location: 'about.pro.location.office',
                    image: '/img/pro/freelance.webp',
                    years: { start: 2017, end: 2022 },
                    work: 'about.pro.status.freelance'
                },
                {
                    name: 'Iwit Systems',
                    location: 'about.pro.location.toulouse',
                    image: '/img/pro/iwit.webp',
                    years: { start: 2020, end: 2026 },
                    work: 'about.pro.status.lead'
                },
                {
                    name: 'Sinch Mailjet',
                    location: 'about.pro.location.remote',
                    image: '/img/pro/home.webp',
                    years: { start: 2026, end: 'about.pro.duration.now' },
                    work: 'about.pro.status.developer'
                }
            ]
        }
    }
}
</script>
