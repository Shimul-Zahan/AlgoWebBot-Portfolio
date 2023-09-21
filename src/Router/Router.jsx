import React from 'react'
import {
    createBrowserRouter
} from "react-router-dom";
import Home from '../Home/Home';
import About from '../AboutPage/About';
import Contact from '../ContactPage/Contact'
import Work from '../WorkPage/Work'
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
                path: '/work',
                element: <Work />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])

export default myRouter