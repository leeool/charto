import React from "react"
import getAlbum, { fetchData } from "../API/getAlbumData"
import Section from "../components/Section"
import { AlbumContext } from "../context/AlbumContext"

const Home = () => {
  const [data, setData] = React.useState<IAlbumData[] | null>([])
  const { searchValue } = React.useContext(AlbumContext)

  React.useEffect(() => {
    fetchData()
      .then((res) => getAlbum(res))
      .then((res) => setData(res))
  }, [])

  return (
    <div>
      <Section title="Descobrir" data={data} />
    </div>
  )
}

export default Home
