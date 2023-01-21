import React from "react"

interface ISearch {
  value?: string
  onChange?: React.ChangeEventHandler
  placeholder: string
}

const Search = ({ value, onChange, placeholder }: ISearch) => {
  return (
    <input
      type={"search"}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Search
