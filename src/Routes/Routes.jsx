import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import ServiceDetails from "../Components/Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "../Components/Pages/PrivateRoot/PrivateRoot";
import Contacts from "../Components/Pages/Contacts/Contacts";
import Blogs from "../Components/Pages/Blogs/Blogs";
import Profile from "../Components/Pages/Profile/Profile";
import Blogdetails from "../Components/Pages/BlogDetails/Blogdetails";


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
      {
        path:'/contacts',
        element:<Contacts></Contacts>
    },
    {
      path:'/blogs',
      element:<Blogs></Blogs>,
      loader:()=>fetch('/Blogs.json')
  },
  {
    path:'/profile',
    element:<PrivateRoute><Profile></Profile></PrivateRoute>
},
{
          path:'blogdetails/:id',
          element:<PrivateRoute><Blogdetails></Blogdetails></PrivateRoute>,
          loader:()=>fetch('/Blogs.json')
}
      ]
    },
  ]);

  export default router