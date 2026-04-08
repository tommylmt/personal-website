export type TPicturePosition = 'bottom-left' | 'middle-left' | 'middle-right' | 'up-left' | 'center' | 'under-map' | 'middle-top'

export type TProSituation = {
    name: string
    location: string
    image: string
    years: {
        start: string | number
        end: string | number
    }
    work: string
}

export type TProSituationData = {
    xp: TProSituation[]
}
