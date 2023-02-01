import React from "react"
import { AlbumContext } from "../../context/AlbumContext"
import ReviewText from "./ReviewText"

interface Props {
  id: string
}

const Reviews = ({ id }: Props) => {
  const { reviews } = React.useContext(AlbumContext)

  return (
    <section className="grid gap-y-6  ">
      <div className="grid">
        <h2 className="text-3xl mb-2">Reviews</h2>
        <span className="border-t-[2px] border-carbon-100 w-full"></span>
      </div>
      <div className=" grid gap-y-6 max-h-[40rem] overflow-y-scroll px-3">
        {reviews[id] ? (
          reviews[id]
            .map(({ content, user, recomendded }, index) => (
              <div
                className="bg-carbon-400 rounded-[4px]  grid max-h-fit "
                key={index}
              >
                <ReviewText content={content} limit={30} />
                <span className="border-t-[2px] border-carbon-100 w-full opacity-60"></span>
                <div className="bg-carbon-400 px-6 py-1 flex justify-between">
                  <span>{user}</span>
                  <span>{recomendded ? "Recomenda" : "Não Recomenda"}</span>
                </div>
              </div>
            ))
            .reverse()
        ) : (
          <div>Ainda não há nada aqui.</div>
        )}
      </div>
    </section>
  )
}

export default Reviews
