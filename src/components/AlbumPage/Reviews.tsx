import React from "react"
import { AlbumContext } from "../../context/AlbumContext"
import ReviewText from "./ReviewText"

const Reviews = () => {
  const { reviewsMock } = React.useContext(AlbumContext)

  return (
    <div className="grid gap-y-6  ">
      <div className="grid">
        <h2 className="text-3xl mb-2">Reviews</h2>
        <span className="border-t-[2px] border-carbon-100 w-full"></span>
      </div>
      <section className=" rounded-[4px] grid gap-y-6">
        {reviewsMock.map(({ content, rating, user }) => (
          <div
            className="bg-carbon-400 rounded-[4px] overflow-hidden grid"
            key={user}
          >
            <ReviewText content={content} limit={30} />
            <span className="border-t-[2px] border-carbon-100 w-full opacity-60"></span>
            <div className="bg-carbon-400 px-6 py-1 flex justify-between">
              <span>{user}</span>
              <span>{rating}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Reviews
