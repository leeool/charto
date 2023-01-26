import { getData } from "./apiGlobal"
import getAuthorization from "./getAuthorization"

export const fetchData = async (
  endpoint: string,
  query: string,
  type: string
) => {
  try {
    const auth = await getAuthorization()
    if (!auth.access_token) throw new Error("Token Error")
    const data = await getData.get(endpoint, {
      params: {
        q: query,
        type: type
      },
      headers: {
        Authorization: `Bearer ${auth.access_token}`
      }
    })
    if (data.statusText !== "OK") throw new Error(data.statusText)
    return data.data.albums.items
  } catch (e) {
    if (e instanceof Error) console.error(`${e.name}: ${e.message}`)
    return null
  }
}

const getAlbum = (data: IFetchData[]): IAlbumData[] | null => {
  if (!data) return null
  return data.map((album) => {
    return {
      id: album.id,
      name: album.name,
      artists: album.artists,
      cover: album.images,
      spotifyLink: album.external_urls.spotify,
      releaseDate: album.release_date,
      type: album.type
    }
  })
}

export default getAlbum
