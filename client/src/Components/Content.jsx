/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePodcastContext } from '../Context/PodcastContext';

const Content = ({ items, episodes, name, ml, margin, to }) => {
    const [pageNumber, setPageNumber] = useState(0);
    const [episodePageNumber, setEpisodePageNumber] = useState(0);
    const projectsPerPage = 4;
    const { startPodcast } = usePodcastContext();


    const handleStartPodcast = (selectedPodcast) => {
        startPodcast(selectedPodcast);
        localStorage.setItem('selectedPodcast', JSON.stringify(selectedPodcast));
    };

    // ITEMS
    const pageCount = Math.ceil(items.length / projectsPerPage);
    const pagesVisited = pageNumber * projectsPerPage;
    const displayedItems = items.slice(
        pagesVisited,
        pagesVisited + projectsPerPage
    );

    const changePage = (amount) => {
        const newPageNumber = pageNumber + amount;
        if (newPageNumber >= 0 && newPageNumber < pageCount) {
            setPageNumber(newPageNumber);
        }
    };

    // EPISODES
    const episodePageCount = Math.ceil(episodes?.length / projectsPerPage);
    const episodePagesVisited = episodePageNumber * projectsPerPage;
    const episodeDisplayedItems = episodes?.slice(
        episodePagesVisited,
        episodePagesVisited + projectsPerPage
    );
    const changeEpisodePages = (amount) => {
        const newEpisodePageNumber = episodePageNumber + amount;
        if (newEpisodePageNumber >= 0 && newEpisodePageNumber < episodePageCount) {
            setEpisodePageNumber(newEpisodePageNumber);
        }
    };
    

    return (
        <div className='text-white justify-center items-center text-center'>
            <h1 className={`flex justify-start items-start ${ml} mt-10 text-[24px] font-semibold`}> {name} </h1>
            <div className="flex ml-20 space-x-10">
                <button onClick={() => changePage(-1)} disabled={pageNumber === 0} className='text-[32px] font-semibold'>{"<"}</button>
                <button onClick={() => changePage(1)} disabled={pageNumber === pageCount - 1} className='text-[32px] font-semibold'>{">"}</button>
            </div>
            <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-6 ml-20">
                {displayedItems.map((podcast, index) => (
                    <Link key={index} to={`${to}${podcast._id}`} className=''>
                        <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                            <img
                                src={podcast.imageUrl}
                                alt={podcast.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 text-start">
                                <h1 className="text-xl font-medium mb-2">{podcast.title.substring(0,15)}...</h1>
                                <p className="text-sm text-gray-400">{podcast.description.substring(0, 50)}...</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            {episodes && (
                <div className='w-full mb-16'>
                    <h1 className={`flex justify-start items-start ${ml} mt-10 text-[24px] font-semibold`}> Episodes </h1>
                    <div className="flex ml-20 space-x-10">
                        <button onClick={() => changeEpisodePages(-1)} className='text-[32px] font-semibold'>{"<"}</button>
                        <button onClick={() => changeEpisodePages(1)} className='text-[32px] font-semibold'>{">"}</button>
                    </div>

                    {episodes.length > 0 && (
                        <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-6 ml-20 mb-32">
                        {episodeDisplayedItems.map((episode, index) => (
                            <div key={index} onClick={() => handleStartPodcast(episode)} className='cursor-pointer'>
                                <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                                    <img
                                        src={episode.imageUrl}
                                        alt={episode.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4 text-start">
                                        <h1 className="text-xl font-medium mb-2">{episode.title.substring(0,15)}</h1>
                                        <p className="text-sm text-gray-400">{episode.description.substring(0, 50)}...</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    )}
                </div>
            )}

        </div>
    );
};

export default Content;
