import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/login' element={ <Login /> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App