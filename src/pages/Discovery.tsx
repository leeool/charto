import React from "react"
import Section from "../components/Section"
import UseFetch from "../hooks/UseFetch"
import UseGetAlbums from "../hooks/UseParseData"
import UseGetData from "../hooks/UseGetData"

const Discovery = () => {
  const { data, loading } = UseGetData("/browse/new-releases", {})

  return (
    <div>
      <Section data={data} title="Descobrir" loading={loading} />
    </div>
  )
}

export default Discovery
