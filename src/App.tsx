import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"

const App = () => {
  return (
    <div className="font-outfit text-smoke-100 ">
      <Header />
      <main className="container container-style">
        <Outlet />
      </main>
    </div>
  )
}

export default App
