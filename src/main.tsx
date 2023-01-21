import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./style.css"
import Header from "./components/Header"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
    <div className="font-outfit text-smoke ">
      <Header />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
)
