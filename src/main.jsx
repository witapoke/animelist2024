import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AnimeState } from './context/AnimeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AnimeState>
    <App />
  </AnimeState>
)
