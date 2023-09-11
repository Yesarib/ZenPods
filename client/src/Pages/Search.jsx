import React, { useEffect, useState } from 'react'
import episodesService from '../Services/Episode';
import podcastListService from '../Services/PodcastList';
import categoryService from '../Services/Category';
import { Link } from 'react-router-dom';

const Search = () => {

    const [episodes, setEpisodes] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [categories, setCategories] = useState([]);

    const getCategories = async() => {
        try {
            const response = await categoryService.getCategories();
            if (response) {
                setCategories(response)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getEpidoesAndPlaylists = async() => {
        try {
            const responseEpisode = await episodesService.getEpisodes();
            const responsePlaylists = await podcastListService.getPodcastlists();
            if (responseEpisode || responsePlaylists) {
                setEpisodes(responseEpisode)
                setPlaylists(responsePlaylists)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getEpidoesAndPlaylists();
        getCategories();
    },[])


    return (
        <div className='w-full flex flex-col text-white ml-20 mt-10 mb-10'>
            <div className=''>
                <input type="search" name="search" id="search" className='w-96 h-10 rounded-2xl bg-transparent border-2 pl-4 text-[17px] text-white transform focus:scale-110' placeholder='Search for podcasts'/>
            </div>
            <div className='mt-16 flex flex-col'>
                <h1 className='text-[28px] font-medium'> Podcast With Category </h1>
                <div className='w-full flex flex-wrap'>
                    { categories.map((category,index) => (
                        <Link key={index} className='transform hover:scale-105' to={`/genre/${category._id}`}>
                            <div className={`w-60 h-48 mt-3 ml-3 mr-2 justify-center items-center text-center rounded-xl overflow-x-hidden`} style={{backgroundColor:`${category.color}`}}>
                                <div className='rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300'>
                                    <h1> {category.name} </h1>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className='mt-16 flex flex-col'>
                <h1 className='text-[28px] font-medium'> Popular Podcasts </h1>
                <div className='flex flex-wrap'>
                    {episodes.map((episode, index) => (
                        <div key={index} className='w-60 m-4'>
                        <div className='bg- rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300'>
                            <img
                            src={episode.imageUrl}
                            alt={episode.title}
                            className='max-h-28 w-full rounded-lg object-cover'
                            />
                            <h1 className='text-lg font-semibold mt-2'>{episode.title}</h1>
                            <p className='text-gray-400 text-sm mt-1'>{episode.publishedBy}</p>
                        </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='mt-16 flex flex-col mb-20'>
                <h1 className='text-[28px] font-medium'> Popular Playlists </h1>
                <div className='flex flex-wrap'>
                    {playlists.map((playlist, index) => (
                        <div key={index} className='w-60 m-4'>
                        <div className='bg- rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300'>
                            <img
                            src={playlist.imageUrl}
                            alt={playlist.title}
                            className='max-h-28 w-full rounded-lg object-cover'
                            />
                            <h1 className='text-lg font-semibold mt-2'>{playlist.title}</h1>
                            <p className='text-gray-400 text-sm mt-1'>{playlist.createdBy}</p>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Search