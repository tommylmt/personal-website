<template>
    <AboutBlock
        :title="'📌 ' + $t('about.social.internet')"
        custom-class="flex p-3 2xl:p-0 justify-center flex-wrap gap-20 lg:gap-40 my-20"
    >
        <div v-for="(social, index) in socials" :key="index">
            <a
                :href="social.link"
                class="text-6xl text-slate-300 transition-all hover:text-slate-400"
                target="_blank"
                :aria-label="social.label"
                data-aos="fade-in"
                :data-aos-delay="100 * index"
            >
                <i :class="[social.icon, 'cursor-pointer']"></i>
            </a>
        </div>
    </AboutBlock>
</template>

<script lang="ts">
import AboutBlock from '@/components/layout/AboutBlock.vue'

export default {
    components: { AboutBlock },
    data() {
        return {
            socials: [
                {
                    link: 'https://www.instagram.com/tommy.lmt',
                    icon: 'ph-light ph-instagram-logo',
                    label: 'Instagram'
                },
                {
                    link: 'https://www.threads.net/@tommy.lmt',
                    icon: 'ph-light ph-threads-logo',
                    label: 'Threads'
                },
                {
                    link: 'https://gitlab.com/Tommy31',
                    icon: 'ph-light ph-gitlab-logo-simple',
                    label: 'Gitlab'
                },
                {
                    link: 'https://github.com/tommylmt',
                    icon: 'ph-light ph-github-logo',
                    label: 'Github'
                },
                {
                    link: 'https://stackoverflow.com/users/5301593/thomas-lamothe',
                    icon: 'ph-light ph-stack-overflow-logo',
                    label: 'Stack Overflow'
                },
                {
                    link: 'https://www.linkedin.com/in/thomas-lamothe8/',
                    icon: 'ph-light ph-linkedin-logo',
                    label: 'Linkedin'
                }
            ]
        }
    }
}
</script>
