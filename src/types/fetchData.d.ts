interface INewReleasesRaw {
  id: string
  name: string
  artists: ArtistData[]
  images: IAlbumCover[]
  release_date: string
  external_urls: { spotify: string }
  album_type: string
}

interface ISingleAlbumRaw {
  id: string
  name: string
  artists: ArtistData[]
  images: IAlbumCover[]
  release_date: string
  external_urls: { spotify: string }
  album_type: string
  popularity: number
  total_tracks: number
  tracks: { items: ITracksRaw[] }
}

interface ITracksRaw {
  name: string
  artists: ArtistData[]
  duration_ms: number
  external_urls: { spotify: string }
  preview_url: string
}

type IResponse = INewReleasesResponse | IIDResponse | ISearchResponse

interface INewReleasesResponse {
  albums: {
    href: string
    items: INewReleasesRaw[]
    next: string | null
    previous: string
  }
}

interface IIDResponse {
  albums: ISingleAlbumRaw[]
}

interface ISearchResponse {
  albums: {
    href: string
    items: INewReleasesRaw[]
    next: string | null
    previous: string | null
  }
  tracks: {
    href: string
    items: ITracksRaw[]
    next: string | null
    previous: string | null
  }
}
