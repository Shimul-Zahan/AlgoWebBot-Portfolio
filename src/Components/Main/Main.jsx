import React from 'react'
import MainIntro from './MainIntro/MainIntro'
import MainCreditProject from './MainIntro/MainCreditProject'
import MainProject from './MainProject/MainProject'

const Main = () => {
  return (
    <main>
      <div className='flex flex-col justify-between gap-10 lg:flex-row'>
        <div className='w-full lg:w-1/2'>
          <MainIntro />
        </div>
        <div className='w-full lg:w-1/2'>
          <MainCreditProject />
        </div>
      </div>
      <div className='mt-10'>
        <MainProject />
      </div>
    </main>
  )
}

export default Main