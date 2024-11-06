<template>
    <div class="w-10/12 my-10 mx-auto relative">
        <h1 class="font-sans font-extrabold text-5xl text-slate-800">
            {{ $t('stack.title') }}
        </h1>
        <p class="font-sans text-slate-500">{{ $t('stack.subtitle') }}</p>

        <button
            :class="[
                'absolute transition-all top-3 right-0 h-12 flex justify-center items-center rounded-3xl cursor-pointer',
                'hover:shadow-lg',
                !displayShuffleTitle ? 'w-12' : 'w-36'
            ]"
            @mouseover="displayShuffleTitle = true"
            @mouseleave="displayShuffleTitle = false"
            @click="shuffle"
        >
            <i class="ph-light ph-shuffle text-slate-400 text-3xl"></i>
            <span v-show="displayShuffleTitle" class="text-slate-400 ms-3 font-sans">
                {{ $t('stack.shuffle') }}
            </span>
        </button>

        <div class="mt-20 mb-40" v-if="icons.length > 0">
            <draggable
                v-model="icons"
                item-key="title"
                ghost-class="ghost"
                :animation="200"
                group="stack"
                :disabled="false"
                :component-data="{
                    class: 'flex flex-wrap gap-9',
                }"
            >
                <template #item="{ element }">
                    <StackElement :icon="element" />
                </template>
            </draggable>
        </div>
    </div>
</template>

<script>
import * as sicons from 'simple-icons'
import axios from 'axios'
import StackElement from '@/components/stack/StackElement.vue'
import draggable from 'vuedraggable'

export default {
    components: {
        StackElement,
        draggable
    },
    data() {
        return {
            icons: [],
            displayShuffleTitle: false,
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
        },
        shuffle() {
            let currentIndex = this.icons.length;

            while (currentIndex != 0) {
                let randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                [this.icons[currentIndex], this.icons[randomIndex]] = [this.icons[randomIndex], this.icons[currentIndex]];
            }
        }
    }
}
</script>