const isItemsResponse = (value: unknown): value is ICollectionResponse => {
  if (value && typeof value === "object" && "items" in value) {
    return true
  } else {
    return false
  }
}
const isNormalResponse = (value: unknown): value is IFetchData[] => {
  if (value && typeof value === "object") {
    return true
  } else {
    return false
  }
}

export { isItemsResponse, isNormalResponse }
