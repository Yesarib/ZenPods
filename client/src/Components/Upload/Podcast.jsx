/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import podcastService from '../../Services/Podcasts';
import { Link } from 'react-router-dom'
import Content from '../Content';

const Podcast = ({user}) => {
    const [podcasts, setPodcasts] = useState([]);

    const getPodcastByUserId = async() => {
        try {
            const response = await podcastService.getUserPodcasts(user?._id);
            if (response){
                response.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setPodcasts(response);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPodcastByUserId();
    },[user])

    console.log(podcasts);

    return (
        <div>
            {!podcasts && (
                <div> Loading ....</div>
            )}
            {podcasts.length === 0 &&(
                <div>
                    You don't currently have a podcast. You can create it now.
                </div>
            )}
            <Content items={podcasts} name={'Your Podcasts'} margin={'m-2'} to={'/upload/podcast/'} />
        </div>
    )
}

export default Podcast