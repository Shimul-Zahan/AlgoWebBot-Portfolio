import React from 'react'
import blogIamge from '../../public/assets/images/gfonts.png'
import Card from '../Utils/SmallCard/Card'
import { Link } from 'react-router-dom'

const MainProject = () => {
    return (
        <div>
            <div className='flex justify-between items-center flex-col lg:flex-row mb-10'>
                <Card image={blogIamge} />

                <div className='w-full lg:w-1/2 h-[320px] bg-[#171717] rounded-[50px] px-10 py-12'>
                    <div className="space-y-10">
                        <div className='flex justify-around items-center pt-8 mb-12'>
                            <img src="/icon/designer.png" alt="Sign" className='w-16' />
                            <img src="/icon/js.png" alt="Sign" className='w-16' />
                            <img src="/icon/node-js.png" alt="Sign" className='w-16' />
                            <img src="/icon/structure.png" alt="Sign" className='w-16' />
                        </div>
                        <div className='flex justify-between items-center mr-14'>
                            <div className="mx-14 space-y-2">
                                <h4 className='text-xl text-[#716f6f]'>More about me</h4>
                                <h1 className='text-3xl font-bold text-white'>Specialized Skills</h1>
                            </div>
                            <img src="assets/images/icon.svg" alt="Button" />
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center h-[322px] px-4 lg:w-[350px] bg-[#171616] rounded-[50px] shadow-xl'>
                    <div className="space-y-10">
                        <div className='flex justify-center items-center p-2 rounded-full transition-all 0.5s ease-in-out cursor-pointer'>
                            <img src="/icon/user.png" alt="profile-image" className='w-28' />
                        </div>
                        <div className='flex justify-between items-center gap-8'>
                            <div className="">
                                <h4 className='text-lg text-[#716f6f]'>Stay With Me</h4>
                                <h1 className='text-xl text-white'>Profile</h1>
                            </div>
                            <img src="assets/images/icon.svg" alt="Button" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16'>
                <div className='flex justify-between items-center mb-10'>
                    <div className='w-full h-[320px] bg-[#171717] p-4 rounded-[50px]'>
                        <div className='flex justify-around items-center h-full'>
                            <div className='text-center bg-[#1c1c1c] py-8 px-6 rounded-[30px] space-y-2'>
                                <h1 className='font-bold text-5xl text-white'>01</h1>
                                <p className='text-lg font-thin text-[#716f6f]'>Year <br /> Experience</p>
                            </div>
                            <div className='text-center bg-[#1c1c1c] py-8 px-6 rounded-[30px] space-y-2'>
                                <h1 className='font-bold text-5xl text-white'>+10</h1>
                                <p className='text-lg font-thin text-[#716f6f]'>Client <br /> Worldwide</p>
                            </div>
                            <div className='text-center bg-[#1c1c1c] py-8 px-6 rounded-[30px] space-y-2'>
                                <h1 className='font-bold text-5xl text-white'>+100</h1>
                                <p className='text-lg font-thin text-[#716f6f]'>Total <br /> Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center mb-10'>
                    <div className='w-full h-[320px] bg-[#171717] p-4 rounded-[50px]'>
                        <div className="space-y-10">
                            {/* <img src="assets/images/bg1.png" alt="Sign" className='h-[150px] w-full' /> */}
                            <Link to='/contact'>
                                <div className='flex justify-between items-end'>
                                    <div className='mx-10'>
                                        <h1 className='h-16 w-[3px] rounded-lg bg-[#847878] -mt-4 ml-10'></h1>
                                        <img src="../../public/assets/images/star1.svg" alt="" className='h-20 -mt-[22px]' />
                                        <h1 className="text-white text-6xl font-bold mt-8">Let's<br />Work <span className='text-[#454585]'>Together</span></h1>
                                    </div>
                                    <img src="assets/images/icon.svg" alt="Button" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainProject