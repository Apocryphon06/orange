import React from 'react'

function Card({color}:any) {
    return (
        <div className={`${color} lg:w-[420px] lg:h-[500px] w-[300px] h-[400px] rounded-xl shadow-md font-robotoMedium lg:text-2xl text-xl p-10 pt-[100px]`} >
            <p>" I love oranges!!</p>
            <p>tasty mmmmmmm....."</p>

            <p className='relative lg:top-[200px] top-[140px] flex flex-row gap-5 lg:text-xl text-lg font-robotoMedium'>Dina Korkmazova</p>
        </div>

    )
}

export default Card