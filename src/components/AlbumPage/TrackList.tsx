import React from "react"
import msToMin from "../../utils/msToMin"

const TrackList = ({ data }: { data: ISingleAlbumData }) => {
  return (
    <div className="grid gap-6">
      <div className="grid">
        <h1 className=" text-3xl mb-2">Lista de tracks</h1>
        <span className="border-t-[2px] border-carbon-100 w-full"></span>
      </div>
      <ul className="text-lg grid gap-y-1 rounded-[4px] bg-carbon-400 px-6 py-3 ">
        {data.tracks.map((track, index) => (
          <li className="flex justify-between gap-1" key={track.spotifyLink}>
            <span>
              {index + 1}. {track.name}
            </span>
            <span className="text-smoke-200 text-base">
              {msToMin(track.durationMs)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TrackList
