<template>
    <div id="container">
        <div>
            <h1>{{ $t('stack.title') }}</h1>
            <p>{{ $t('stack.subtitle') }}</p>
        </div>
        <div id="stackWrapper">
            <div class="stack-flex">
                <div v-for="icon in icons" class="a-skill" :key="icon.title">
                    <span v-html="icon.svg" class="skill-icon"></span>
                    <p>{{ icon.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as sicons from 'simple-icons'
import axios from 'axios'

export default {
    data() {
        return {
            icons: []
        }
    },
    mounted() {
        this.retrieveSkills()
    },
    methods: {
        async retrieveSkills() {
            const res = await axios.get(`${this.$baseUrl}/api/stack/`)

            this.prepareIcons(res.data)
        },
        prepareIcons(data) {
            data.forEach((el) => {
                this.icons.push(sicons[el.code])
            })
        }
    }
}
</script>
