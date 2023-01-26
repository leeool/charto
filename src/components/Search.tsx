import React from "react"

interface ISearch {
  value?: string
  onChange?: React.ChangeEventHandler
  placeholder: string
}

const Search = ({ value, onChange, placeholder }: ISearch) => {
  return (
    <input
      className="bg-carbon-400  placeholder:text-carbon-100 w-full px-2 py-1 rounded-primary min-h-[2rem] h-9  focus:outline-none focus:ring-2 hover:ring-2  ring-smoke-100 ring-offset-2 ring-offset-carbon-300 text-white transition-all"
      type={"search"}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Search
