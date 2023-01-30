import React from "react"
import { useParams } from "react-router"
import { AlbumContext } from "../context/AlbumContext"
import UseGetData from "../hooks/UseGetData"
import { isSingleData } from "../utils/checkDataType"

const AlbumPage = () => {
  const { id } = useParams()
  const { data, loading } = UseGetData(`/albums/${id}`, {})

  const { favoritesIDs } = React.useContext(AlbumContext)
  const { handleFavoritesIDs } = React.useContext(AlbumContext)

  const handleClick = (e: React.MouseEvent) => {
    if (e.target instanceof SVGElement) {
      handleFavoritesIDs(e.currentTarget.id)
    }
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.target instanceof SVGElement && e.key == "Enter")
      handleFavoritesIDs(e.currentTarget.id)
  }

  if (loading) return <div>Carregando...</div>
  if (!data || !isSingleData(data)) return <div>Algo de errado aconteceu</div>
  return (
    <>
      <div
        onClick={handleClick}
        onKeyDown={handleKey}
        id={data.id}
        key={data.id}
      >
        <img
          src={data.cover[0].url}
          alt="Album"
          className="absolute block left-0 top-32 w-full object-cover h-[30rem] object-center blur-[8px] -z-[1]"
        />
        <div className="grid grid-cols-[20rem_1fr] mt-[25rem] gap-6">
          <img
            src={data.cover[1].url}
            alt="Album"
            className="rounded-primary"
          />
          <div className="self-end">
            <a
              href={data.spotifyLink}
              target="_blank"
              className="inline-block after:h-[2px] hover:after:bg-smoke after:block mb-4"
            >
              <h1 className="text-5xl">{data.name}</h1>
            </a>
            <svg
              tabIndex={0}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className={[
                "w-6 h-6 cursor-pointer stroke-smoke-100 outline-none",
                favoritesIDs.includes(data.id)
                  ? "fill-smoke-100 hover:opacity-80 transition-opacity"
                  : "fill-transparent hover:fill-smoke-100 transition-colors"
              ].join(" ")}
            >
              <title>
                {favoritesIDs.includes(data.id)
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
            <div className="flex gap-3 self-end text-xl text-smoke-200">
              <p>{data.type}</p>
              <span className="w-[2px]  bg-carbon-100"></span>
              <p>230 min</p>
              <span className="w-[2px]  bg-carbon-100"></span>
              <p>{data.releaseDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AlbumPage
