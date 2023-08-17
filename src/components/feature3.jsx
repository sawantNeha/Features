import React from 'react'
import groupimage from '../Images/feature3image.png'


const feature3 = () => {
  return (
    <div className='w-[1350px] h-[500px] bg-blue-50 mt-10 mx-auto rounded-xl' >
        <div className='flex flex-row justify-between items-center max-w-[1200px] w-full mx-auto px-7 '>
            {/* left Section */}
            <div className='w-[454px] h-[312px] mt-10'>
                <h1 className='text-[40px] leading-[140%] font-bold'>
                   Instant emails &
                   Postal delivery.
                </h1>

                <p className='text-[16px] leading-[160%] mt-4 opacity-50'>
                 Simplify your integration using Stripe Checkout. It dynamically adapts to your costomers device and 
                 location to increase conversion.
                </p>

                <button className='mt-4 bg-indigo-600 py-[7px] px-[16px] rounded-md text-white '>Get Started</button>
            </div>

            <img className='w-[551px] h-[597px]' src={groupimage}></img>
        </div>
    </div>
  )
}

export default feature3