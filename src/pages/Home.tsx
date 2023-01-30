import React from "react"
import Section from "../components/Section"
import { AlbumContext } from "../context/AlbumContext"
import UseGetData from "../hooks/UseGetData"

const Home = () => {
  const { favoritesIDs } = React.useContext(AlbumContext)
  const favorites = UseGetData("/albums", {
    ids: favoritesIDs.join(",")
  })
  const newReleases = UseGetData("/browse/new-releases", {})

  return (
    <div>
      <Section
        data={newReleases.data}
        title="Novos Lançamentos"
        loading={newReleases.loading}
      />
      {favorites.data ? (
        <Section
          data={favorites.data}
          title="Seus Favoritos"
          loading={favorites.loading}
        />
      ) : null}
    </div>
  )
}

export default Home
