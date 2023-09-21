/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const Content = ({podcasts, name, ml, margin, to}) => {
    
    return (
        <div className='text-white justify-center items-center text-center'>
            <h1 className={`flex justify-start items-start ${ml} mt-10 text-[24px] font-semibold`}> {name} </h1>
            <div className='flex flex-col '>
                <div className='flex justify-start items-center ml-10'>
                    {podcasts.map((podcast,index) => (
                        <Link key={index} to={`${to}${podcast._id}`}>
                            <div className={`${margin} flex flex-col bg-[#121212] w-72 justify-center items-center rounded-3xl hover:bg-[#1a1a1a] hover:scale-105`}>
                                <div className='w-60 flex flex-col'>
                                    <img src={podcast.imageUrl} alt={podcast.title} className='w-52 max-h-32 mt-6 rounded-xl object-cover' />
                                    <div className='flex flex-col mt-3 ml-1 mb-5'>
                                        <h1 className='flex justify-start items-start text-start text-[18px] font-medium'> {podcast.title} </h1>
                                        <h1 className='flex justify-start items-start text-start text-[15px] font-normal text-[#9b9a9a]'> {podcast.description.substring(0,50)}... </h1>
                                    </div>
                                </div>
                                
                            </div>
                        </Link>                        
                    ))}
                </div>                
            </div>
        </div>
    );
}

export default Content;
