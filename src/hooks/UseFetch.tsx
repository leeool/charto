import React from "react"
import { getData } from "../API/apiGlobal"
import getAuthorization from "../API/getAuthorization"

const UseFetch = (endpoint: string, params: IParams) => {
  const [fetchedData, setFetchedData] = React.useState<IFetchData[] | null>(
    null
  )
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState<boolean>(false)

  const fetch = async () => {
    let data = null
    let error = null
    setLoading(true)

    try {
      const auth = await getAuthorization()

      if (!auth.access_token) throw new Error("Token Error")

      const fetchedData = await getData.get(endpoint, {
        params: params,
        headers: {
          Authorization: `Bearer ${auth.access_token}`
        }
      })

      if (fetchedData.statusText !== "OK")
        throw new Error(fetchedData.statusText)

      data = fetchedData.data.albums
      error = null
    } catch (e) {
      if (e instanceof Error) {
        console.error(`${e.name}: ${e.message}`)
        error = e.message
      }
    } finally {
      setFetchedData(data)
      setError(error)
      setLoading(false)
    }
  }

  React.useEffect(() => {
    fetch()
  }, [])

  return { fetchedData, error, loading }
}

export default UseFetch
