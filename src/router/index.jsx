import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home/>
    },
/*     {
        path: "/create",
        element: <Create/>  
    }, 
{
        path: "/edit/:id",
        element: <Edit/>  
    }, */
]);

export default router
