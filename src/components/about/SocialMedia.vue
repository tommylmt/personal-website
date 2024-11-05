<template>
    <AboutBlock :title="$t('about.social.internet')" custom-class="justify-center gap-40 my-20">
        <div v-for="social in socials">
            <a :href="social.link" class="text-6xl text-slate-300 transition-all hover:text-slate-400" target="_blank">
                <i :class="[social.icon, 'cursor-pointer']"></i>
            </a>
        </div>
    </AboutBlock>
</template>

<script>
import AboutBlock from "@/components/layout/AboutBlock.vue";
import Card from "@/components/card/Card.vue";

export default {
    components: {Card, AboutBlock},
    data() {
        return {
            socials: [{
                link: 'https://x.com/TommyFromCC',
                icon: 'ph-light ph-x-logo',
            }, {
                link: 'https://gitlab.com/Tommy31',
                icon: 'ph-light ph-gitlab-logo-simple'
            }, {
                link: 'https://github.com/tommylmt',
                icon: 'ph-light ph-github-logo',
            }, {
                link: 'https://stackoverflow.com/users/5301593/thomas-lamothe',
                icon: 'ph-light ph-stack-overflow-logo'
            }, {
                link: 'https://www.linkedin.com/in/thomas-lamothe8/',
                icon: 'ph-light ph-linkedin-logo'
            }]
        }
    }
}
</script>
