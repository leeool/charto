const getAuthorization = async (): Promise<IGetAuthorization> => {
  const request = await fetch(
    "https://accounts.spotify.com/api/token?grant_type=client_credentials",
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic YTM0OTdiMTdlNmYxNDA5YWI5ZjcwYjU4ZjIwZGYyNDE6Y2UxOWUwMWU1ZDZmNDNmODgwZmUyYThkN2NiMTI0ZWE="
      },
      method: "POST"
    }
  )

  const response = await request.json()
  return response
}

export default getAuthorization
