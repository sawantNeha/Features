import React from 'react'
import phone from '../Images/phone.png'
import rectangle from '../Images/Rectangle 1.png'

const feature1 = () => {
  return (

    <div className='flex flex-row w-full justify-between max-w-[1200px] items-center mx-auto px-7 mt-20'>


    {/* left section */}
    <div className='w-[456px] h-[288px] '>
      <h1 className='font-bold text-[40px] leading-[120%]'>
        Hosted Payment Page
      </h1>

      <p className='text-[18px] leading-[180%] mt-4 opacity-40 font-Poppins'>
        Simplify your integration using stripe checkout.It dynamically adapts to your costomer device and location to increase conversion and support
        coupons,tax rates and more.
      </p>

      <button className='mt-4 bg-indigo-600 px-[16px] py-[7px] rounded-md text-white'>
        Read More
      </button>
    </div>
         {/* right section */}
    <div>
      <img className='absolute w-[500px] h-[565px] right-32 top-0' src={phone}/>
      <img className='absolute w-[550px] h-[150px] top-80 right-32 -z-10' src={rectangle}/>
    </div>

    </div>
    
  )
}

export default feature1