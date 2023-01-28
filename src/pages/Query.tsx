import React from "react"
import Section from "../components/Section"
import { AlbumContext } from "../context/AlbumContext"
import UseGetData from "../hooks/UseGetData"

const Query = () => {
  const { searchValue } = React.useContext(AlbumContext)
  const { data, loading } = UseGetData("/search", {
    q: searchValue,
    type: "album,track"
  })

  return (
    <div>
      <Section
        data={data}
        title={`Pesquisa: ${searchValue}`}
        loading={loading}
      />
    </div>
  )
}

export default Query
