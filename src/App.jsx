import { createBrowserRouter } from "react-router"
import Authentication from "./pages/Authentication"
import SignUp from "./pages/SignUp"
import { RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Authentication/>,
    children: [
      {
        path: 'signup',
        element: <SignUp />,
      }
    ]
  }
])

const App = () => {


  return (
    <RouterProvider router={router} />
  )
}

export default App
