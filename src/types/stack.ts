import type Muuri from 'muuri'
import type { SimpleIcon } from 'simple-icons'

export type TStackElement = SimpleIcon & { type: string }

export type TStackData = {
    icons: TStackElement[]
    displayShuffleTitle: boolean
    muuri: null | Muuri
    skillTypes: string[]
}

export type TApiStackElement = {
    title: string
    code: string
    skill_type: {
        name: string
    }
}

export type TFilterDropdownData = {
    isButtonHovered: boolean
    displayDropdown: boolean
    currentFilter: string | null
}
