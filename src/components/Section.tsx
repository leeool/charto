import React from "react"

interface ISection {
  title: string
}

const Section = ({ title }: ISection) => {
  return (
    <section className="grid">
      <h2 className="text-mainTitle">{title}</h2>
      <span className="border-t-[1px] border-carbon-100 opacity-50 w-full"></span>
    </section>
  )
}

export default Section
