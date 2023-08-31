import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full flex justify-around items-center text-white mt-10'>
            <div className='justify-center items-center text-center'>
                <h2 className='text-[20px] font-medium tracking-widest'> PodConnect </h2>
            </div>
            <div className='flex justify-evenly'>
                <button className='text-gray-300 text-[18px] font-medium'> Sign up </button>
                <button className='ml-5 text-black text-[18px] font-medium bg-white tracking-wide w-32 h-9 rounded-3xl'> Log in </button>
            </div>
        </div>
    )
}

export default Navbar