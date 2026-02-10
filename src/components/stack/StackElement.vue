<template>
    <div class="item" :data-type="icon.type">
        <div class="item-content">
            <CardContainer :ratio="14">
                <CardBody
                    :class="[
                        'group text-center transition-all rounded-xl md:p-2',
                        'bg-white dark:bg-black hover:shadow-lg hover:scale-110',
                        'active:cursor-grabbing cursor-grab'
                    ]"
                >
                    <CardItem as="div" :translate-z="60">
                        <div
                            v-html="icon.svg"
                            class="transition-all mx-auto w-7/12 fill-neutral-300 group-hover:fill-neutral-400 dark:fill-neutral-600"
                        ></div>
                    </CardItem>
                    <CardItem as="p" :translate-z="40" class="font-sans text-xs text-neutral-400 mt-5 dark:text-neutral-600">
                        {{ icon.title }}
                    </CardItem>
                </CardBody>
            </CardContainer>
        </div>
    </div>
</template>

<script lang="ts">
import CardContainer from '@/components/ui/Card/CardContainer.vue'
import CardBody from '@/components/ui/Card/CardBody.vue'
import CardItem from '@/components/ui/Card/CardItem.vue'

export default {
    components: { CardItem, CardBody, CardContainer },
    props: {
        icon: {
            type: Object,
            required: true
        },
        delay: {
            type: Number,
            default: 0
        }
    }
}
</script>
