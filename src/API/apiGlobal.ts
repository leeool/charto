import axios from "axios"

export const getAuth = axios.create({
  baseURL: "https://accounts.spotify.com/api/token",
  params: {
    grant_type: "client_credentials"
  },
  headers: {
    Authorization:
      "Basic YTM0OTdiMTdlNmYxNDA5YWI5ZjcwYjU4ZjIwZGYyNDE6Y2UxOWUwMWU1ZDZmNDNmODgwZmUyYThkN2NiMTI0ZWE=",
    ["Content-Type"]: "application/x-www-form-urlencoded"
  },
  method: "POST"
})
