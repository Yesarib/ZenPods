import React from 'react';
import Podcasts from '../../data';

const Content = () => {
    return (
        <div className='text-white h-screen justify-center items-center text-center'>
            <div className='text-start ml-20'>
                <h2 className='ml-10 mt-16 text-[24px] font-medium tracking-widest'> Podcasts </h2>
            </div>
            <div className='flex justify-start ml-10 items-center'>
                {Podcasts.map((podcasts) => (
                    <div key={podcasts.id} className={`flex flex-col justify-start items-start ml-20 mt-10`}>
                        <img className='w-60 rounded-xl' src={podcasts.imageUrl} alt={podcasts.title} />
                        <div className='flex flex-col text-start'>
                            <h2> {podcasts.title} </h2>
                            <p> {podcasts.description} </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-start ml-20'>
                <h2 className='ml-10 mt-16 text-[24px] font-medium tracking-widest'> Newest Podcasts </h2>
            </div>
            <div className='flex justify-start ml-10 items-center'>
                {Podcasts.map((podcasts) => (
                    <div key={podcasts.id} className={`flex flex-col justify-start items-start ml-20 mt-10`}>
                        <img className='w-60 rounded-xl' src={podcasts.imageUrl} alt={podcasts.title} />
                        <div className='flex flex-col text-start'>
                            <h2> {podcasts.title} </h2>
                            <p> {podcasts.description} </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Content;
