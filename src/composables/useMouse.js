import { ref, readonly } from 'vue'

export function useMouse() {
    const isMouseEntered = ref(false)

    function setMouseEntered(value) {
        isMouseEntered.value = value
    }

    return {
        isMouseEntered: readonly(isMouseEntered),
        setMouseEntered
    }
}
