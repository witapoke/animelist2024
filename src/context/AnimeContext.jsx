import { createContext, useContext, useState } from 'react'
const baseUrl = 'https://api.jikan.moe/v4/anime'
export const AnimeContext = createContext()

export const AnimeState = ({ children }) => {
  const [allAnimes, setAllAnimes] = useState([])
  const [topAnimes, setTopAnimes] = useState([])

  const getAllAnimes = async () => {
    const req = await fetch(baseUrl)
    const res = await req.json()
    console.log(res.data)
    setAllAnimes(res.data)
    
  }

  const getTopAnime = async () => {
    const req = await fetch('https://api.jikan.moe/v4/top/anime')
    const res = await req.json()
    console.log(res.data)
    setTopAnimes(res.data)
  }

  return (
    <AnimeContext.Provider
      value={{ getAllAnimes, getTopAnime, topAnimes, allAnimes }}
    >
      {children}
    </AnimeContext.Provider>
  )
}

export const useAnimeContext = () => {
  return useContext(AnimeContext)
}
