const isSingleData = (data: unknown): data is ISingleAlbumData => {
  if (data && typeof data === "object" && "popularity" in data) {
    return true
  }
  return false
}

export { isSingleData }
