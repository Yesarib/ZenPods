import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import podcastListService from '../Services/PodcastList'
import PodcastListDetailUpper from '../Components/PodcastList/PodcastListDetailUpper';
import Episodes from '../Components/PodcastList/Episodes';
import episodesService from '../Services/Episode';

const PodcastList = () => {
    const [podcastList, setPodcastList] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const { id } = useParams();

    const getPodcastList = async() => {
        try {
            const data = await podcastListService.getPodcastListById(id);
            if (data) {
                setPodcastList(data)
                const episodeIds = data.episodes;

                const episodeData = await episodesService.getEpisodesById(episodeIds || []);
                setEpisodes(episodeData);
            }            
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getPodcastList();
    },[id])


    return (
        <div>
            <PodcastListDetailUpper podcastlist={podcastList}/>
            <Episodes episodes={episodes} />
        </div>
    )
}

export default PodcastList