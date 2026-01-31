import { readonly, ref } from 'vue'
import type { TMouseHook } from '@/types/ui.ts'

export function useMouse(): TMouseHook {
    const isMouseEntered = ref(false)

    function setMouseEntered(value: boolean) {
        isMouseEntered.value = value
    }

    return {
        isMouseEntered: readonly(isMouseEntered),
        setMouseEntered
    }
}
