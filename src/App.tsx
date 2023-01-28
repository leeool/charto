import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"

const App = () => {
  return (
    <div className="font-outfit text-smoke-100 ">
      <Header />
      <main className="max-w-7xl m-[0_auto] mt-10 px-4">
        <Outlet />
      </main>
    </div>
  )
}

export default App
