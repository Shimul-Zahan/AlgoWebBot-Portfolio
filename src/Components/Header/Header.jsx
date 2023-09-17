import React from 'react'

const Header = () => {
    return (
        <div className="navbar text-[4f4949] py-8 mb-20">
            <div className="navbar-start">
                <img src="assets/images/logo.svg" alt="logo" className='h-8' />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#5f5f5f] text-xl gap-10">
                    <li className='text-white'><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Works</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#5f5f5f] text-xl font-bold capitalize">Let's Talk</a>
            </div>
        </div>
    )
}

export default Header