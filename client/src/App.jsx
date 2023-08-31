import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App