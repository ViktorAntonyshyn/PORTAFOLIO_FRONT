import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Create from "../pages/Create.jsx";
import Edit from "../pages/Edit.jsx"
import Lang from "../pages/Lang.jsx";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/create",
        element: <Create/>  
    }, 
{
        path: "/edit/:id",
        element: <Edit/>  
    }, 
    {
        path: "/languages",
        element: <Lang/>  
    }
]);

export default router
