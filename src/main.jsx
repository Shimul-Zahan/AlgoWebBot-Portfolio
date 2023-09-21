import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import myRouter from './Router/Router.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={myRouter}></RouterProvider>
)
