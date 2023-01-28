import React, { createContext } from "react"

export const AlbumContext = createContext({} as IContext)

const localFavoriteIDs = JSON.parse(localStorage.getItem("favoriteIDs") || "[]")

const AlbumStorage = ({ children }: { children: React.ReactNode }) => {
  const [searchValue, setSearchValue] = React.useState("")
  const [favoritesIDs, setFavoritesIDs] =
    React.useState<string[]>(localFavoriteIDs)

  const handleSearchValue = (value: string) => {
    setSearchValue(value)
  }

  const handleFavoritesIDs = (clickID: string) => {
    setFavoritesIDs((prev) => {
      if (prev.includes(clickID)) {
        return prev.filter((id) => id !== clickID)
      } else {
        return prev.concat(clickID)
      }
    })
  }

  React.useEffect(() => {
    localStorage.setItem("favoriteIDs", JSON.stringify(favoritesIDs))
  }, [favoritesIDs])

  return (
    <AlbumContext.Provider
      value={{
        searchValue,
        handleSearchValue,
        favoritesIDs,
        handleFavoritesIDs
      }}
    >
      {children}
    </AlbumContext.Provider>
  )
}

export default AlbumStorage
