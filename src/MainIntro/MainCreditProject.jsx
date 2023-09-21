import React from 'react'
import img1 from '../../public/assets/images/sign.png';
import img2 from '../../public/assets/images/my-works.png';
import Card from '../Utils/SmallCard/Card';


const MainCreditProject = () => {
    return (
        <div>
            <div className="card card-compact w-full bg-[#171616] shadow-xl py-4 text-center rounded-[50px]">
                <h1 className='text-3xl text-white font-bold'>AlgoWebBot</h1>
            </div>

            <div className='flex flex-col justify-center items-center mt-10 gap-10 lg:flex-row'>

                <Card image={img1} />
                <Card image={img2} />
                {/* <Card image={img1} />
                <Card image={img2} /> */}
            </div>
        </div>
    )
}

export default MainCreditProject