import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./style.css"
import Home from "./pages/Home"
import AlbumStorage from "./context/AlbumContext"
import Query from "./pages/Query"
import Discovery from "./pages/Discovery"

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
        element: <Discovery />,
        path: "/descobrir"
      },
      {
        element: <Query />,
        path: "/pesquisa"
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
