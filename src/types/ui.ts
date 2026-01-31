import type { DeepReadonly, Ref } from 'vue'

export type TLinkPreviewData = {
    isVisible: boolean
    hasPopped: boolean
    mousePosition: {
        x: number
        y: number
    }
}

export type TMouseHook = {
    isMouseEntered: DeepReadonly<Ref<boolean, boolean>>
    setMouseEntered: (value: boolean) => void
}
