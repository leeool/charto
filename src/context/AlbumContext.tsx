import React from "react"

const reviewsMock = [
  {
    content:
      "Suspendisse ac mollis metus. Ut facilisis a ligula eget elementum. Integer hendrerit nisi sagittis, facilisis elit ac, vehicula nunc. Quisque sapien arcu, placerat quis purus et, porttitor fermentum odio. Sed ligula mi, gravida a massa ut, ultrices aliquam nulla. Quisque ultrices gravida leo a hendrerit. Maecenas ac odio non elit luctus finibus nec nec ipsum. Vivamus a tellus diam. ",
    rating: 100,
    user: "John Doe"
  },
  {
    content:
      "Donec sed orci hendrerit, porta nisi euismod, varius nibh. Donec ornare pharetra lectus, at maximus sem sollicitudin non. Curabitur vel dapibus ligula. Quisque sit amet nisl rhoncus, suscipit mauris ut, sagittis arcu. Nullam sit amet magna turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam fermentum eros ut lorem laoreet lobortis. Suspendisse eu turpis ipsum. Morbi gravida nisl id tortor eleifend posuere. Aliquam sit amet sodales metus. Aenean pellentesque pellentesque tincidunt. Nunc eget nisi nec justo aliquet fermentum viverra id purus. Phasellus euismod dui ac blandit vulputate. Vivamus quis sem viverra, pretium nunc vitae, iaculis sapien.",
    rating: 0,
    user: "FuckingLongNameWTFIsThisReal??"
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id.",
    rating: 76,
    user: "StrangeUser"
  },
  {
    content:
      "Suspendisse ac mollis metus. Ut facilisis a ligula eget elementum. Integer hendrerit nisi sagittis, facilisis elit ac, vehicula nunc. Quisque sapien arcu, placerat quis purus et, porttitor fermentum odio. Sed ligula mi, gravida a massa ut, ultrices aliquam nulla. Quisque ultrices gravida leo a hendrerit. Maecenas ac odio non elit luctus finibus nec nec ipsum. Vivamus a tellus diam. ",
    rating: 100,
    user: "Cleber"
  },
  {
    content:
      "Suspendisse ac mollis metus. Ut facilisis a ligula eget elementum. Integer hendrerit nisi sagittis, facilisis elit ac, vehicula nunc. Quisque sapien arcu, placerat quis purus et, porttitor fermentum odio. Sed ligula mi, gravida a massa ut, ultrices aliquam nulla. Quisque ultrices gravida leo a hendrerit. Maecenas ac odio non elit luctus finibus nec nec ipsum. Vivamus a tellus diam. ",
    rating: 100,
    user: "Januário456"
  }
]

export const AlbumContext = React.createContext({} as IContext)

const localFavoriteIDs = JSON.parse(localStorage.getItem("favoriteIDs") || "[]")

const AlbumStorage = ({ children }: { children: React.ReactNode }) => {
  const [searchValue, setSearchValue] = React.useState("")
  const [favoritesIDs, setFavoritesIDs] =
    React.useState<string[]>(localFavoriteIDs)

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

  return (
    <AlbumContext.Provider
      value={{
        searchValue,
        handleSearchValue,
        favoritesIDs,
        handleFavoritesIDs,
        reviewsMock
      }}
    >
      {children}
    </AlbumContext.Provider>
  )
}

export default AlbumStorage
