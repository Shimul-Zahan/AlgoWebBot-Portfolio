import React from 'react'
import {
    createBrowserRouter
} from "react-router-dom";
import Home from '../Home/Home';
import About from '../AboutPage/About';
import Contact from '../ContactPage/Contact'
import HomeStructure from '../HomeStructure/HomeStructure';

const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <HomeStructure />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])

export default myRouter