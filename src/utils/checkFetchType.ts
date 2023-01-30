const isResponseExists = (data: unknown): data is IResponse => {
  if (data && typeof data === "object") {
    return true
  } else {
    return false
  }
}

const isNewReleasesResponse = (data: unknown): data is INewReleasesResponse => {
  if (
    isResponseExists(data) &&
    "albums" in data &&
    "items" in data.albums &&
    Array.isArray(data.albums.items)
  ) {
    return true
  } else {
    return false
  }
}
const isIDResponse = (data: unknown): data is IIDResponse => {
  if (
    isResponseExists(data) &&
    "albums" in data &&
    Array.isArray(data.albums)
  ) {
    return true
  } else {
    return false
  }
}

const isSearchResponse = (data: unknown): data is ISearchResponse => {
  if (isResponseExists(data) && "albums" in data && "tracks" in data) {
    return true
  } else {
    return false
  }
}

const isSingleResponse = (data: unknown): data is ISingleAlbumRaw => {
  if (data && typeof data === "object" && "popularity" in data) {
    return true
  } else {
    return false
  }
}

export {
  isNewReleasesResponse,
  isIDResponse,
  isSearchResponse,
  isSingleResponse
}
