import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
      <div className='container mx-auto'>
          <Header />
          <Outlet />
          <Footer />
    </div>
  )
}

export default Home