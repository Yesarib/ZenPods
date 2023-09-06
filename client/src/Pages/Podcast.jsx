/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Episodes from '../Components/PodcastDetail/Episodes'
import PodcastDetailUpper from '../Components/PodcastDetail/PodcastDetailUpper'
import podcastListService from '../Services/PodcastList'

const Podcast = ({user}) => {

    const [playlist, setPlaylist] = useState([]);

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

    useEffect(() => {
        getUserPlaylist();
    },[])

    return (
        <div className='text-white w-full flex'>
            <div className="w-full mb-10">
                <PodcastDetailUpper />
                <Episodes playlist={playlist}/>
            </div>
        </div>
    )
}

export default Podcast