<template>
    <AboutBlock :title="$t('about.pro.title')">
        <Card v-for="element in xp" :img="element.image">
            <p class="font-sans text-slate-800">{{ element.name }}</p>
            <p class="font-sans text-slate-800 text-sm italic">{{ $t(element.work) }}</p>

            <p class="font-sans text-sm text-slate-500">{{ element.location }}</p>

            <div class="flex mt-2 justify-center items-center gap-3 w-full">
                <div class="text-xl font-light text-slate-400">{{ element.years.start }}</div>
                <div class="w-10 h-1 bg-slate-300 rounded-xl"></div>
                <div class="text-xl font-light text-slate-400">{{ element.years.end }}</div>
            </div>
        </Card>
    </AboutBlock>
</template>

<script>
import AboutBlock from "@/components/layout/AboutBlock.vue";
import Card from "@/components/card/Card.vue";

export default {
    components: {Card, AboutBlock},
    data() {
        return {
            xp: [{
                name: 'Mipih',
                location: 'Toulouse, France',
                image: '/img/pro/mipih.webp',
                years: { start: 2019, end: 2019 },
                work: 'about.pro.status.intern'
            }]
        }
    }
}
</script>
