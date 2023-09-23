import React, { useRef,useEffect } from 'react';
import { usePodcastContext } from '../Context/PodcastContext';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'
import './styles.css'

const EpisodeCard = () => {
    const { nowPlayingPodcast } = usePodcastContext(); 
    const audioRef = useRef(null); 

    useEffect(() => {
        if (nowPlayingPodcast) {
            audioRef.current.src = nowPlayingPodcast.audioUrl;
        }
    }, [nowPlayingPodcast]);
    console.log(nowPlayingPodcast);

    return (
        <div className='text-white text-center bg-black'>
            {nowPlayingPodcast ? (
                <div className='flex justify-between items-center text-center  ml-2'>
                    <div className='flex w-1/3'>
                        <img src={nowPlayingPodcast.imageUrl} alt={nowPlayingPodcast.title} className='w-20 max-h-20 rounded-sm' />
                        <div className='flex flex-col text-start ml-5'>
                            <h1 className='font-medium '> {nowPlayingPodcast.title} </h1>
                            <h1 className='font-medium text-gray-400'> {nowPlayingPodcast.publishedBy} </h1>
                        </div>
                    </div>

                    <div className='flex flex-col text-center justify-center items-center w-1/3' >
                        <div className='flex text-white'>
                            <AudioPlayer layout='stacked-reverse' src={nowPlayingPodcast.audioUrl} ref={audioRef} style={{width:'50em', backgroundColor:'transparent',height:'5em',color:'white'}} />
                        </div>
                    </div>

                    <div className='flex w-1/3 justify-center items-center text-center'>
                        <div> İşaretler </div>
                    </div>
                </div>
            ) : (
                <div>Şu anda çalınan podcast yok</div>
            )}
        </div>
    );
}

export default EpisodeCard;
