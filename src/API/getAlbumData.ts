import { getData } from "./apiGlobal"
import getAuthorization from "./getAuthorization"

export const fetchData = async () => {
  try {
    const auth = await getAuthorization()
    const data = await getData.get("/search", {
      params: {
        q: "Gigi's% Recovery",
        type: "album"
      },
      headers: {
        Authorization: `Bearer ${auth.access_token}`
      }
    })
    return data.data.albums.items
  } catch (e) {
    if (e instanceof Error) {
      console.error(`${e.name}: ${e.message}`)
    }
    return null
  }
}

const getAlbum = (data: IFetchData[]): IAlbumData[] | null => {
  if (data) {
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
  } else {
    return null
  }
}

export default getAlbum
