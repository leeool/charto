import axios from "axios"

export const getAuth = axios.create({
  baseURL: "https://accounts.spotify.com/api/token",
  params: {
    grant_type: "client_credentials"
  },
  headers: {
    Authorization: `Basic ${import.meta.env.VITE_SPOTIFY_API_KEY}`,
    ["Content-Type"]: "application/x-www-form-urlencoded"
  },
  method: "POST"
})

export const getData = axios.create({
  baseURL: "https://api.spotify.com/v1",

  transformResponse: [
    (data) => {
      const parsedData = JSON.parse(data)
      if (parsedData.albums.items) return parsedData.albums.items
      else return parsedData.albums
    }
  ]
})
