import React from "react"

interface Props {
  setValue: React.Dispatch<string>
  value: string
}

const TextArea = ({ setValue, value }: Props) => {
  const handleValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  return (
    <textarea
      onChange={handleValue}
      name="review"
      id="text-area"
      placeholder="Escrever Review..."
      rows={3}
      value={value}
      className="bg-carbon-200 rounded-[4px] outline-offset-0 border-transparent  outline-none border-2 focus:border-smoke-200 p-3 text-smoke-100 resize-none w-full transition-colors text-lg"
    ></textarea>
  )
}

export default TextArea
