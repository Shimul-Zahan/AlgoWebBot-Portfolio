import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <div className="navbar text-[4f4949] py-8 mb-20">
            <div className="navbar-start">
                <Link to='/'>
                    <h1 className='text-4xl text-white font-bold'>Al<span className='text-yellow-500'>go</span>We<span className='text-yellow-500'>bB</span>ot</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#5f5f5f] text-xl gap-20">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/work'>Work</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/contact' className="btn bg-yellow-500 text-[#5f5f5f] text-xl font-bold capitalize">Let's Talk</Link>
            </div>
        </div>
    )
}

export default Header