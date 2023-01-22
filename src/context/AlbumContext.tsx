import React, { createContext } from "react"

export const AlbumContext = createContext({} as IContext)

const AlbumStorage = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = React.useState("")

  return (
    <AlbumContext.Provider value={{ accessToken: "." }}>
      {children}
    </AlbumContext.Provider>
  )
}

export default AlbumStorage
