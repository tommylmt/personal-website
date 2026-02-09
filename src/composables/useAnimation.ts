import { ref } from 'vue'

export function useAnimation(from: string, to: string, delay: number) {
    const classes = ref<string>(from)

    setTimeout(() => {
        classes.value = to
    }, delay)

    return classes
}
