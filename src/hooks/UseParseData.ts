import React from "react"
import { isItemsResponse, isNormalResponse } from "../utils/checkResponse"

const UseParseData = (fetchedData: unknown): IAlbumData[] | null => {
  if (isItemsResponse(fetchedData))
    return fetchedData.items.map((album) => {
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
  else if (isNormalResponse(fetchedData)) {
    return fetchedData.map((album) => {
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
  } else return null
}

export default UseParseData
