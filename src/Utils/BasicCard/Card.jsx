import React from 'react'

const Card = ({image}) => {
  return (
      <div className='w-full flex items-center justify-center h-[322px] px-4 lg:w-[350px] bg-[#171616] rounded-2xl shadow-xl'>
          <div className="space-y-10">
              <img src={image} alt="Sign" />
              <div className='flex justify-between items-center'>
                  <div className="">
                      <h4 className='text-lg'>More about me</h4>
                      <h1 className='text-2xl text-white'>Credentials</h1>
                  </div>
                  <img src="assets/images/icon.svg" alt="Button" />
              </div>
          </div>
      </div>
  )
}

export default Card