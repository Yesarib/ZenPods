import React, { useEffect, useState } from 'react'
import episodesService from '../Services/Episode';
import podcastService from '../Services/Podcasts';
import categoryService from '../Services/Category';
import { Link } from 'react-router-dom';
import searchService from '../Services/Search';

const Search = () => {

    const [episodes, setEpisodes] = useState([]);
    const [podcasts, setPodcasts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async () => {
        try {
            const response = await searchService.search(searchTerm);
            console.log(response);
            if (response) {
                setPodcasts(response.podcasts)
                setEpisodes(response.episodes)
            }
        } catch (error) {
            console.log(error);
        }
    }


    const getCategories = async () => {
        try {
            const response = await categoryService.getCategories();
            if (response) {
                setCategories(response)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getEpidoesAndPlaylists = async () => {
        try {
            const responseEpisode = await episodesService.getEpisodes();
            const responsePodcasts = await podcastService.getPodcasts();
            if (responseEpisode || responsePodcasts) {
                setEpisodes(responseEpisode)
                setPodcasts(responsePodcasts)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (searchTerm === '') {
            getEpidoesAndPlaylists();
            getCategories();
        } else {
            handleSearch();
        }
    }, [searchTerm])


    return (
        <div className='w-full flex flex-wrap text-white ml-20 mt-10 mb-10'>
            <div className=''>
                <input 
                    type="search" 
                    name="search" 
                    id="search" 
                    className='w-96 h-10 rounded-2xl bg-transparent border-2 pl-4 text-[17px] text-white transform focus:scale-110' 
                    placeholder='Search for podcasts'
                    autoComplete='off'
                    value={searchTerm}
                    onInput={(e) => {
                        e.preventDefault(); // Otomatik doldurmayı engelleme
                        setSearchTerm(e.target.value);
                    }}
                />
            </div>
            <div className='mt-16 flex flex-col'>
                <h1 className='text-[28px] font-medium'> Podcast With Category </h1>
                <div className='w-full flex flex-wrap mt-3'>
                    {categories.map((category, index) => (
                        <Link key={index} className='transform hover:scale-105' to={`/genre/${category._id}`}>
                            <div className={`w-60 h-48 mt-3 m-2 justify-center items-center text-center rounded-xl overflow-x-hidden`} style={{ backgroundColor: `${category.color}` }}>
                                <div className='rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300'>
                                    <h1> {category.name} </h1>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className='mt-16 flex flex-col'>
                <h1 className='text-[28px] font-medium'> Popular Episodes </h1>
                <div className='flex flex-wrap'>
                    {episodes.map((episode, index) => (
                        <Link key={index}>
                            <div className='w-60 m-2'>
                                <div className='rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300'>
                                    <img
                                        src={episode.imageUrl}
                                        alt={episode.title}
                                        className='max-h-28 w-full rounded-lg object-cover'
                                    />
                                    <h1 className='text-lg font-semibold mt-2'>{episode.title}</h1>
                                    <p className='text-gray-400 text-sm mt-1'>{episode.publishedBy}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className='mt-16 flex flex-col mb-36'>
                <h1 className='text-[28px] font-medium'> Popular Podcasts </h1>
                <div className='flex flex-wrap'>
                    {podcasts.map((podcast, index) => (
                        <Link key={index} to={`/podcast/${podcast._id}`}>
                            <div className='w-60 m-2'>
                                <div className='rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300'>
                                    <img
                                        src={podcast.imageUrl}
                                        alt={podcast.title}
                                        className='max-h-28 w-full rounded-lg object-cover'
                                    />
                                    <h1 className='text-lg font-semibold mt-2'>{podcast.title}</h1>
                                    <p className='text-gray-400 text-sm mt-1'>{podcast.uploadedBy}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Search