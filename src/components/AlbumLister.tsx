import React from "react"
import { AlbumContext } from "../context/AlbumContext"

interface IAlbumLister {
  albums: IAlbumData[]
}

const AlbumLister = ({ albums }: IAlbumLister) => {
  const { favoritesIDs } = React.useContext(AlbumContext)
  const { handleFavoritesIDs } = React.useContext(AlbumContext)

  const handleClick = (e: React.MouseEvent) => {
    if (e.target instanceof SVGElement) handleFavoritesIDs(e.currentTarget.id)
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
            <div className="grid grid-cols-[1fr_auto] justify-between pt-2 gap-1">
              <a
                href={album.spotifyLink}
                target="_blank"
                className="justify-self-start "
              >
                <h3 className="text-2xl inline-block  after:h-[.1rem] after:block hover:after:bg-smoke after:w-full">
                  {album.name}
                </h3>
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className={[
                  "w-6 h-6 cursor-pointer stroke-smoke-100",
                  favoritesIDs.includes(album.id)
                    ? "fill-smoke-100 hover:opacity-80 transition-opacity"
                    : "fill-carbon-400 hover:fill-smoke-100 transition-colors"
                ].join(" ")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>

            <p className="text-smoke-200 text-base">{album.artists[0].name}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default AlbumLister
