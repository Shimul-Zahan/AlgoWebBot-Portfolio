import React from 'react'

const MainIntro = () => {
  return (
      <div className="card card-compact w-full bg-[#171616] shadow-xl">
          <div className='w-full flex flex-col justify-around items-center lg:flex-row'>
              <figure>
                  <img src="assets/images/me.png" alt="Shoes" className='bg-[#5f5f5f] h-[350px] m-10 rounded-tl-[50px] rounded-br-[50px]' />
              </figure>
              <div className='w-1/2 space-y-4'>
                  <p className='text-2xl text-[#5f5f5f] font-bold'>I am Web Developer</p>
                  <h1 className='text-5xl text-white font-bold'>AlgoWebBot</h1>
                  <p className='text-xl text-[#5f5f5f]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <a href="#" className='flex justify-end pr-10 pt-10'>
                      <img src="assets/images/icon.svg" alt="Button" className='text-[#5f5f5f]'/>
                  </a>
              </div>
          </div>
      </div>
  )
}

export default MainIntro