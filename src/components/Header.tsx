import React from "react"
import Search from "./Search"

const Header = () => {
  return (
    <div className="bg-carbon-300 overflow-hidden rounded-b-[1.4rem]">
      <header className="text-smoke grid grid-cols-[1fr,25rem]   items-center max-w-6xl m-[0_auto] justify-between ">
        <h1 className="text-[4rem] place-self-start">Charto</h1>
        <Search placeholder="Pesquisar..." />
        <span className="border-t-2 border-carbon-100 col-span-full"></span>
        <nav className="col-span-full justify-self-center  text-xl p-2">
          <ul className="flex gap-4 ">
            <li className="cursor-pointer hover:text-[#cdcdcd] transition-colors">
              Descobrir
            </li>
            <span className="w-[.1rem] bg-carbon-100"></span>
            <li className="cursor-pointer hover:text-[#cdcdcd] transition-colors">
              Perfil
            </li>
            <span className="w-[.1rem] bg-carbon-100"></span>
            <li className="cursor-pointer hover:text-[#cdcdcd] transition-colors">
              Favoritos
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
