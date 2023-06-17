<template>
    <div class="a-list">
        <div class="left">
            <p>{{ listTitle }}</p>
        </div>
        <div class="right">
            
            <ul>
                <li v-for="element in data">
                    <div v-if="!element.timeline">
                        <span class="left-element">
                            <p>{{ element.name ?? element.company }}</p>
                            <h6>{{ element.location }}</h6>
                        </span>
                        <span class="right-element">
                            <p>{{ element.year }}</p>
                        </span>
                    </div>
                    <div v-else>
                        {{ element.company }}
                        <ul>
                            <li v-for="subElement in element.timeline">
                                {{ subElement.job }}
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['listTitle', 'data']
}
</script>