import { useAnimeContext } from '../context/AnimeContext.jsx'
import '../styles/Welcome.css'
import Advertising from './Advertising.jsx'
import Preview from './Preview.jsx'
export default function Welcome() {
  const { topAnimes } = useAnimeContext()

  return (
    <section className='main-container'>
      <h3 className='title'>Welcome to MyAnimeList.net!</h3>
      <div className='content'>
        <div className='left-container'>
          <article>
            <div className='article-header'>
              <p>MALxJapan -More than just anime-</p>
              <a href='#'>Visit MALxJapan</a>
            </div>
            <hr />
            <div className='article-content'>
              <Advertising
                imagen={'https://cdn.fs.teachablecdn.com/uSCUc1lgSseMnbDRBGE2'}
                texto={'Learn how to draw anime and manga with us!'}
              />

              <Advertising
                imagen={
                  'https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwBJmNc9QTspCfwJ5jEPDkSg'
                }
                texto={'Your guide to 2024s Must-Read Manga is here 📖'}
              />

              <Advertising
                imagen={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE0QGHLAbPAutIoj7alhxkMZcIHd69NPbr-A&s'
                }
                texto={'Join the【OSHI NO KO】Official MAL Club 🌟'}
              />
            </div>
          </article>

          <article>
            <div className='article-header'>
              <p>Summer 2024 Anime</p>
              <a href='#'>View More</a>
            </div>
            <hr />
            <div className='article-content'>
              <Advertising
                imagen={'https://cdn.fs.teachablecdn.com/uSCUc1lgSseMnbDRBGE2'}
                texto={'Learn how to draw anime and manga with us!'}
              />

              <Advertising
                imagen={
                  'https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwBJmNc9QTspCfwJ5jEPDkSg'
                }
                texto={'Your guide to 2024s Must-Read Manga is here 📖'}
              />

              <Advertising
                imagen={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE0QGHLAbPAutIoj7alhxkMZcIHd69NPbr-A&s'
                }
                texto={'Join the【OSHI NO KO】Official MAL Club 🌟'}
              />
            </div>
          </article>
        </div>
        <div className='right-container'>
          <div className='list-component'>
            <div className='list-header'>
              <p>Top airing anime</p>
              <p>
                <a href='#'>More</a>
              </p>
            </div>
            <div className='list-content'>
              {topAnimes.slice(0, 5).map((anime) => (
                <Preview {...anime} key={anime.rank} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
