import {
  isIDResponse,
  isNewReleasesResponse,
  isSearchResponse,
  isSingleResponse
} from "../utils/checkFetchType"

const UseParseData = (
  fetchedData: IResponse | ISingleAlbumRaw
): IAlbumData[] | ISingleAlbumData | null => {
  if (isNewReleasesResponse(fetchedData) || isSearchResponse(fetchedData)) {
    return fetchedData.albums.items.map((album) => ({
      id: album.id,
      name: album.name,
      artists: album.artists,
      cover: album.images,
      spotifyLink: album.external_urls.spotify,
      releaseDate: album.release_date,
      type: album.album_type
    }))
  } else if (isIDResponse(fetchedData)) {
    return fetchedData.albums.map((album) => ({
      id: album.id,
      name: album.name,
      artists: album.artists,
      cover: album.images,
      spotifyLink: album.external_urls.spotify,
      releaseDate: album.release_date,
      type: album.album_type
    }))
  } else if (isSingleResponse(fetchedData)) {
    return {
      name: fetchedData.name,
      id: fetchedData.id,
      artists: fetchedData.artists,
      cover: fetchedData.images,
      spotifyLink: fetchedData.external_urls.spotify,
      releaseDate: fetchedData.release_date,
      type: fetchedData.album_type,
      popularity: fetchedData.popularity,
      totalTracks: fetchedData.total_tracks,
      tracks: fetchedData.tracks.items
    }
  } else return null
}

export default UseParseData
