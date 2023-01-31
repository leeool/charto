import React from "react"

interface Props {
  setValue: React.Dispatch<string>
  value: string | null
}

const TextArea = ({ setValue, value }: Props) => {
  return (
    <textarea
      onChange={(e) => setValue(e.target.value)}
      name="review"
      id=""
      placeholder="Escrever Review..."
      rows={3}
      className="bg-carbon-200 rounded-[4px] outline-offset-0 border-transparent  outline-none border-2 focus:border-smoke-200 p-3 text-smoke-100 resize-none w-full transition-colors text-lg"
    >
      {value}
    </textarea>
  )
}

export default TextArea
