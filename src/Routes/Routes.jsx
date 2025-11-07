import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />, 
        loader: () => fetch('/data.json')
      },
      {
        path: '/apps',
        element: <Apps/>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/apps/:id',
        element: <AppDetails/>,
        loader: () => fetch('/data.json')
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
