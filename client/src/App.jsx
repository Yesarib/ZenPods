import { useEffect, useState } from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Podcast from './Pages/Podcast';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Playlist from './Pages/Playlist';
import EpisodeCard from './Components/EpisodeCard';
import Profile from './Pages/Profile';
import Search from './Pages/Search';
import Genre from './Pages/Genre';
import Register from './Pages/Register';
import Sidebar from './Components/Sidebar'
import authService from './Services/Auth';
import Upload from './Pages/Upload';

const App = () => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const user = await authService.getCurrentUser();
    console.log(user);
    if (user) {
      setUser(user.data.user);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className='flex'>
        <div className='w-full h-screen flex mb-10'>
          <Router>
            {user && (
              <div className='w-1/4 flex flex-col h-screen rounded-xl'>
                <Sidebar user={user} />
                <Footer />
              </div>
            )}
            <div className={user ? 'flex flex-col w-3/4 ml-5 rounded-xl' : 'flex flex-col w-full ml-5 rounded-xl'}>
              <Navbar user={user} />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<Search />} />
                <Route path='/genre/:categoryId' element={<Genre />} />
                <Route path='/podcast/:id' element={<Podcast user={user} />} />
                <Route path='/podcastlist/:id' element={<Playlist user={user}/>} />
                <Route path='/profile/:id' element={<Profile currentUser={user} />} />
                <Route path='/upload' element={<Upload user={user} />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
              </Routes>
            </div>
          </Router>
        </div>
      </div>
      {user && (
        <div className='fixed bottom-0 left-0 w-full mt-10'>
          <EpisodeCard />
        </div>
      )}
    </>
  );
};

export default App;
