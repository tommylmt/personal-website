import type MenuHelper from '@/utils/MenuHelper.ts'
import type { MenuItem } from '@/types/menu.ts'

export type TAppData = {
    helper: null | MenuHelper
    displayMenu: boolean
}

export type TNavBarData = {
    currentLeft: number | string
    currentTop: number | string
    currentWidth: string
    openMenu: boolean
    clientHeight: number
    localPages: MenuItem[]
}

export type TMenuItemProps = {
    path: string
    current: boolean
    name: string
    special: boolean | undefined
}

export type TDraggableBlockData = {
    offsetX: number | null
    offsetY: number | null
    isDragging: boolean
    left: string | null
    top: string | null
    isActive: boolean
}
