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

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.target instanceof SVGElement && e.key == "Enter")
      handleFavoritesIDs(e.currentTarget.id)
  }

  return (
    <ul className="grid lg:grid-cols-5 lg:gap-8 md:grid-cols-4 grid-cols-2 gap-5 my-8">
      {albums.map((album) => {
        return (
          <li
            key={album.id}
            id={album.id}
            onClick={handleClick}
            onKeyDown={handleKey}
          >
            <img
              className="rounded-primary h-[14rem] object-cover w-full"
              src={album.cover[0].url}
              alt="album cover"
              tabIndex={0}
            />
            <div className="grid grid-cols-[1fr_auto] justify-between pt-2">
              <a
                href={album.spotifyLink}
                target="_blank"
                className="justify-self-start overflow-hidden block  max-w-[calc(100%)] leading-none"
              >
                <h3
                  title={album.name}
                  className="text-xl inline-block  after:h-[.1rem] after:block hover:after:bg-smoke after:w-full whitespace-nowrap text-ellipsis max-w-[calc(100%)] overflow-hidden"
                >
                  {album.name}
                </h3>
              </a>
              <svg
                tabIndex={0}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className={[
                  "w-6 h-6 cursor-pointer stroke-smoke-100 outline-none",
                  favoritesIDs.includes(album.id)
                    ? "fill-smoke-100 hover:opacity-80 transition-opacity"
                    : "fill-transparent hover:fill-smoke-100 transition-colors"
                ].join(" ")}
              >
                <title>
                  {favoritesIDs.includes(album.id)
                    ? "Remover dos "
                    : "Adicionar aos "}
                  Favoritos
                </title>
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
