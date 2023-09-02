import { useEffect, useState } from 'react'
import Content from '../Components/Content'
import podcastService from '../Services/Podcasts'

const Home = () => {
  const [podcasts, setPodcasts] = useState([]);

  

  const getPodcasts = async () => {
    const podcasts = await podcastService.getPodcasts();
    if (!podcasts) throw console.log('There is no podcast');

    setPodcasts(podcasts);
  }

  useEffect(()=> {
    getPodcasts();
  },[])

  return (
    <div>
      <Content podcasts={podcasts}/>
    </div>
  )
}

export default Home