import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import podcastService from '../Services/Podcasts';

const PodcastDetail = () => {
    const { id } = useParams();
    console.log(id);
    const [podcast, setPodcast] = useState([]);

    const getPodcast = async () => {
        try {
            const response = await podcastService.getPodcastById(id);

            if (response) {
                setPodcast(response);
            }
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getPodcast();
    }, []);

    console.log(podcast);

    return (
        <div className='flex flex-col text-white mt-16'>
            <div>
                -
            </div>
            <div className='flex '>
                <div className='mt-16 ml-20'>
                    <img src={podcast.imageUrl} alt={podcast.title} className='w-80 rounded-3xl' />
                </div>
                <div className='flex flex-col ml-4 mt-24'>
                    <h1 className='text-[16px] font-medium '> {podcast.title} </h1>
                    <h1 className='text-[60px] font-bold'> Release Radar </h1>
                    <p className='ml-1 text-[15px]'> {podcast.description} </p>
                </div>
            </div>
            
            <div className='flex'>
                <div className='flex items-center mt-10 ml-20'>
                    <div className='w-16 h-16 bg-sky-800 rounded-full'> </div>
                </div>
                <div className='flex items-center mt-10 ml-10'>
                    <div className='w-16 h-16 bg-sky-800 rounded-full'></div>
                </div>
            </div>
            
        </div>
    )
}

export default PodcastDetail