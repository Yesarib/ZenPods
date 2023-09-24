/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import podcastService from '../../Services/Podcasts';
import PodcastDetailUpper from '../PodcastDetail/PodcastDetailUpper';
import episodesService from '../../Services/Episode';

const PodcastDetail = ({user}) => {
    const [podcast, setPodcast] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const { id } = useParams();
    const popUpRef = useRef(null);


    const handleEditClick = () => {
        setIsEditing(true);
    };
    const closePopUp = () => {
        setIsEditing(false);
    };

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const getPodcast = async() => {
        try {
            const responsePodcast = await podcastService.getPodcastById(id);
            const responseEpisodes = await episodesService.getPodcastEpisodesById(id);
            if (responsePodcast && responseEpisodes){
                setPodcast(responsePodcast)
                setEpisodes(responseEpisodes)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPodcast();

        const handleClickOutside = (event) => {
            if (popUpRef.current && !popUpRef.current.contains(event.target)) {
                closePopUp();
            }
        };

        if (isEditing) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    },[isEditing])
    return (
        <div className='text-white w-full flex flex-col'>
            <PodcastDetailUpper podcastDetail={podcast}/>
            <div className='w-full flex flex-col ml-24 mt-12'>
                <h1 className='text-2xl font-medium'> Episodes </h1>
                {episodes.length === 0 && (
                    <div className='mt-10'>
                        <h1> There is no episodes for this podcast. You can add episodes now... </h1>
                    </div>
                )}
                <div className='w-full flex'>
                    {episodes?.map((episode) => (
                        <div className='w-full cursor-pointer' key={episode._id}>
                            <div className='flex flex-col'>
                                <img src={episode.imageUrl} alt={episode.title} className='w-52 max-h-32 mt-6 rounded-xl object-cover'/>
                                <div className='flex flex-col mt-3 ml-1 mb-5'>
                                        <h1 className='flex justify-start items-start text-start text-[18px] font-medium'> {episode.title} </h1>
                                        <h1 className='flex justify-start items-start text-start text-[15px] font-normal text-[#9b9a9a]'> {episode.description.substring(0,50)}... </h1>
                                    </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    
    )
}

export default PodcastDetail