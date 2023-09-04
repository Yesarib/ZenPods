import {useEffect,useState} from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Podcast from './Pages/Podcast'
import Sidebar from './Components/Sidebar'
import authService from './Services/Auth'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import PodcastList from './Pages/PodcastList'



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
    <div className='flex'>
      <Router>
        <div className='w-1/4 flex flex-col h-screen rounded-xl'>
          <Sidebar user={user} />
          { !user && <Footer /> }
        </div>
        <div className='w-3/4 bg-gradient-to-b from-[#010c2d] rounded-xl'>
          <Navbar user={user}/>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/podcast/:id' element={ <Podcast /> } />
            <Route path='/podcastlist/:id' element={ <PodcastList /> } />
            <Route path='/login' element={ <Login /> } />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App