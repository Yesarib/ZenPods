import React from 'react';
import { usePodcastContext } from '../Context/PodcastContext'; // PodcastContext ile iletişim kurun

const EpisodeCard = () => {
  const { nowPlayingPodcast } = usePodcastContext(); // Şu anda çalınan podcast bilgilerini alın

return (
    <div className='text-white mt-36 text-center'>
        {nowPlayingPodcast ? (
            <div>
            <h2>{nowPlayingPodcast.title}</h2>
            <p>{nowPlayingPodcast.description}</p>
            {/* Diğer podcast bilgileri */}
            </div>
        ) : (
            <div>Şu anda çalınan podcast yok</div>
        )}
    </div>
);
}

export default EpisodeCard;
