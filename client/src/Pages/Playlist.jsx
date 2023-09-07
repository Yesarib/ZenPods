import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import podcastListService from '../Services/PodcastList'
import PodcastListDetailUpper from  '../Components/PlayList/PodcastListDetailUpper'
import Episodes from '../Components/PlayList/Episodes';
import episodesService from '../Services/Episode';

const PodcastList = () => {
    const [podcastList, setPodcastList] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const { id } = useParams();

    const getPodcastLits = async() => {
        try {
            const data = await podcastListService.getUserPodcastList();
            if (data) {
                setPlaylists(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getPodcastListById = async() => {
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
        getPodcastListById();
        getPodcastLits();
    },[id])


    return (
        <div>
            <PodcastListDetailUpper podcastlist={podcastList}/>
            <Episodes episodes={episodes} playlist={playlists} />
        </div>
    )
}

export default PodcastList