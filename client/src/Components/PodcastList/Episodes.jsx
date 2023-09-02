/* eslint-disable react/prop-types */
import React from 'react'

const Episodes = ({episodes}) => {
    return (
        <>
            {!episodes && (
                <div className='text-white text-[20px] mt-20 ml-20 font-medium'>
                    Lets find something for your podcast list
                </div>
            )}
            {episodes && (
                <div className='w-full mt-10 ml-10'>
                <table cellPadding="15" className="table-fixed">
                    <thead className='text-center'>
                        <tr>
                            <th className="w-1/12 text-start px-0">#</th>
                            <th className="w-5/12 text-start px-0">Title</th>
                            <th className="w-5/12 text-start px-0">
                                <div className="ml-10">
                                    Date Added
                                </div>
                            </th>
                            <th className="w-4/12 text-start px-0">Listen Count</th>
                        </tr>
                    </thead>
                    <tbody className='w-full text-center'>
                        {episodes.map((episode,index) => (
                            <tr key={episode._id}>
                                <td className='w-1/12 text-start px-0'> {index} </td>
                                <td className="w-5/12 text-start px-0">
                                    <div className='flex'>
                                        <div className='flex justify-start items-start'>
                                            <img src={episode.imageUrl} alt={episode.title} className='w-28 h-24 max-w-[36rem] max-h-[36rem] rounded-md object-cover' />
                                        </div>
                                        <div className='flex flex-col justify-center ml-7'>
                                            <h1 className='text-start justify-start items-start text-[17px] font-medium'> {episode.title} </h1>
                                            <p> {episode.description} </p>
                                        </div>
                                    </div>
                                </td>
                                
                                <td className="text-start px-0"> 
                                    <div className='ml-10'>
                                        {episode.publishedAt}
                                    </div>
                                </td>
                                <td className="text-start px-0"> {episode.listenCount} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            )}
            
        </>
    )
}

export default Episodes