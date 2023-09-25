import React from 'react'
import Card from '../Utils/SmallCard/Card'
import { Link } from 'react-router-dom'

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
                                <img src="/assets/images/star-2.png" alt="" className='h-20 w-20' />
                                <h1 className='text-7xl text-white font-bold'>SELF-SUMMARY</h1>
                                <img src="/assets/images/star-2.png" alt="" className='h-20 w-20' />
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className="card card-compact py-4 bg-[#171717] h-[340px] rounded-[50px]">
                            <div className='flex justify-start px-10 items-center gap-10'>
                                <div>
                                    <h1 className='h-16 w-[3px] rounded-lg bg-[#847878] -mt-4 ml-10'></h1>
                                    <img src="../../public/assets/images/star1.svg" alt="" className='h-20 -mt-[22px]' />
                                    <h1 className="text-white text-6xl font-lite mb-6">Md. Eleush Zahan Shimul</h1>
                                    <p className='text-xl font-medium text-[#716f6f]'>I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.<br/>I am a San francisco-based product designer with a focus on web design, illustration.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex gap-10'>
                <div className="card w-1/2 card-compact py-4 bg-[#171717] h-[450px] rounded-[50px]">
                    <div className='mx-14 my-8'>
                        <h1 className="text-white text-2xl text-bold mb-8">Experience</h1>
                        <p className='text-[#716f6f] text-xl my-4 text-bold'>2022 - 2023</p>
                        <div>
                            <p className="text-white text-xl text-bold">Full Stack Web Development with Web Security</p>
                            <p className='text-[#716f6f] text-lg my-4 text-bold'>Platform: Programming Hero</p>
                        </div>
                    </div>
                    <div className='mx-14'>
                        <p className='text-[#716f6f] text-xl my-4 text-bold'>2020 - 2022</p>
                        <div>
                            <p className="text-white text-xl text-bold">Learning Graphis Design & Cyber Security</p>
                            <p className='text-[#716f6f] text-lg my-4 text-bold'>Platform: Stack Overflow, Youtube, Google</p>
                        </div>
                    </div>
                </div>

                <div className="card w-1/2 card-compact py-4 bg-[#171717] h-[450px] rounded-[50px]">
                    <div className='mx-14 my-8'>
                        <h1 className="text-white text-2xl text-bold mb-8">Education</h1>
                        <p className='text-[#716f6f] text-xl my-4 text-bold'>2020 - Ongoing</p>
                        <div>
                            <p className="text-white text-xl text-bold">B'sc Engineering in Computer Science & Engineering</p>
                            <p className='text-[#716f6f] text-lg my-4 text-bold'>Bangabandhu Sheikh Mujibur Rahman Science & Technology University</p>
                        </div>
                    </div>
                    <div className='mx-14'>
                        <p className='text-[#716f6f] text-xl my-4 text-bold'>Cooming Soon</p>
                        <div>
                            <p className="text-white text-xl text-bold">Comming Soon. Pray For me.</p>
                            <p className='text-[#716f6f] text-lg my-4 text-bold'>Comming Soon</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-between items-center mb-10'>
                    <Card image="assets/images/gfonts.png" />
                    <div className='w-1/2 h-[320px] bg-[#171717] p-4 rounded-[50px]'>
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
                    <Card image="assets/images/gfonts.png" />
                </div>
            </div>

        </div>
    )
}

export default About