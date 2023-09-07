/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Episodes from '../Components/PodcastDetail/Episodes'
import PodcastDetailUpper from '../Components/PodcastDetail/PodcastDetailUpper'
import podcastListService from '../Services/PodcastList'
import { useParams } from 'react-router-dom';
import podcastService from '../Services/Podcasts';


const Podcast = ({user}) => {

    const [playlist, setPlaylist] = useState([]);
    const [podcast, setPodcast] = useState([]);
    const { id } = useParams();

    // podcastleri playliste ekleyebilmek için
    const getUserPlaylist = async() => {
        try {
            const response = await podcastListService.getUserPodcastList(user._id);
            if (response ){
                setPlaylist(response)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getPodcast = async () => {
        try {
            const response = await podcastService.getPodcastById(id);

            if (response) {
                setPodcast(response);
            }
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getUserPlaylist();
        getPodcast();
    },[])


    return (
        <div className='text-white w-full flex'>
            <div className="w-full mb-10">
                <PodcastDetailUpper podcastDetail={podcast}/>
                <Episodes playlist={playlist}/>
            </div>
        </div>
    )
}

export default Podcast