import React from "react"
import Section from "../components/Section"
import { AlbumContext } from "../context/AlbumContext"
import UseGetData from "../hooks/UseGetData"

const Favorites = () => {
  const { favoritesIDs } = React.useContext(AlbumContext)
  const { data, loading } = UseGetData("/albums", {
    ids: favoritesIDs.join(",")
  })

  return (
    <div>
      <Section title="Favoritos" data={data} loading={loading} />
    </div>
  )
}

export default Favorites
