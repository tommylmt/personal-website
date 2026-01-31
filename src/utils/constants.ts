import type { MediaType, SpotifyImageSize } from '@/types/culture.ts'

export const MEDIA_TYPE: Record<MediaType, string> = {
    Movie: 'movies',
    TvShows: 'shows'
}

export const NOT_FOUND = 'NotFound'

export const SPOTIFY_IMAGE_SIZES: Record<SpotifyImageSize, number> = {
    large: 0,
    medium: 1,
    small: 2
}
