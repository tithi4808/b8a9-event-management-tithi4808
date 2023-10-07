import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import ServiceDetails from "../Components/Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "../Components/Pages/PrivateRoot/PrivateRoot";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/service/:id',
          element:<PrivateRoute> <ServiceDetails></ServiceDetails> </PrivateRoute>,
          loader:()=>fetch('/Service.json')
      },
      ]
    },
  ]);

  export default router