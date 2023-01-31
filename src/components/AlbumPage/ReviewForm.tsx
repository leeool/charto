import React from "react"
import TextArea from "../Form/TextArea"
import * as ToggleGroup from "@radix-ui/react-toggle-group"

const ReviewForm = () => {
  const [recommended, setRecommended] = React.useState<boolean | null>(null)
  const [textAreaValue, setTextAreaValue] = React.useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(recommended)
    console.log(textAreaValue)
  }

  return (
    <form
      className="bg-carbon-400 p-4 rounded-[4px] grid gap-4"
      onSubmit={handleSubmit}
    >
      <TextArea setValue={setTextAreaValue} value={textAreaValue} />
      <div className="grid grid-cols-2 items-center">
        <div className="grid gap-y-2 ">
          <p className="text-xl">Recomendar</p>
          <ToggleGroup.Root
            aria-required="true"
            type="single"
            className="flex gap-2 text-lg"
            onValueChange={(value) => {
              value === "sim" ? setRecommended(true) : setRecommended(false)
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
