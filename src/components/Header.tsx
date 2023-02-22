import React from 'react'

function Header() {
  return (
    <div className='flex lg:flex-row flex-col lg:justify-between justify-center gap-[14px] items-center p-[35px] lg:w-[1206px] m-auto text-white '>
        <p className='text-2xl uppercase cursor-pointer font-robotoBlack'>orange</p>

        <div className='flex flex-row items-center lg:gap-[32px] gap-[34px] text-lg font-robotoMedium'>
            <p className='cursor-pointer'>Benefit</p>
            <p className='cursor-pointer'>Pricing</p>
            <p className='cursor-pointer'>Testimonials</p>
        </div>
    </div>
  )
}

export default Header