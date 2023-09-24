import { useEffect, useState } from 'react'
import Content from '../Components/Content'
import podcastService from '../Services/Podcasts'
import episodeService from '../Services/Episode'

const Home = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [episodes, setEpisodes] = useState([]);


  const getPodcasts = async () => {
    const podcasts = await podcastService.getPodcasts();
    if (!podcasts) throw console.log('There is no podcast');

    setPodcasts(podcasts);
  }

  const getEpisodes = async () => {
    const episodes = await episodeService.getEpisodes();
    if (!episodes) throw console.log('There is no episodes');

    setEpisodes(episodes);
  }

  useEffect(()=> {
    getPodcasts();
    getEpisodes();
  },[])

  return (
    <div>
      <Content items={podcasts} episodes={episodes} name={'Podcasts'} ml={'ml-20'} margin={'m-6'} to={'/podcast/'}/>
    </div>
  )
}

export default Home