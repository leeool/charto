import React from "react"
import TextArea from "../Form/TextArea"
import * as ToggleGroup from "@radix-ui/react-toggle-group"
import { AlbumContext } from "../../context/AlbumContext"
import { useParams } from "react-router"

const ReviewForm = () => {
  const [recommended, setRecommended] = React.useState<boolean | null>(null)
  const [textAreaValue, setTextAreaValue] = React.useState<string>("")
  const [formErro, setFormError] = React.useState(false)
  const { id } = useParams()
  const { handleReviews } = React.useContext(AlbumContext)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (textAreaValue?.trim() && recommended !== null && id) {
      handleReviews(id, textAreaValue, "yourUser321", recommended)
      setTextAreaValue("")
    } else {
      setFormError(true)
      setTimeout(() => {
        setFormError(false)
      }, 3000)
    }
  }

  return (
    <form
      className={`bg-carbon-400 transition-colors p-4 rounded-[4px] grid gap-4 border-2 border-transparent ${
        formErro ? "border-red-500" : ""
      }`}
      onSubmit={handleSubmit}
    >
      <TextArea setValue={setTextAreaValue} value={textAreaValue} />
      <div className="grid grid-cols-[auto_1fr] items-center">
        <div className="grid gap-y-2 ">
          <p className="text-xl text-center">Recomendar </p>
          <ToggleGroup.Root
            aria-required="true"
            type="single"
            orientation="horizontal"
            className="flex gap-2 text-lg"
            onValueChange={(value) => {
              if (value) setRecommended(value === "sim" ? true : false)
              else setRecommended(null)
            }}
          >
            <ToggleGroup.Item
              value="sim"
              className="bg-carbon-100 px-4 py-1 rounded-[4px] hover:bg-carbon-200 border-[2px] border-transparent  radix-state-on:border-smoke-100 radix-state-on:bg-carbon-200 transition-colors"
            >
              Sim
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="nao"
              className="bg-carbon-100 px-4 py-1 rounded-[4px] hover:bg-carbon-200 border-[2px] border-transparent  radix-state-on:border-smoke-100 radix-state-on:bg-carbon-200 transition-colors"
            >
              Não
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </div>
        <button className="place-self-end bg-carbon-100 hover:bg-carbon-200 px-4 py-1 rounded-[4px] text-lg transition-colors block">
          Enviar
        </button>
      </div>
    </form>
  )
}

export default ReviewForm
