import React from "react"

const UseParseData = (fetchedData: IFetchData[]): IAlbumData[] | null => {
  if (fetchedData) {
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
