import { readonly, ref } from 'vue'

export function useMouse() {
    const isMouseEntered = ref(false)

    function setMouseEntered(value: boolean) {
        isMouseEntered.value = value
    }

    return {
        isMouseEntered: readonly(isMouseEntered),
        setMouseEntered
    }
}
