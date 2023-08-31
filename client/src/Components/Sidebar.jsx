import React from 'react'

const Sidebar = () => {
    return (
        <div className='w-3/12 text-white font-sans mt-5 ml-7'>
            <div className='w-full h-36'>
                <div className='flex '>
                    <img src="src/assets/home.png" alt="home" className='w-8 mt-4 ml-5'/>
                    <h2 className='mt-5 ml-5 text-[18px] font-medium'> Home </h2>
                </div>
                <div className='flex'>
                    <img src="src/assets/search.png" alt="home" className='w-6 h-6 mt-7 ml-6'/>
                    <h2 className='mt-6 ml-5 text-[18px] font-medium'> Search </h2>
                </div>
            </div>

            <div className='w-full'>
                <div className='w-full flex justify-between'>
                    <div className='flex'>
                        <img src="src/assets/books.png" alt="books" className='w-8 ml-4 mt-3' />
                        <h2 className='mt-3.5 ml-5 text-[18px] font-medium'> Your Library </h2>
                    </div>
                    <div className='mt-3.5  text-[24px] font-medium'>
                        +
                    </div>                    
                </div>

                <div className='w-full flex flex-col mt-10 ml-5 bg-gray-600 rounded-xl '>
                    <h2 className='ml-5 mt-5 text-[17px] font-medium'> Create your first podcast </h2>
                    <p className='ml-5 mt-2 text-[14px] font-thin'> Let's get first podcast </p>
                    <button className='h-7 ml-5 mt-8 mb-5 text-[15px] font-medium tracking-normal bg-white text-black w-36 rounded-2xl'> Create Podcast </button>
                </div>

                <div className='w-full flex flex-col mt-10 ml-5 bg-gray-600 rounded-xl '>
                    <h2 className='ml-5 mt-5 text-[17px] font-medium'> Let's find some podcasts to subscribe </h2>
                    <p className='ml-5 mt-2 text-[14px] font-thin'> Always new episodes </p>
                    <button className='h-7 ml-5 mt-8 mb-5 text-[15px] font-medium tracking-normal bg-white text-black w-36 rounded-2xl'> Browse Podcast </button>
                </div>
            </div>

        </div>
    )
}

export default Sidebar