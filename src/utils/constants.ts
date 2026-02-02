import type { CultureLinks, MediaType, SpotifyImageSize } from '@/types/culture.ts'

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

export const CULTURE_LINKS: Record<CultureLinks, string> = {
    spotify: 'https://open.spotify.com/user/313guoevms7cob2dvjizsmwfk4o4',
    tvtime: 'https://tvtime.com/r/35sjB',
    senscritique: 'https://www.senscritique.com/tommy-dvdrip-mkv'
}
