import React from 'react'
import {createBrowserRouter} from "react-router";
import Root from '../pages/Root';
import Errorpage from '../pages/errorpage/Errorpage';
import Home from '../pages/home/Home';

const  router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Errorpage></Errorpage>,
    children: [
        {
            index: true,
            path:"/",
            Component:Home,
        }
    ]
  },
]);
  
export default router;
