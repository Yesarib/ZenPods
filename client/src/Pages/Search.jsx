import React, { useEffect, useState } from 'react';
import episodesService from '../Services/Episode';
import podcastService from '../Services/Podcasts';
import categoryService from '../Services/Category';
import { Link } from 'react-router-dom';
import searchService from '../Services/Search';
import Content from '../Components/Content';

const Search = () => {
    const [episodes, setEpisodes] = useState([]);
    const [podcasts, setPodcasts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [user, setUser] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async () => {
        try {
            const response = await searchService.search(searchTerm);
            console.log(response);
            if (response) {
                setPodcasts(response.podcasts);
                setEpisodes(response.episodes);
                setUser(response.user)
                setCategories([]);
                window.scrollTo(0, 0); // Sayfanın başına gitmek için
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getCategories = async () => {
        try {
            const response = await categoryService.getCategories();
            if (response) {
                setCategories(response);
            }
        } catch (error) {
            console.log(error);
        }
    };



    useEffect(() => {
        if (searchTerm === '') {
            getCategories();
            setPodcasts([]);
            setEpisodes([]);
        } else {
            handleSearch();
        }
    }, [searchTerm]);

    return (
        <div className='w-full flex flex-wrap text-white ml-20 mt-10 mb-10'>
            <div className=''>
                <input
                    type='search'
                    name='search'
                    id='search'
                    className='w-96 h-10 rounded-2xl bg-transparent border-2 pl-4 text-[17px] text-white transform focus:scale-110'
                    placeholder='Search for podcasts'
                    autoComplete='off'
                    value={searchTerm}
                    onInput={(e) => {
                        e.preventDefault();
                        setSearchTerm(e.target.value);
                    }}
                />
            </div>

            <div className='mt-16 flex flex-col mb-36'>
                {categories && categories.length > 0 && (
                    <>
                        <h1 className='text-[28px] font-medium'> Podcast With Category </h1>
                        <div className='w-full flex flex-wrap mt-3'>
                            {categories.map((category, index) => (
                                <Link
                                    key={category._id}
                                    className='transform hover:scale-105'
                                    to={`/genre/${category._id}`}
                                >
                                    <div
                                        className={`w-60 h-48 mt-3 m-2 justify-center items-center text-center rounded-xl overflow-x-hidden`}
                                        style={{ backgroundColor: `${category.color}` }}
                                    >
                                        <div className='rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300'>
                                            <h1> {category.name} </h1>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </>
                )}

                {episodes && episodes.length > 0 && podcasts && podcasts.length > 0 && (
                    <Content items={podcasts} episodes={episodes} name={"Podcast"} ml={"0"} />
                )}


                {user && user.length > 0 && (
                    <>
                        <h1 className='text-[28px] font-medium mt-16'> Users </h1>
                        <div className='flex flex-wrap'>
                            {user.map((user, index) => (
                                <Link key={index} to={`/profile/${user._id}`}>
                                    <div className='w-60 m-2'>
                                        <div className='rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300'>
                                            <img
                                                src={`http://localhost:8000/assets/${user.profileImage}`}
                                                alt={user.firstName}
                                                className='max-h-28 w-full rounded-lg object-cover'
                                            />
                                            <h1 className='text-lg font-semibold mt-2'>{user.firstName} {user.lastName}</h1>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Search;
