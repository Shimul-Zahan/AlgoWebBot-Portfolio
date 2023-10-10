import React from 'react'
import img1 from '../../public/assets/images/sign.png';
import img2 from '../../public/assets/images/my-works.png';
import Card from '../Utils/SmallCard/Card';
import Marquee from "react-fast-marquee";


const MainCreditProject = () => {
    return (
        <div>
            <div className="w-full bg-[#171616] shadow-xl h-16 p-4 flex justify-center items-center text-center rounded-[50px]">
                <h1 className='text-2xl text-white font-bold'>
                    <Marquee>Welcome to AlgoWebBot Portfolio...</Marquee>
                </h1>
            </div>

            <div className='flex flex-col justify-between items-center mt-10 gap-16 lg:flex-row'>

                <Card image={img1} title={'Versatile'}  />
                <Card image={img2} title={ 'Project showcase' } />
                {/* <Card image={img1} />
                <Card image={img2} /> */}
            </div>
        </div>
    )
}

export default MainCreditProject