import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./style.css"
import Home from './pages/index'
import AlbumStorage from "./context/AlbumContext"

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/favoritos"
      },
      {
        path: "/descobrir"
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AlbumStorage>
      <RouterProvider router={router} />
    </AlbumStorage>
  </React.StrictMode>
)
