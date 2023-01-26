import React from "react"

interface IAlbumLister {
  albums: IAlbumData[]
}

const AlbumLister = ({ albums }: IAlbumLister) => {
  return (
    <ul className="grid grid-cols-4 gap-8 my-8">
      {albums.map((album) => {
        return (
          <li key={album.id}>
            <a href={album.spotifyLink}>
              <img
                className="rounded-primary h-[18rem] object-cover"
                src={album.cover[0].url}
                alt="album cover"
              />
              <h3 className="text-2xl mt-1">{album.name}</h3>
              <p className="text-smoke-200 text-base">
                {album.artists[0].name}
              </p>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default AlbumLister
