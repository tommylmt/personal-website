<template>
    <span class="relative">
        <button
            @mouseenter="isButtonHovered = true"
            @mouseleave="isButtonHovered = false"
            role="button"
            @click="displayDropdown = !displayDropdown"
            :aria-label="$t('stack.filter')"
            :class="[
                'transition-all h-12 flex justify-center items-center rounded-3xl cursor-pointer',
                'group dark:bg-slate-900',
                isButtonHovered || displayDropdown ? 'w-32 shadow-lg' : 'w-12'
            ]"
        >
            <i
                :class="[currentFilter ? 'ph-fill text-slate-800' : 'ph-light text-slate-400', 'ph-funnel']"
                class="transition-all text-3xl group-hover:text-slate-500"
            ></i>
            <span
                class="transition-all text-slate-400 ms-3 font-sans group-hover:text-slate-500"
                v-show="isButtonHovered || displayDropdown"
            >
                {{ $t('stack.filter') }}
            </span>
        </button>
        <ul
            class="dropdown absolute right-0 z-50 p-2 shadow-slate-200 transition-all shadow-lg rounded-lg bg-white w-52"
            :class="[displayDropdown ? 'top-[60px] opacity-100 z-40' : 'top-[80px] opacity-0 -z-20']"
        >
            <li
                v-for="type in types"
                :key="type"
                @click="filter(type)"
                class="px-4 py-2 text-sm rounded-md cursor-pointer transition-all"
                :class="[currentFilter === type ? 'bg-slate-900 text-white' : 'bg-white text-slate-800 hover:bg-slate-50']"
            >
                {{ $t(`stack.types.${slugify(type)}`) }}
            </li>
        </ul>
    </span>
</template>

<script>
import '@phosphor-icons/web/fill'

export default {
    props: {
        types: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            isButtonHovered: false,
            displayDropdown: false,
            currentFilter: null
        }
    },
    emits: ['clickFilter'],
    methods: {
        filter(type) {
            this.currentFilter = this.currentFilter === type ? null : type

            this.$emit('clickFilter', this.currentFilter)
            this.displayDropdown = false
        },
        slugify(name) {
            return name.toLowerCase()
        }
    }
}
</script>
