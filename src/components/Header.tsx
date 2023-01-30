import React from "react"
import { Link } from "react-router-dom"
import { NavLink, useNavigate, useNavigation } from "react-router-dom"
import { AlbumContext } from "../context/AlbumContext"
import Search from "./Search"

const Header = () => {
  const { handleSearchValue } = React.useContext(AlbumContext)
  const nav = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    if (
      e.target instanceof HTMLFormElement &&
      e.target[0] instanceof HTMLInputElement
    ) {
      e.preventDefault()
      if (!e.target[0].value.trim()) return
      handleSearchValue(e.target[0].value)
      nav("/pesquisa")
    }
  }

  return (
    <div className="bg-carbon-300 overflow-hidden absolute w-full top-0 z-10">
      <header className="text-smoke grid md:grid-cols-[1fr_0.5fr] grid-cols-[1fr_1fr]  items-center max-w-7xl m-[0_auto] justify-between px-4 py-2">
        <Link to={"/"} className="block">
          <h1 className="text-logo">Charto</h1>
        </Link>
        <form onSubmit={handleSubmit}>
          <Search placeholder="Pesquisar..." />
        </form>
        <span className="border-t-[2px] border-carbon-100 col-span-full "></span>
        <nav className="col-span-full justify-self-center  text-xl pt-2 ">
          <ul className="flex gap-x-1 ">
            <li className="cursor-pointer hover:text-[#cdcdcd] transition-colors px-2 py-1">
              <NavLink to={"descobrir"}>Descobrir</NavLink>
            </li>
            <span className="w-[2px] bg-carbon-100"></span>
            <li className="cursor-pointer hover:text-[#cdcdcd] transition-colors px-2 py-1 ">
              <NavLink to={"perfil"}>Perfil</NavLink>
            </li>
            <span className="w-[2px] bg-carbon-100"></span>
            <li className="cursor-pointer hover:text-[#cdcdcd] transition-colors px-2 py-1">
              <NavLink to={"favoritos"}>Favoritos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
