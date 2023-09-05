import React from 'react';
import { usePodcastContext } from '../Context/PodcastContext'; // PodcastContext ile iletişim kurun

const EpisodeCard = () => {
  const { nowPlayingPodcast } = usePodcastContext(); // Şu anda çalınan podcast bilgilerini alın
    console.log(nowPlayingPodcast);
return (
    <div className='text-white mt-36 text-center mb-3 '>
        {nowPlayingPodcast ? (
            <div className='flex justify-between items-center text-center  ml-2'>
                <div className='flex w-1/3'>
                    <img src={nowPlayingPodcast.imageUrl} alt={nowPlayingPodcast.title} className='w-16' />
                    <div className='flex flex-col text-start ml-5'>
                        <h1 className='font-medium '> {nowPlayingPodcast.title} </h1>
                        <h1 className='font-medium text-gray-400'> {nowPlayingPodcast.publishedBy} </h1>
                    </div>
                </div>

                <div className='flex flex-col text-center justify-center items-center w-1/3' >
                    <div className='flex'>
                        Medya işaretleri
                    </div>
                    <div className='flex text-center items-center space-x-2'>
                        <div> 0 </div>
                        <div className="w-96 border-t border-gray-300"></div>
                        <div>
                            Süre
                        </div>
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
