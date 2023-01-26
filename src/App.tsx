import React from "react"
import { Outlet } from "react-router-dom"
import getAlbum, { fetchData } from "./API/getAlbumData"
import getAuthorization from "./API/getAuthorization"
import Header from "./components/Header"

const App = () => {
  const [data, setData] = React.useState<IAlbumData[] | null>([])

  React.useEffect(() => {
    fetchData()
      .then((res) => getAlbum(res))
      .then((res) => setData(res))
  }, [])

  return (
    <div className="font-outfit text-smoke">
      <Header />
      <main className="max-w-7xl m-[0_auto] mt-10">
        <Outlet />
      </main>
      {data?.map((album) => (
        <div>
          <h1 className="text-2xl">{album.name}</h1>
          <p>{album.artists[0].name}</p>
        </div>
      ))}
    </div>
  )
}

export default App
