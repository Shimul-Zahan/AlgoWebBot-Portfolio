import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div className='bg-[#0F0F0F] pb-5'>
      <div className='container mx-auto'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Home