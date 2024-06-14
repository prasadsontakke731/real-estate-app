/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from "./routes/layout/Layout";
import HomePage from "./routes/homePage/HomePage";
import ListPage from "./routes/listPage/ListPage";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "list",
          element: <ListPage />
        },

      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App