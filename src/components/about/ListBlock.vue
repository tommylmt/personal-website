<template>
    <div class="a-list">
        <div class="left">
            <p>{{ listTitle }}</p>
        </div>
        <div class="right">
            <slot>
                <ul>
                    <li v-for="element in data" :key="element.name ?? element.company">
                        <div v-if="!element.timeline">
                            <span class="left-element">
                                <p>{{ element.name ?? element.company }}</p>
                                <p class="small-description">{{ element.location }}</p>
                            </span>
                            <span class="right-element">
                                <p class="small-description">{{ element.year }}</p>
                            </span>
                        </div>
                        <div v-else>
                            <p class="general-title">{{ element.company }}</p>
                            <ul>
                                <li v-for="subElement in element.timeline" :key="subElement.job">
                                    <p>{{ subElement.job }}</p>
                                    <p class="small-description">{{ subElement.year }}</p>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['listTitle', 'data']
}
</script>
