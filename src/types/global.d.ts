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
  reviews: IReviews
  handleReviews: (
    id: string,
    content: string,
    user: string,
    recomendded: boolean
  ) => void
}

interface IRequestParams {
  q?: string
  type?: string
  ids?: string
}

interface IReviews {
  [albumID: string]: {
    content: string
    user: string
    recomendded: boolean
  }[]
}
