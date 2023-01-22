interface IGetAuthorization {
  access_token: string
  expires_in: number
  token_type: string
}

interface IContext {
  accessToken: string
}
