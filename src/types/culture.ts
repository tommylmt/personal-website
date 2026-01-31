export type MediaType = 'Movie' | 'TvShows'

export type TCultureStoreState = {
    uuid: null | string
}

export type TCulturePosterData = {
    visible: boolean
    mouse: {
        x: number | null
        y: number | null
    }
}

export type SpotifyImageSize = 'small' | 'medium' | 'large'

export type SpotifyArtist = {
    href: string
    id: string
    name: string
    type: string | 'artist'
    uri: string
}

export type SpotifyImage = {
    height: number
    url: string
    width: number
}

export type SpotifyImaged = {
    images: SpotifyImage[]
}

export type SpotifyUrls = {
    spotify: string
}

export type SpotifySong = {
    album: SpotifyImaged & {
        album_type: string | 'album'
        artist: SpotifyArtist[]
        available_markets: string[]
        href: string
        id: string
        is_playable: boolean
        name: string
        release_date: string
        release_date_precision: string
        total_tacks: number
        type: string | 'album'
        uri: string
    }
    id: string
    duration_ms: number
    explicit: boolean
    href: string
    is_local: boolean
    is_playable: boolean
    name: string
    popularity: number
    preview_url: string | null
    track_number: number
    type: string | 'track'
    uri: string
    artist: SpotifyArtist & SpotifyImaged
    external_urls: SpotifyUrls
}
