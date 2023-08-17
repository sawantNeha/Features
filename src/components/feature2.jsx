import React from 'react'
import carton from '../Images/feature2image.png'
import {FiCheck} from 'react-icons/fi'

const feature2 = () => {
  return (
    <div className='flex flex-row max-w-[1200px] w-full justify-between mx-auto px-7 mt-20'>

    {/* Left Section */}
        <div className='w-[516px] h-[522px]'>
          <h1 className='text-[40px] font-bold leading-[120%]'>
               Digital design is like painting ,except the paint never dies.
          </h1>

          <p className='text-[20px] leading-[160%] opacity-40 mt-8'>
             Simplify your integration using Stripe Checkout. It dynamically adapts to your costomers device and 
             location to increase conversion.
          </p>

          <div class="w-[80] h-[0.5px] bg-gray-400 mx-auto mt-10 mb-6 opacity-50"></div>

          
            <ul className='mt-10 leading-[240%] '>
                <li className='flex items-center space-x-2'>  
                    <FiCheck color='green' size={25}/>
                    <span>Upgrade your costomer experiance instantly</span>
                    
                </li>
                <li className='flex items-center space-x-2'>
                    <FiCheck color='green' size={25}/>
                    <span>Retain more, happier costomers</span>
                </li>

                <li className='flex items-center space-x-2'>
                    <FiCheck color='green' size={25}/>
                    <span>Start with done-for-you account setup</span>
                </li>
            </ul>
          

        </div>

        {/* Right section */}

        <img className='h-[551px] w-[552px]' src={carton}></img>
    </div>
  )
}

export default feature2