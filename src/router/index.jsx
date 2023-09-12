import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Create from "../pages/Create.jsx";
import Edit from "../pages/Edit.jsx"

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
]);

export default router
