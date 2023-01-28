interface IGetAuthorization {
  access_token: string
  expires_in: number
  token_type: string
}

interface IContext {
  searchValue: string
  handleSearchValue: (searchValue: string) => void
  favoritesIDs: string[]
  handleFavoritesIDs: (id: string) => void
}

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

interface IFetchData {
  id: string
  name: string
  artists: ArtistData[]
  images: IAlbumCover[]
  release_date: string
  external_urls: { spotify: string }
  type: string
}

interface ArtistData {
  id: string
  name: string
  url: string
  href: string
}

interface IRequestParams {
  q?: string
  type?: string
  ids?: string
}
