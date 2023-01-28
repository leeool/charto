import React, { createContext } from "react"

export const AlbumContext = createContext({} as IContext)

const AlbumStorage = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = React.useState("")
  const [searchValue, setSearchValue] = React.useState("")
  const [favoritesIDs, setFavoritesIDs] = React.useState<string[]>([])

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

  return (
    <AlbumContext.Provider
      value={{
        accessToken: ".",
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
