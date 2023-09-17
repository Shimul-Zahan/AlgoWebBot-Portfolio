import React from 'react'
import Card from '../../../Utils/BasicCard/Card'
import blogIamge from '../../../../public/assets/images/gfonts.png'

const MainProject = () => {
    return (
        <div className='flex justify-between items-center mb-10'>
            <Card image={blogIamge} />

            <div className='w-1/2 h-[320px] bg-[#171717] rounded-2xl p-4'>
                <div className="space-y-10">
                    <img src="assets/images/bg1.png" alt="Sign" className='h-[150px] w-full' />
                    <div className='flex justify-between items-center'>
                        <div className="">
                            <h4 className='text-lg'>More about me</h4>
                            <h1 className='text-2xl text-white'>Credentials</h1>
                        </div>
                        <img src="assets/images/icon.svg" alt="Button" />
                    </div>
                </div>
            </div>
            <Card image={blogIamge} />
        </div>
    )
}

export default MainProject