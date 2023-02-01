import React from "react"

const reviewsMock: IReviews = {
  "6ZbJKlwcSja0MbKg2dQQLJ": [
    {
      content: "mt bom isso nossa, gostei demais sabe...",
      user: "leozinho123",
      recomendded: true
    }
  ]
}

export const AlbumContext = React.createContext({} as IContext)

const localFavoriteIDs = JSON.parse(localStorage.getItem("favoriteIDs") || "[]")
const localReviews = JSON.parse(localStorage.getItem("reviews") || "[]")

const AlbumStorage = ({ children }: { children: React.ReactNode }) => {
  const [searchValue, setSearchValue] = React.useState("")
  const [favoritesIDs, setFavoritesIDs] =
    React.useState<string[]>(localFavoriteIDs)
  const [reviews, setReviews] = React.useState<IReviews>(localReviews)

  const handleSearchValue = (value: string) => {
    setSearchValue(value)
  }

  const handleFavoritesIDs = (clickID: string) => {
    setFavoritesIDs((prev) => {
      if (prev.includes(clickID)) {
        return prev.filter((id) => id !== clickID)
      } else {
        return prev.concat(clickID)
      }
    })
  }

  React.useEffect(() => {
    localStorage.setItem("favoriteIDs", JSON.stringify(favoritesIDs))
  }, [favoritesIDs])

  const handleReviews = (
    id: string,
    content: string,
    user: string,
    recomendded: boolean
  ) => {
    setReviews((prev) => {
      if (!prev[id])
        return {
          ...prev,
          [id]: [
            {
              content,
              user,
              recomendded
            }
          ]
        }
      else
        return {
          ...prev,
          [id]: prev[id].concat([
            {
              content: content,
              user: user,
              recomendded: recomendded
            }
          ])
        }
    })
  }

  React.useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews))
  }, [reviews])

  return (
    <AlbumContext.Provider
      value={{
        searchValue,
        handleSearchValue,
        favoritesIDs,
        handleFavoritesIDs,
        reviews,
        handleReviews
      }}
    >
      {children}
    </AlbumContext.Provider>
  )
}

export default AlbumStorage
