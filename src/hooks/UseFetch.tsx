import { AxiosError } from "axios"
import React from "react"
import { getData } from "../API/apiGlobal"
import getAuthorization from "../API/getAuthorization"

const UseFetch = (endpoint: string, params: IRequestParams) => {
  const [fetchedData, setFetchedData] = React.useState<IResponse | null>(null)
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState<boolean>(false)

  const fetch = async () => {
    let data = null
    let error = null
    setLoading(true)

    try {
      const auth = await getAuthorization()
      if (!auth.access_token) throw new Error("Token Error")
      if (params.ids?.length === 0 || params.q?.length === 0) return null
      const fetchedData = await getData.get(endpoint, {
        params: params,
        headers: {
          Authorization: `Bearer ${auth.access_token}`
        }
      })

      if (fetchedData.status < 200 || fetchedData.status >= 300)
        throw new Error(fetchedData.statusText)
      data = fetchedData.data
      error = null
    } catch (e) {
      if (e instanceof AxiosError && e.response && e.response.data) {
        console.error(`${e.name}: ${e.message}`)
        error = e.response.data.error.message
      }
    } finally {
      setFetchedData(data)
      setError(error)
      setLoading(false)
    }
  }

  React.useEffect(() => {
    fetch()
  }, [params.q, params.type])

  return { fetchedData, error, loading }
}

export default UseFetch
