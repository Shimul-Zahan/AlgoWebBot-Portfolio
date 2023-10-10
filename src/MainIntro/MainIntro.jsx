import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const MainIntro = () => {
  return (
      <div className="card card-compact w-full bg-[#171616] shadow-xl rounded-[50px]">
          <div className='w-full flex flex-col justify-around items-center lg:flex-row'>
              <figure>
                  <img src="/images/WhatsApp Image 2023-10-11 at 01.55.51.jpeg" alt="Shoes" className='bg-[#5f5f5f] h-[350px] m-10 rounded-tl-[50px] rounded-br-[50px]' />
              </figure>
              <div className='w-1/2 space-y-4'>
                  <p className='text-2xl text-[#5f5f5f] font-bold'>I am Web Developer</p>
                  <TypeAnimation
                      sequence={[
                          // Same substring at the start will only be typed once, initially
                          'Hello...',
                          1000,
                          'I am...',
                          1000,
                          'AlgoWebBot...',
                          1000,
                      ]}
                      speed={50}
                      style={{ fontSize: '3rem', fontWeight:'bold', color: 'white' }}
                      repeat={Infinity}
                  />
                  <p className='text-lg text-[#5f5f5f] font-thin'>Passionate web developer with a flair for elegant design and robust functionality, transforming innovative ideas into seamless online experiences. Crafting code that merges creativity with precision to bring digital visions to life.</p>
                  <a href="#" className='flex justify-end pr-10'>
                      <img src="assets/images/icon.svg" alt="Button" className='text-[#5f5f5f]'/>
                  </a>
              </div>
          </div>
      </div>
  )
}

export default MainIntro