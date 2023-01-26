import React from "react"
import Section from "../components/Section"
import UseGetData from "../hooks/UseGetData"

const Discovery = () => {
  const { data } = UseGetData("/browse/new-releases", {})

  return (
    <div>
      <Section data={data} title="Descobrir" />
    </div>
  )
}

export default Discovery
