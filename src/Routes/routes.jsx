import React from 'react'
import {createBrowserRouter} from "react-router";
import Root from '../pages/Root';
import Errorpage from '../pages/errorpage/Errorpage';
import Home from '../pages/home/Home';
import Apps from '../pages/apps/Apps';
import Installation from '../pages/Installation/Installation';

const  router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Errorpage></Errorpage>,
    hydrateFallbackElement:<p>Loadding......</p>,
    children: [
        {
            index: true,
            path:"/",
            Component:Home,
            loader:() => fetch('./allApps.json'), 
        },  
        {
            path:"/Apps",
            Component:Apps,  
        },
        {
            path:"/Installation",
            Component:Installation,  
        }
    ]
  },
]);
  
export default router;
