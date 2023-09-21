import React from 'react'
import Card from '../Utils/SmallCard/Card'

const About = () => {
    return (
        <div className="card card-compact w-full shadow-xl space-y-10">
            <div className='flex gap-10'>
                <div className='w-1/3 flex flex-col bg-[#171717] rounded-[50px] justify-around items-center lg:flex-row'>
                    <figure>
                        <img src="assets/images/me.png" alt="Shoes" className='bg-[#5f5f5f] h-[400px] m-10 rounded-[50px]' />
                    </figure>
                </div>

                <div className='flex flex-col w-2/3 gap-10'>
                    <div className=''>
                        <div className="card card-compact py-4 text-center rounded-[50px]">
                            <div className='flex justify-center items-center gap-10'>
                                <img src="../../public/assets/images/star-2.png" alt="" className='h-20 w-20' />
                                <h1 className='text-7xl text-white font-bold'>SELF-SUMMARY</h1>
                                <img src="../../public/assets/images/star-2.png" alt="" className='h-20 w-20' />
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className="card card-compact py-4 bg-[#171717] text-center h-[340px]">
                            <div className='flex justify-center items-center gap-10'>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex gap-10'>
                <div className="card w-1/2 card-compact py-4 bg-[#171717] text-center h-[450px]">
                    <div className='flex justify-center items-center gap-10'>

                    </div>
                </div>
                <div className="card w-1/2 card-compact py-4 bg-[#171717] text-center h-[450px]">
                    <div className='flex justify-center items-center gap-10'>

                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-between items-center mb-10'>
                    <Card image="assets/images/gfonts.png" />

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
                    <Card image="assets/images/gfonts.png" />
                </div>
            </div>

        </div>
    )
}

export default About