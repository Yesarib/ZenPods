import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import categoryService from '../Services/Category';

const Genre = () => {
    const { categoryId } = useParams();

    const [podcasts, setPodcasts] = useState([]);
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

    const getPodcastWithCategoryId = async() => {
        try {
            const response = await categoryService.getPodcastWithCategoryId(categoryId);
            if (response){
                setPodcasts(response)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPodcastWithCategoryId();
        getCategoryById();
    },[categoryId])

    return (
        <div className='text-white mt-20 ml-20 flex flex-col'>
            <h1 className='text-[72px] font-semibold w-full'> {category.name} </h1>
            <div className='flex flex-col mt-10'>
                <h1 className='text-[32px] font-medium'> The {category.name} Podcasts </h1>
                <div className='flex justify-start items-center'>
                    {podcasts.map((podcast,index) => (
                        <Link key={index}>
                            <div className='m-6 flex flex-col bg-[#121212] w-72 justify-center items-center rounded-3xl hover:bg-[#1a1a1a] hover:scale-105'>
                                <div className='flex flex-col'>
                                    <img src={podcast.imageUrl} alt={podcast.title} className='w-52 max-h-32 mt-6 rounded-xl' />
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
        </div>
    )
}

export default Genre