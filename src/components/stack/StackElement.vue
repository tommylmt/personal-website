<template>
    <div class="item" :data-type="icon.type">
        <div class="item-content">
            <CardContainer :ratio="14">
                <CardBody
                    :class="[
                        'group text-center transition-all rounded-xl md:p-2',
                        'bg-white dark:bg-black hover:shadow-lg hover:scale-110',
                        isGrabbing ? 'cursor-grabbing' : 'cursor-grab'
                    ]"
                    @mousedown="isGrabbing = true"
                    @mouseup="isGrabbing = false"
                >
                    <CardItem as="div" :translate-z="60">
                        <div
                            v-html="icon.svg"
                            class="transition-all mx-auto w-7/12 fill-slate-300 group-hover:fill-slate-400 dark:fill-slate-600"
                        ></div>
                    </CardItem>
                    <CardItem as="p" :translate-z="40" class="font-sans text-xs text-slate-400 mt-5 dark:text-slate-600">
                        {{ icon.title }}
                    </CardItem>
                </CardBody>
            </CardContainer>
        </div>
    </div>
</template>

<script>
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
    },
    data() {
        return {
            isGrabbing: false
        }
    }
}
</script>
