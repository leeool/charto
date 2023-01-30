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

interface IRequestParams {
  q?: string
  type?: string
  ids?: string
}
