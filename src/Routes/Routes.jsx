import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />, 
      },
      {
        path: '/apps',
        element: <Apps/>
      },
      {
        path: '/installation',
        element: <Installation/>
      },
      {
        path: "*",
        element: <Error/>

      }
    ],
  },
]);
