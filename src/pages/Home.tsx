import React from "react"
import Section from "../components/Section"
import UseGetData from "../hooks/UseGetData"

const Home = () => {
  const { data, loading } = UseGetData("/browse/new-releases", {})

  return (
    <div>
      <Section data={data} title="Novos Lançamentos" loading={loading} />
    </div>
  )
}

export default Home
