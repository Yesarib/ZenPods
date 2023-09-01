import { useEffect, useState } from 'react'
import Content from '../Components/Content'
import Footbar from '../Components/Footbar'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import authService from '../Services/Auth'
import podcastService from '../Services/Podcasts'

const Home = () => {
  const [user, setUser] = useState(null);
  const [podcasts, setPodcasts] = useState([]);

  const getUser = async() => {
    const user = await authService.getCurrentUser();
    console.log(user);
    if(user){
        setUser(user.data.user)
    }
  }

  const getPodcasts = async () => {
    const podcasts = await podcastService.getPodcasts();
    if (!podcasts) throw console.log('There is no podcast');

    setPodcasts(podcasts);
  }

  useEffect(()=> {
    getUser();
    getPodcasts();
  },[])

  return (
    <div className='flex space-x-5'>
      <div className='w-1/4 flex flex-col h-screen rounded-xl'>
        <Sidebar user={user} />
        { !user && <Footbar /> }
      </div>
      <div className='w-3/4 bg-gradient-to-b from-[#010c2d] rounded-xl'>
        <Navbar user={user}/>
        <div className='flex items-center mt-10 justify-center'>
          <div className='w-11/12 border-t border-gray-800'></div>
        </div>
        <Content podcasts={podcasts}/>
      </div>
    </div>
  )
}

export default Home