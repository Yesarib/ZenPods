import { useEffect, useState } from 'react'
import Episodes from '../Components/PodcastDetail/Episodes'
import PodcastDetailUpper from '../Components/PodcastDetail/PodcastDetailUpper'
import podcastService from '../Services/Podcasts'

const Podcast = () => {

    const [podcasts, setPodcasts] = useState([]);
    const getPodcasts = async () => {
        const podcasts = await podcastService.getPodcasts();
        if (!podcasts) throw console.log('There is no podcast');

        setPodcasts(podcasts);
    }

    useEffect(() => {
        getPodcasts();
    }, [])

    return (
        <div className='text-white w-full flex'>
            <div className="w-full">
                <PodcastDetailUpper />
                <Episodes podcasts={podcasts} />
            </div>
        </div>
    )
}

export default Podcast