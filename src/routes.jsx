import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Index";
import ListUsers from "./pages/ListUsers";


const Router = createBrowserRouter([

   {
    path: '/',
    element: <Home/> 
   },

   {
    path: '/Lista-de-Usuarios',
    element: <ListUsers/>
   }
    
])

export default Router