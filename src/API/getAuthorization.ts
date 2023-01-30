import { getAuth } from "./apiGlobal"

const getAuthorization = async (): Promise<IGetAuthorization> => {
  const request = await getAuth.post("", {})

  return request.data
}

export default getAuthorization
