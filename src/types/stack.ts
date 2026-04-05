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
