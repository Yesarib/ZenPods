/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { usePodcastContext } from '../../Context/PodcastContext';
import podcastListService from '../../Services/PodcastList';


const Episodes = ({ episodes, playlist, user }) => {
    console.log(playlist);
    const { startPodcast } = usePodcastContext();
    const [isMenuOpen, setIsMenuOpen] = useState(null);
    const [isPlaylistMenuOpen, setIsPlaylistMenuOpen] = useState(null);


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

    const addToPlaylist = async (playlistId, episodeId) => {
        try {
            const data = await podcastListService.addEpisodeToPodcastList(playlistId, episodeId);
            if (data) {
                console.log("Podcast succesfully added to palylist");
            }
        } catch (error) {
            console.log(error);
        }
    }

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
        <>
            {!episodes && (
                <div className='text-white text-[20px] mt-20 ml-20 font-medium'>
                    Lets find something for your podcast list
                </div>
            )}
            {episodes && (
                <div className='w-full mt-10 ml-10 text-white'>
                    <table cellPadding="15" className="table-fixed mb-36">
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
                                <tr key={episode._id} className='hover:bg-[#292929]'>
                                    <td className='w-1/12 text-start px-0'> {index} </td>
                                    <td className="w-5/12 text-start px-0">
                                        <div className='flex'>
                                            <div className='flex justify-start items-start'>
                                                <img src={episode.imageUrl} alt={episode.title} className='w-20 h-16 max-w-[36rem] max-h-[36rem] rounded-md object-cover' />
                                            </div>
                                            <div className='flex flex-col justify-center ml-7'>
                                                <h1 className='text-start justify-start items-start text-[17px] font-medium'> {episode.title} </h1>
                                                <p className='w-full'> {episode.description.substring(0, 50)}... </p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="text-start px-0">
                                        <div className='ml-10'>
                                            {episode.publishedAt}
                                        </div>
                                    </td>
                                    <td className="text-start px-0">
                                        <div className='flex justify-center items-center'>
                                            <h1> {episode.listenCount} </h1>
                                            <div className='text-center items-center justify-center'>
                                                <div className='menu-container relative ml-10'>
                                                <button className='w-3 h-8 flex items-center justify-center cursor-pointer ' onClick={() => toggleMenu(episode._id)}>
                                                    <div className='flex'>
                                                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full "></div>
                                                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full ml-1"></div>
                                                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full ml-1"></div>
                                                    </div>
                                                </button>
                                                    <div className={`absolute ${isMenuOpen === episode._id ? 'block' : 'hidden'} ml-10 w-48 bg-gray-800`} style={{ bottom: '100%' }}>
                                                        {playlist.createdBy === user._id && (
                                                            <div>
                                                                <button
                                                                    className='mt-2 text-[17px] w-full hover:bg-slate-700'
                                                                    onMouseEnter={() => togglePlaylistMenu(episode._id)}
                                                                >
                                                                    Add To Playlist
                                                                </button>
                                                                <button className='text-[17px] mt-2 w-full hover:bg-slate-700'>
                                                                    Remove from this playlist
                                                                </button>
                                                            </div>
                                                        )}

                                                        <div> Like </div>
                                                        <div className={`absolute  ${isPlaylistMenuOpen === episode._id ? 'block' : 'hidden'} ml-10 w-36`}>
                                                            <div className='flex flex-col text-white'>
                                                                {playlist.map((pl) => (
                                                                    <button
                                                                        key={pl._id}
                                                                        onClick={() => addToPlaylist(pl._id, episode._id)}
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
            )}

        </>
    )
}

export default Episodes