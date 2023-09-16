import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Create from "../pages/Create.jsx";
import Edit from "../pages/Edit.jsx"
import Lang from "../pages/Lang.jsx";
import Contacts from "../pages/Contacts.jsx";
import Project1 from "../pages/Project1.jsx";
import Project2 from "../pages/Project2.jsx";
import Project3 from "../pages/Project3.jsx";
import ProjectManager from "../pages/ProjectManager.jsx";
import AboutMe from "../pages/AboutMe.jsx";


export const router = createBrowserRouter ([
    
  /*   {
        path: "/",
        element: <Start/>
    }, */
    {
        path: "/about",
        element: <AboutMe/>
    },
    {
        path: "/projects",
        element: <Home/>
    },
    {
        path: "/projects/1",
        element: <Project1/>
    },
    {
        path: "/projects/2",
        element: <Project2/>
    },
    {
        path: "/projects/3",
        element: <Project3/>
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
