import React from 'react'
import Header from '../Header'

import hero from '../../assets/images/hero.svg'
import Button from '../common/Button'
import Input from '../common/Input'

function Home() {
    return (
        <div>
            <Header />
            <div className='grid lg:grid-flow-col grid-flow-row lg:gap-[97px] lg:w-[1206px] justify-center m-auto lg:mt-[120px] p-[35px]'>
                <div className='lg:order-1 order-last lg:text-start text-center'>
                    <p className='py-2 lg:text-5xl text-3xl font-robotoBold'>Subscribe today and get
                        <span className='lg:block'>  notified first when we</span>
                        <span className='lg:block'>  launch Orange app!</span>
                        </p>
                    <p className='lg:w-[563px] pt-[25px] text-base font-robotoMedium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi.</p>

                    <div className='pt-[40px] flex lg:flex-row flex-col lg:justify-start justify-center items-center gap-5'>
                        <Input placeholder='Your email address' width="w-[368px] h-[60px]"/>
                        <Button label="Subscribe now" width="w-[168px] h-[60px]"/>
                    </div>
                </div>

                <img className='lg:order-2' src={hero} alt={hero}/>


            </div>
        </div>
    )
}

export default Home