import React from "react"
import getAlbum, { fetchData } from "../API/getAlbumData"

const UseGetData = (endpoint: string, params: IParams) => {
  const [data, setData] = React.useState<IAlbumData[] | null>(null)

  React.useEffect(() => {
    fetchData(endpoint, params)
      .then((res) => getAlbum(res))
      .then((res) => setData(res))
  }, [params.q])

  return { data }
}

export default UseGetData
