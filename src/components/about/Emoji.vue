<template>
    <div @mouseover="randomEmoji()" @mouseleave="stopAnimation" class="cursor-pointer" :class="['transition-all', emojiClass]">
        {{ emoji }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            emojis: ['✊', '🤘', '🤙', '✌', '🖕'],
            emoji: '🤙',
            emojiClass: '',
            timeouts: []
        }
    },
    watch: {
        emoji() {
            this.emojiClass = 'emoji-change'

            setTimeout(() => {
                this.emojiClass = 'emoji-ready'
            }, 250)
        }
    },
    methods: {
        randomEmoji() {
            let globalIndex = 0

            this.emojis.forEach((e, index) => {
                this.timeouts.push(
                    setTimeout(() => {
                        this.emoji = e
                    }, (index + 1) * 500)
                )

                globalIndex = index
            })

            this.timeouts.push(
                setTimeout(() => {
                    this.randomEmoji()
                }, (globalIndex + 1) * 500)
            )
        },
        stopAnimation() {
            this.timeouts.forEach((t) => clearTimeout(t))
            this.emoji = '🤙'
        }
    }
}
</script>
