import React from "react"
import AlbumLister from "./AlbumLister"

interface ISection {
  title: string
  data: IAlbumData[] | null
}

const Section = ({ title, data }: ISection) => {
  return (
    <section className="grid">
      <h2 className="text-mainTitle">{title}</h2>
      <span className="border-t-[1px] border-carbon-100 opacity-50 w-full"></span>
      <div>{data ? <AlbumLister albums={data} /> : null}</div>
    </section>
  )
}

export default Section
