import React from "react"
import Search from "./Search"

const Header = () => {
  return (
    <div className="bg-carbon-300 overflow-hidden ">
      <header className="text-smoke grid grid-cols-[1fr,25rem] items-center max-w-6xl m-[0_auto] justify-between">
        <h1 className="text-[4rem]">Charto</h1>
        <Search placeholder="Pesquisar..." />
        <span className="border-t-[2px] border-carbon-100 col-span-full "></span>
        <nav className="col-span-full justify-self-center  text-xl py-3">
          <ul className="flex gap-4 ">
            <li className="cursor-pointer hover:text-[#cdcdcd] transition-colors">
              Descobrir
            </li>
            <span className="w-[2px] bg-carbon-100"></span>
            <li className="cursor-pointer hover:text-[#cdcdcd] transition-colors">
              Perfil
            </li>
            <span className="w-[2px] bg-carbon-100"></span>
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
