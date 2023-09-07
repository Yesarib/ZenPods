import {useEffect,useState} from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Podcast from './Pages/Podcast'
import Sidebar from './Components/Sidebar'
import authService from './Services/Auth'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Playlist from './Pages/Playlist'
import EpisodeCard from './Components/EpisodeCard'



const App = () => {
  const [user, setUser] = useState(null);

  const getUser = async() => {
    const user = await authService.getCurrentUser();
    console.log(user);
    if(user){
        setUser(user.data.user)
    }
  }
  useEffect(()=> {
    getUser();
  },[])
  return (
    <>
      <div className='flex'>
        <div className='w-full h-screen flex mb-10'>
          <Router>
            <div className='w-1/4 flex flex-col h-screen rounded-xl '>
              <Sidebar user={user} />
              { !user && <Footer /> }
            </div>
            <div className='flex flex-col w-3/4 ml-5 bg-gradient rounded-xl'>
              <Navbar user={user}/>
              
              <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/podcast/:id' element={ <Podcast user={user}/> } />
                <Route path='/podcastlist/:id' element={ <Playlist /> } />
                <Route path='/login' element={ <Login /> } />
              </Routes>
            </div>
          </Router>
        </div>
      </div>
      <div className='sticky bottom-0 left-0 w-full'>
        <EpisodeCard /> 
      </div>

    </>
  )
}

export default App