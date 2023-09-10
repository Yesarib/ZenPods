import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PodcastProvider } from './Context/PodcastContext' 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PodcastProvider>
      <App />
    </PodcastProvider>
  </React.StrictMode>
)
