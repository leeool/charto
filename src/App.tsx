import React from "react"
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <main className="max-w-5xl m-[0_auto]">
      <Outlet />
    </main>
  )
}

export default App
