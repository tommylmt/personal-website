export type TPicturePosition = 'bottom-left' | 'middle-left' | 'middle-right' | 'up-left' | 'center' | 'under-map' | 'middle-top'

export type TDragzoneData = {
    isLoading: boolean
    pictures: Record<TPicturePosition, string>
}
