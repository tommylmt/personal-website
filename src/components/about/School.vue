<template>
    <AboutBlock :title="'🎓 ' + $t('about.school.title')">
        <Card v-for="(school, index) in timeline" :img="school.image" :delay="100 * index" :key="index">
            <div class="flex my-2 justify-end items-center">
                <div class="flex items-center gap-2">
                    <div class="text-xl font-light text-neutral-900 dark:text-neutral-600">
                        {{ school.years.start }}
                    </div>
                    <div class="text-xl font-light text-neutral-400 dark:text-neutral-600">
                        <i class="ph ph-arrow-right"></i>
                    </div>
                    <div class="text-xl font-light text-neutral-900 dark:text-neutral-600">
                        {{ school.years.end }}
                    </div>
                </div>
            </div>

            <p class="font-sans font-semibold text-neutral-800 dark:text-neutral-200">
                {{ $t(school.name) }}
            </p>
            <p class="font-sans text-sm text-neutral-400">
                <span class="me-1">📍</span>
                {{ school.location }}
            </p>
            <p class="font-sans text-neutral-400 text-sm">
                <span class="me-1">🎓</span>
                {{ $t(school.grade) }}
            </p>
        </Card>
    </AboutBlock>
</template>

<script lang="ts">
import AboutBlock from '@/components/layout/AboutBlock.vue'
import Card from '@/components/card/Card.vue'

export default {
    components: { Card, AboutBlock },
    data() {
        return {
            timeline: [
                {
                    name: 'about.school.level.highschool',
                    image: '/img/school/lycee_victor_duruy.webp',
                    location: 'Bagnères de Bigorre, France',
                    years: { start: 2014, end: 2017 },
                    grade: 'about.school.graduations.bac'
                },
                {
                    name: 'about.school.level.dut',
                    image: '/img/school/iut_paul_sabatier.webp',
                    location: 'Toulouse, France',
                    years: { start: 2017, end: 2019 },
                    grade: 'about.school.graduations.dut'
                },
                {
                    name: 'about.school.level.licence',
                    image: '/img/school/univ_capitole.webp',
                    location: 'Toulouse, France',
                    years: { start: 2019, end: 2020 },
                    grade: 'about.school.graduations.prolicence'
                },
                {
                    name: 'about.school.level.miage',
                    image: '/img/school/univ_paul_sabatier.webp',
                    location: 'Toulouse, France',
                    years: { start: 2020, end: 2021 },
                    grade: 'about.school.graduations.duallicence'
                }
            ]
        }
    }
}
</script>
