import React from "react"
import { isSingleData } from "../utils/checkDataType"
import AlbumLister from "./AlbumLister"

interface ISection {
  title: string
  data: IAlbumData[] | ISingleAlbumData | null
  loading: boolean
}

const Section = ({ title, data, loading }: ISection) => {
  if (loading) return <p>Carregando...</p>
  if (isSingleData(data) || !data?.length) return <p>Ainda não há nada aqui.</p>
  return (
    <section className="grid">
      <h2 className="text-mainTitle">{title}</h2>
      <span className="border-t-[1px] border-carbon-100 opacity-50 w-full"></span>
      <div>{data ? <AlbumLister albums={data} /> : null}</div>
    </section>
  )
}

export default Section
