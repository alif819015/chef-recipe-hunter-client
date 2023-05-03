import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Nav from "../page/shared/Nav";
import Home from "../home/Home";
import LogIn from "../home/LogIn";
import Register from "../home/Register";
import Recipes from "../page/Recipes";
import PrivateRoute from "../private/PrivateRoute";
import Blogs from "../home/Blogs";
import Error from "../page/shared/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            
        },
        {
            path:'nav',
            element: <Nav></Nav>
        },
        {
            path:'/login',
            element: <LogIn></LogIn>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path:'/chef/:id',
            element: <PrivateRoute><Recipes></Recipes></PrivateRoute>
        },
        
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: '/error',
            element: <Error></Error>
        },

      ]
    },
  ]);
export default router;