import { useEffect } from 'react'
import './styles/App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import SignImage from './components/SignImage'
import Welcome from './components/Welcome'
import { useAnimeContext } from './context/AnimeContext'
export default function App() {
  const { getTopAnime } = useAnimeContext()

  useEffect(() => {
    getTopAnime()
  }, [])

  return (
    <div className='App'>
      <Header />
      <NavBar />
      <SignImage />
      <Welcome />
    </div>
  )
}
