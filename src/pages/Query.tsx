import React from "react"
import Section from "../components/Section"
import { AlbumContext } from "../context/AlbumContext"
import UseGetData from "../hooks/UseGetData"

const Query = () => {
  const { searchValue } = React.useContext(AlbumContext)
  const { data } = UseGetData(searchValue, "album,track", "/search")

  return (
    <div>
      <Section data={data} title={`Pesquisa: ${searchValue}`} />
    </div>
  )
}

export default Query