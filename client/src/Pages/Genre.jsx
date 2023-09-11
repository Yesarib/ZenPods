import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import categoryService from '../Services/Category';

const Genre = () => {
    const { categoryId } = useParams();

    const [podcasts, setPodcasts] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const [category, setCategory] = useState([]);

    const getCategoryById = async() => {
        try {
            const response = await categoryService.getCategoryById(categoryId);
            if (response) {
                setCategory(response)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getPodcastAndEpisodeWithCategoryId = async() => {
        try {
            const responsePodcast = await categoryService.getPodcastWithCategoryId(categoryId);
            const responseEpisode = await categoryService.getEpisodeWithCategoryId(categoryId);
            if (responsePodcast && responseEpisode){
                setPodcasts(responsePodcast)
                setEpisodes(responseEpisode)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPodcastAndEpisodeWithCategoryId();
        getCategoryById();
    },[categoryId])

    console.log(episodes);

    return (
        <div className='text-white mt-20 ml-20 flex flex-col'>
            <h1 className='text-[60px] font-semibold w-full'> {category.name} </h1>
            <div className='flex flex-col mt-10'>
                <h1 className='text-[24px] font-medium'> The {category.name} Podcasts </h1>
                <div className='flex justify-start items-center'>
                    {podcasts.map((podcast,index) => (
                        <Link key={index} to={`/podcast/${podcast._id}`}>
                            <div className='m-6 flex flex-col bg-[#121212] w-72 justify-center items-center rounded-3xl hover:bg-[#1a1a1a] hover:scale-105'>
                                <div className='flex flex-col'>
                                    <img src={podcast.imageUrl} alt={podcast.title} className='w-52 max-h-32 mt-6 rounded-xl object-cover' />
                                    <div className='flex flex-col mt-3 ml-1 mb-5'>
                                        <h1 className='flex justify-start items-start text-start text-[18px] font-medium'> {podcast.title} </h1>
                                        <h1 className='flex justify-start items-start text-start text-[15px] font-normal text-[#9b9a9a]'> {podcast.uploadedBy} </h1>
                                    </div>
                                </div>
                                
                            </div>
                        </Link>                        
                    ))}
                </div>                
            </div>

            <div className='flex flex-col mt-10'>
                <h1 className='text-[24px] font-medium'> The {category.name} Episodes </h1>
                <div className='flex justify-start items-center'>
                    {episodes.map((episode,index) => (
                        <Link key={index}>
                            <div className='m-6 flex flex-col bg-[#121212] w-72 justify-center items-center rounded-3xl hover:bg-[#1a1a1a] hover:scale-105'>
                                <div className='flex flex-col'>
                                    <img src={episode.imageUrl} alt={episode.title} className='w-52 max-h-32 mt-6 rounded-xl object-cover' />
                                    <div className='flex flex-col mt-3 ml-1 mb-5'>
                                        <h1 className='flex justify-start items-start text-start text-[18px] font-medium'> {episode.title} </h1>
                                        <h1 className='flex justify-start items-start text-start text-[15px] font-normal text-[#9b9a9a]'> {episode.uploadedBy} </h1>
                                    </div>
                                </div>
                                
                            </div>
                        </Link>                        
                    ))}
                </div>                
            </div>
        </div>
    )
}

export default Genre