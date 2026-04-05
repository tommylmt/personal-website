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

export type TCultureElement = {
    artist: string
    file: string
    media_type: {
        slug: string
    }
    unique_id: string
}

export type CultureLinks = 'spotify' | 'senscritique' | 'tvtime'

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

export type TCultureDetailGenre = {
    id: number
    name: string
}

export type TCultureDetailProductionCompany = {
    id: number
    logo_path: string
    name: string
    origin_country: string
}

export type TCultureDetailMember = {
    adult: boolean
    gender: number
    id: number
    known_for_department: string | 'Acting' | 'Directing'
    name: string
    original_name: string
    popularity: number
    profile_path: string
    cast_id: number
    credit_id: string
}

export type TCultureDetailCast = TCultureDetailMember & {
    character: string
    order: number
}

export type TCultureDetailCrew = TCultureDetailMember & {
    department: string
    job: string
}

export type TCultureDetailNetwork = {
    id: number
    logo_path: string
    name: string
    origin_country: string
}

export type TCultureDetail = {
    adult: false
    backdrop_path: string
    budget: number
    genres: TCultureDetailGenre[]
    created_by?: TCultureDetailCrew[]
    first_air_date?: string
    episode_run_time?: number[]
    in_production?: boolean
    networks?: TCultureDetailNetwork[]
    number_of_episodes?: number
    number_of_seasons?: number
    homepage: string
    id: number
    production_countries: { iso_3166_1: string; name: string }[]
    production_companies: TCultureDetailProductionCompany[]
    release_date: string
    revenue: number
    runtime: number
    imdb_id: string
    status: string
    tagline: string
    name: string
    title?: string
    video: string | boolean
    vote_average: number
    vote_count: number
    cast: TCultureDetailCast[]
    crew: TCultureDetailCrew[]
    origin_country: string[]
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    image_base_url: string
}
