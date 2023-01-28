import React from "react"
import Section from "../components/Section"
import { AlbumContext } from "../context/AlbumContext"
import UseGetData from "../hooks/UseGetData"

const Favorites = () => {
  const { favoritesIDs } = React.useContext(AlbumContext)
  const { data } = UseGetData("/albums", { ids: favoritesIDs.join(",") })

  return (
    <div>
      {favoritesIDs.length ? (
        <Section title="Favoritos" data={data} />
      ) : (
        <p>Ainda não há nada aqui.</p>
      )}
    </div>
  )
}

export default Favorites
