/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const Content = ({podcasts}) => {
    
    return (
        <div className='text-white justify-center items-center text-center'>
            <div className='text-start ml-20'>
                <h2 className='ml-10 mt-16 text-[24px] font-medium tracking-widest'> Podcasts </h2>
            </div>
            <div className='flex justify-start ml-10 items-center'>
                {podcasts.map((podcast) => (
                    <div key={podcast._id} className={`w-60 h-60 flex flex-col justify-start items-start ml-20 mt-10`}>
                        <Link to={`/podcast/${podcast._id}`}>
                            <img className='w-60 max-h-36 rounded-xl' src={podcast.imageUrl} alt={podcast.title} />
                            <div className='flex flex-col text-start'>
                                <h2 className='text-[18px] font-medium'> {podcast.title} </h2>
                                <p className='mt-1 text-[#b6b6b6]'> {podcast.description.substring(0,40)}... </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='text-start ml-20'>
                <h2 className='ml-10 mt-16 text-[24px] font-medium tracking-widest'> Newest Podcasts </h2>
            </div>
            <div className='flex justify-start ml-10 items-center'>
                {podcasts.map((podcast) => (
                    <div key={podcast._id} className={`w-60 h-60 flex flex-col justify-start items-start ml-20 mt-10`}>
                        <Link to={`/podcast/${podcast._id}`} >
                            <img className='w-60 max-h-36 rounded-xl' src={podcast.imageUrl} alt={podcast.title} />
                            <div className='flex flex-col text-start'>
                                <h2 className='text-[18px] font-medium'> {podcast.title} </h2>
                                <p className='mt-1 text-[#b6b6b6]'> {podcast.description.substring(0,40)}... </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Content;
