import React from 'react'

const Footbar = () => {
    return (
        <div className='w-full flex flex-col mt-36 ml-10'>
            <div className='text-white text-[15px] font-thin flex justify-between'>
                <h2> Legal </h2>
                <h2> Privacy </h2>
                <h2> Cookies </h2>
                <h2> About </h2>
            </div>
            <div className='text-white text-[20px] font-medium mt-7'>
                English
            </div>
        </div>
    )
}

export default Footbar