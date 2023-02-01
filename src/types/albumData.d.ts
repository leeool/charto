interface IAlbumData {
  id: string
  name: string
  artists: ArtistData[]
  cover: IAlbumCover[]
  releaseDate: string
  spotifyLink: string
  type: string
}

interface IAlbumCover {
  height: number
  width: number
  url: string
}

interface ArtistData {
  id: string
  name: string
  url: string
  href: string
  external_urls: { spotify: string }
}

interface TrackData {
  name: string
  artists: ArtistData[]
  durationMs: number
  spotifyLink: string
  previewUrl: string
}

interface ISingleAlbumData extends IAlbumData {
  popularity: number
  totalTracks: number
  tracks: TrackData[]
}
