/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import episodesService from '../../Services/Episode';
import { useParams } from 'react-router-dom';
import { usePodcastContext } from '../../Context/PodcastContext';
import podcastListService from '../../Services/PodcastList';

const Episodes = ({playlist}) => {
    const [episodes, setEpisodes] = useState([]);
    const { id } = useParams();
    const { startPodcast } = usePodcastContext();
    const [isMenuOpen, setIsMenuOpen] = useState(null);
    const [isPlaylistMenuOpen, setIsPlaylistMenuOpen] = useState(null);

    const getPodcastEpisodesById = async () => {
        try {
            const data = await episodesService.getPodcastEpisodesById(id);
            if (data) {
                setEpisodes(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleStartPodcast = (selectedPodcast) => {
        startPodcast(selectedPodcast);
        localStorage.setItem('selectedPodcast', JSON.stringify(selectedPodcast));
    };

    const toggleMenu = (episodeId) => {
        if (isMenuOpen === episodeId) {
            setIsMenuOpen(null);
        } else {
            setIsMenuOpen(episodeId);
        }
    };

    const togglePlaylistMenu = (episodeId) => {
        if (isPlaylistMenuOpen === episodeId) {
            setIsPlaylistMenuOpen(null);
        } else {
            setIsPlaylistMenuOpen(episodeId);
        }
    };

    const addToPlaylist = async(playlistId, episodeId) => {
        try {
            const data = await podcastListService.addEpisodeToPodcastList(playlistId,episodeId);
            if (data) {
                console.log("Podcast succesfully added to palylist");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPodcastEpisodesById();
    }, []);

    // Tüm sayfa üzerindeki tıklamaları dinleyen işlev
    useEffect(() => {
        const handleGlobalClick = (e) => {
            if (!e.target.closest('.menu-container')) {
                // Menü dışında bir yere tıklandığını kontrol edin
                setIsMenuOpen(null);
                setIsPlaylistMenuOpen(null); // Playlist menüsünü kapatın
            }
        };

        document.addEventListener('click', handleGlobalClick);

        return () => {
            document.removeEventListener('click', handleGlobalClick);
        };
    }, []);

    return (
        <div className='w-full mt-10 ml-10 mb-10'>
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
                    {episodes.map((episode, index) => (
                        <tr
                            key={episode._id}
                            onClick={() => handleStartPodcast(episode)}
                            className='hover:bg-gray-950 hover:rounded-2xl'
                        >
                            <td className='w-1/12 text-start px-0'> {index} </td>
                            <td className="w-5/12 text-start px-0">
                                <div className='flex'>
                                    <div className='flex justify-start items-start'>
                                        <img
                                            src={episode.imageUrl}
                                            alt={episode.title}
                                            className='w-28 h-24 max-w-[36rem] max-h-[36rem] rounded-md object-cover'
                                        />
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

                            <td className="text-start ">
                                <div className='flex justify-center items-center'>
                                    <h1> {episode.listenCount} </h1>
                                    <div className='text-center items-center justify-center'>
                                        <div className='menu-container relative ml-10'>
                                            <div className='text-[32px] cursor-pointer' onClick={() => toggleMenu(episode._id)}> ... </div>
                                            <div className={`absolute ${isMenuOpen === episode._id ? 'block' : 'hidden'} ml-10 w-36`} style={{ bottom: '100%' }}>
                                                <button
                                                    className='bg-gray-800 w-36 rounded-xl text-[17px]'
                                                    onMouseEnter={() => togglePlaylistMenu(episode._id)} // Üzerine geldiğinizde playlist menüsünü açın
                                                    //onMouseLeave={() => togglePlaylistMenu(null)} // Üzerinden çıktığınızda playlist menüsünü kapatın
                                                >
                                                    Add To Playlist
                                                </button>
                                                <div className={`absolute  ${isPlaylistMenuOpen === episode._id ? 'block' : 'hidden'} ml-10 w-36`}>
                                                    <div className='flex flex-col text-white'>
                                                        {playlist.map((pl) => (
                                                            <button 
                                                                key={pl._id}
                                                                onClick={() => addToPlaylist(pl._id,episode._id)}
                                                                className='text-[17px] mt-2'
                                                            >
                                                                {pl.title}
                                                            </button>
                                                        ))}
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Episodes;
