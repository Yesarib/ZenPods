/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import podcastListService from '../Services/PodcastList';
import { Link } from 'react-router-dom'

const PodcastList = ({user}) => {
    const [podcastLists, setPodcastLists] = useState([]);

    const getPodcastList = async() => {
        try {
            const data = await podcastListService.getUserPodcastList(user._id);
            if (data) {
                setPodcastLists(data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPodcastList();
    },[])


    return (
        <div>
            {podcastLists.map((podcastList) => (
                <Link to={`/podcastlist/${podcastList._id}`} key={podcastList._id} >
                    <div className='flex mt-5'>
                        <div>
                            <img src={podcastList.imageUrl} alt={podcastList.title} className='max-w-xs max-h-16 rounded-xl' />
                        </div>
                        <div className='ml-4 mt-2'>
                            <h1 className='text-[17px] font-medium'> {podcastList.title} </h1>
                            <h1 className='text-gray-400 font-medium'> Podcastlist -  {`${user.firstName} ${user.lastName}`} </h1>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default PodcastList