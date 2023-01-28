import React from "react"
import { AlbumContext } from "../context/AlbumContext"

interface IAlbumLister {
  albums: IAlbumData[]
}

const AlbumLister = ({ albums }: IAlbumLister) => {
  const { handleFavoritesIDs } = React.useContext(AlbumContext)

  const handleClick = (e: React.MouseEvent) => {
    handleFavoritesIDs(e.currentTarget.id)
  }

  return (
    <ul className="grid grid-cols-4 gap-8 my-8">
      {albums.map((album) => {
        return (
          <li key={album.id} id={album.id} onClick={handleClick}>
            <img
              className="rounded-primary h-[18rem] object-cover"
              src={album.cover[0].url}
              alt="album cover"
            />
            <a href={album.spotifyLink} target="_blank">
              <h3 className="text-2xl inline-block mt-1 after:h-[.1rem] after:block hover:after:bg-smoke after:w-full">
                {album.name}
              </h3>
            </a>
            <p className="text-smoke-200 text-base">{album.artists[0].name}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default AlbumLister
