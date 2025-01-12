<template>
    <div class="w-11/12 md:w-10/12 my-10 mx-auto relative">
        <h1 class="font-sans font-extrabold text-4xl md:text-5xl text-slate-800 dark:text-slate-300">
            {{ $t('stack.title') }}
        </h1>
        <p class="font-sans text-slate-500 dark:text-slate-400">{{ $t('stack.subtitle') }}</p>

        <button
            :class="[
                'md:absolute transition-all top-3 right-0 h-12 flex justify-center items-center rounded-3xl cursor-pointer',
                'group hover:shadow-lg dark:bg-slate-900',
                !displayShuffleTitle ? 'w-12' : 'w-36'
            ]"
            @mouseover="displayShuffleTitle = true"
            @mouseleave="displayShuffleTitle = false"
            @click="shuffle"
            role="button"
            :aria-label="$t('stack.shuffle')"
        >
            <i class="transition-all ph-light ph-shuffle text-slate-400 text-3xl group-hover:text-slate-500"></i>
            <span
                v-show="displayShuffleTitle"
                class="transition-all text-slate-400 ms-3 font-sans group-hover:text-slate-500"
            >
                {{ $t('stack.shuffle') }}
            </span>
        </button>

        <div class="mt-5 lg:mt-5 mb-20 md:mb-40" v-if="icons.length > 0">
            <div id="muuri">
                <StackElement v-for="icon in icons" :icon="icon" :key="icon.title" />
            </div>
        </div>
    </div>
</template>

<script>
import * as sicons from 'simple-icons'
import axios from 'axios'
import StackElement from '@/components/stack/StackElement.vue'
import 'web-animations-js';
import Muuri from "muuri";

export default {
    components: {
        StackElement
    },
    data() {
        return {
            icons: [],
            displayShuffleTitle: false,
            muuri: null,
        }
    },
    mounted() {
        this.retrieveSkills()
    },
    methods: {
        async retrieveSkills() {
            const res = await axios.get(`${this.$baseUrl}/api/stack/`)

            this.prepareIcons(res.data).then(() => {
                this.muuri = new Muuri('#muuri', {
                    layout: {
                        fillGaps: true,
                        rounding: true,
                    },
                    layoutOnResize: true,
                    dragEnabled: true,
                    sortData: {
                        id: (item, element) => {
                            return parseFloat(element.children[0].textContent);
                        }
                    }
                });
            })
        },
        prepareIcons(data) {
            return new Promise((res) => {
                data.sort((a, b) => a.title.localeCompare(b.title)).forEach((el) => {
                    this.icons.push(sicons[el.code])
                })

                res();
            });
        },
        shuffle() {
            this.muuri.sort(this.randomSortItems());
            this.muuri.refreshItems().layout();
        },
        randomSortItems() {
            let elements = this.muuri.getItems();
            let currentIndex = elements.length;

            while (currentIndex != 0) {
                let randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [elements[currentIndex], elements[randomIndex]] = [elements[randomIndex], elements[currentIndex]];
            }

            return elements;
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/stack/stack';
</style>
