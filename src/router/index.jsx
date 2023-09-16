import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Create from "../pages/Create.jsx";
import Edit from "../pages/Edit.jsx"
import Lang from "../pages/Lang.jsx";
import Contacts from "../pages/Contacts.jsx";

export const router = createBrowserRouter ([
    
  /*   {
        path: "/",
        element: <Start/>
    }, */
    {
        path: "/projects",
        element: <Home/>
    },
    {
        path: "/projects/create",
        element: <Create/>  
    }, 
{
        path: "/projects/edit/:id",
        element: <Edit/>  
    }, 
    {
        path: "/languages",
        element: <Lang/>  
    },
    {
        path: "/contacts",
        element: <Contacts/>  
    }


]);

export default router
