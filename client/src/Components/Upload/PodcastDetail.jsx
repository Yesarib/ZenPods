import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import podcastService from '../../Services/Podcasts';

const PodcastDetail = () => {
    const [podcast, setPodcast] = useState([]);
    const { id } = useParams();

    const getPodcast = async() => {
        try {
            const response = await podcastService.getPodcastById(id);
            if (response){
                setPodcast(response)
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='text-white'>

        </div>
    )
}

export default PodcastDetail