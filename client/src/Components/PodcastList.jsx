/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import podcastListService from '../Services/PodcastList';
import userService from '../Services/User'
import { Link } from 'react-router-dom'

const PodcastList = ({ user }) => {
    const [podcastLists, setPodcastLists] = useState([]);
    const [createdByNames, setCreatedByNames] = useState({});

    const getPodcastList = async () => {
        try {
            const playlistIds = user.playlist;
            const podcasts = [];
            const createdByNamesObj = {};

            for (let i = 0; i < playlistIds.length; i++) {
                const podcastList = await podcastListService.getPodcastListById(playlistIds[i]);
                podcasts.push(podcastList);

                
                const createdBy = await userService.getUserById(podcastList.createdBy);
                const fullName = `${createdBy.firstName} ${createdBy.lastName}`;
                createdByNamesObj[podcastList._id] = fullName;
            }

            setPodcastLists(podcasts);
            setCreatedByNames(createdByNamesObj); 
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPodcastList();
    }, [])

    return (
        <div>
            {podcastLists.map((podcastList) => (
                <Link to={`/podcastlist/${podcastList._id}`} key={podcastList._id}>
                    <div className='flex mt-5 hover:bg-[#292929]'>
                        <div>
                            <img src={`http://localhost:8000/assets/${podcastList.imageUrl}` || podcastList.imageUrl} alt={podcastList.title} className='max-w-xs max-h-16 rounded-xl' />
                        </div>
                        <div className='ml-4 mt-2'>
                            <h1 className='text-[17px] font-medium'> {podcastList.title} </h1>
                            <h1 className='text-gray-400 font-medium'> {createdByNames[podcastList._id] || 'Unknown User'}</h1>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default PodcastList