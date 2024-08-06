import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Create from "../pages/Create.jsx";
import Edit from "../pages/Edit.jsx"
import Lang from "../pages/Lang.jsx";
import Contacts from "../pages/Contacts.jsx";
import ProjectManager from "../pages/ProjectManager.jsx";
import AboutMe from "../pages/AboutMe.jsx";
import Start from "../pages/Start.jsx";



export const router = createBrowserRouter ([
    
   {
        path: "/",
        element: <Start/>
    },
    {
        path: "/about",
        element: <AboutMe/>
    },
    {
        path: "/projects",
        element: <Home/>
    },
    {
        path: "/projects/manager",
        element: <ProjectManager/>
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
