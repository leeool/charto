import React from "react"

const ReviewText = ({ content, limit }: { content: string; limit: number }) => {
  const splittedString = content.split(" ")
  const reducedString = splittedString.slice(0, limit).join(" ")
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false)
  const [newContent, setNewContent] = React.useState<string>(reducedString)
  const handleClick = () => {
    setIsExpanded((prev) => !prev)
  }

  React.useEffect(() => {
    if (isExpanded === true) {
      setNewContent(content)
    } else {
      setNewContent(reducedString)
    }
  }, [isExpanded])

  return (
    <div className="px-6 py-4">
      <p className="leading-relaxed text-ellipsis">{newContent}</p>
      {splittedString.length > limit ? (
        <button
          className="text-smoke-200 hover:underline inline-block"
          onClick={handleClick}
        >
          ler mais...
        </button>
      ) : null}
    </div>
  )
}

export default ReviewText
