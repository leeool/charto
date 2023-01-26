import React, { createContext } from "react"

export const AlbumContext = createContext({} as IContext)

const AlbumStorage = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = React.useState("")
  const [searchValue, setSearchValue] = React.useState("")

  const handleSearchValue = (value: string) => {
    setSearchValue(value)
  }

  return (
    <AlbumContext.Provider
      value={{ accessToken: ".", searchValue, handleSearchValue }}
    >
      {children}
    </AlbumContext.Provider>
  )
}

export default AlbumStorage
