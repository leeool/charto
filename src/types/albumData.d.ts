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
}

interface ISingleAlbumData extends IAlbumData {
  popularity: number
  totalTracks: number
  tracks: TrackData[]
}
