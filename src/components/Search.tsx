import React from "react"

interface ISearch {
  value?: string
  onChange?: React.ChangeEventHandler
  placeholder: string
}

const Search = ({ value, onChange, placeholder }: ISearch) => {
  return (
    <div className="flex rounded-primary focus:outline-none focus:ring-2 hover:ring-2  ring-smoke-100  text-white transition-all overflow-hidden">
      <input
        className="bg-carbon-400  placeholder:text-carbon-100 w-full px-2 py-1  min-h-[2rem] h-9 outline-none "
        type={"search"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <button className="bg-carbon-400 px-2 py-1 hover:bg-carbon-200 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 stroke-smoke-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  )
}

export default Search
