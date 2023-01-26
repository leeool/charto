import React from "react"
import getAlbum, { fetchData } from "../API/getAlbumData"

const UseGetData = (query: string, type: string, endpoint: string) => {
  const [data, setData] = React.useState<IAlbumData[] | null>(null)

  React.useEffect(() => {
    fetchData(endpoint, query, type)
      .then((res) => getAlbum(res))
      .then((res) => setData(res))
  }, [query])

  return { data }
}

export default UseGetData
