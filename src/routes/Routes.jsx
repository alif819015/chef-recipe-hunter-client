import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Nav from "../page/shared/Nav";
import Home from "../home/Home";
import LogIn from "../home/LogIn";
import Register from "../home/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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

      ]
    },
  ]);
export default router;