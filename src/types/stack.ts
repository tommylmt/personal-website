import type Muuri from 'muuri'

export type TStackData = {
    icons: TApiStackElement[]
    displayShuffleTitle: boolean
    muuri: null | Muuri
    skillTypes: string[]
}

export type TApiStackElement = {
    title: string
    code: string
    svg: string
    skill_type: {
        name: string
    }
}

export type TFilterDropdownData = {
    isButtonHovered: boolean
    displayDropdown: boolean
    currentFilter: string | null
}
