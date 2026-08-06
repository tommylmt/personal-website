<template>
    <AboutBlock :title="'💻 ' + $t('about.pro.title')">
        <Card v-for="(element, index) in xp" :key="index" :img="element.image" :delay="100 * index">
            <div class="flex my-2 justify-between items-center">
                <img :src="element.logo" :alt="element.name" class="h-10" />

                <div class="flex items-center gap-2">
                    <div class="text-xl font-light text-neutral-900 dark:text-neutral-600">
                        {{ element.years.start }}
                    </div>
                    <div class="text-xl font-light text-neutral-400 dark:text-neutral-600">
                        <i class="ph ph-arrow-right"></i>
                    </div>
                    <div class="text-xl font-light text-neutral-900 dark:text-neutral-600">
                        {{ typeof element.years.end === 'string' ? $t(element.years.end) : element.years.end }}
                    </div>
                </div>
            </div>

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
        </Card>
    </AboutBlock>
</template>

<script lang="ts">
import '@phosphor-icons/web/regular'
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
                    logo: '/img/pro/mipih_logo.webp',
                    location: 'about.pro.location.toulouse',
                    image: '/img/pro/mipih.webp',
                    years: { start: 2019, end: 2019 },
                    work: 'about.pro.status.intern'
                },
                {
                    name: 'Freelance',
                    logo: '/img/pro/freelance_logo.webp',
                    location: 'about.pro.location.office',
                    image: '/img/pro/freelance.webp',
                    years: { start: 2017, end: 2022 },
                    work: 'about.pro.status.freelance'
                },
                {
                    name: 'Iwit Systems',
                    logo: '/img/pro/iwit_systems_logo.webp',
                    location: 'about.pro.location.toulouse',
                    image: '/img/pro/iwit.webp',
                    years: { start: 2020, end: 2026 },
                    work: 'about.pro.status.lead'
                },
                {
                    name: 'Sinch Mailjet',
                    logo: '/img/pro/mailjet_by_sinch_logo.svg',
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
