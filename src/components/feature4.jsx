import React from 'react'
import stackarea from '../Images/stack.png'

const feature4 = () => {
  return (
    <div className='max-w-[1350px] h-[574px] justify-between items-center mx-auto py-14 flex flex-col'>
        <div className='mx-auto w-full max-w-[600px] items-center flex flex-col'>
           <h1 className='flex font-bold text-[13px] text-indigo-500 text-center'>TRANSACTION</h1>
           <h2 className='flex font-bold text-[40px] text-center'>A better way to send money</h2>
           <p className='flex text-[17px] text-center leading-[180%] opacity-50'>Amet minim mollit non deserant ullamaco est sit aliqua dolor do amet sint, Vellit officia 
           consiquet duis enim vellit mollit</p>
        </div>

        <div className='grid grid-cols-2 gap-4 mx-auto max-w-[1080px] mt-20'>

        <div className='w-[574px]'>
        <img className='w-[30px] h-[30px]' src={stackarea}></img>
        <div>

            <h1 className='text-[20px] font-bold leading-[180%] py-2'>Competative exchange rate</h1>
            <p className='text-[15px] leading-[180%] opacity-50'>Amet minim mollit non deserant ullamaco est sit aliqua dolor do amet sint, Vellit officia 
           consiquet duis enim vellit mollit</p>
        </div>
        </div>


        <div className='w-[574px]'>
        <img className='w-[30px] h-[30px]' src={stackarea}></img>
        <div>

            <h1 className='text-[20px] font-bold leading-[180%] py-2'>No hidden fees</h1>
            <p className='text-[15px] leading-[180%] opacity-50'>Amet minim mollit non deserant ullamaco est sit aliqua dolor do amet sint, Vellit officia 
           consiquet duis enim vellit mollit</p>
        </div>
        </div>

        <div className='w-[574px]'>
        <img className='w-[30px] h-[30px]' src={stackarea}></img>
        <div>

            <h1 className='text-[20px] font-bold leading-[180%] py-2'>Transfer are instant</h1>
            <p className='text-[15px] leading-[180%] opacity-50'>Amet minim mollit non deserant ullamaco est sit aliqua dolor do amet sint, Vellit officia 
           consiquet duis enim vellit mollit</p>
        </div>
        </div>


        <div className='w-[574px]'>
        <img className='w-[30px] h-[30px]' src={stackarea}></img>
        <div>

            <h1 className='text-[20px] font-bold leading-[180%] py-2'>Mobile notifications</h1>
            <p className='text-[15px] leading-[180%] opacity-50'>Amet minim mollit non deserant ullamaco est sit aliqua dolor do amet sint, Vellit officia 
           consiquet duis enim vellit mollit</p>
        </div>
        </div>
            
        </div>
    </div>
  )
}

export default feature4