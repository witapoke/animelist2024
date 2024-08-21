import React from 'react'
import '../styles/NavBar.css'
export default function NavBar() {
  return (
    <nav>
      <ul className='horizontal-list'>
        <div className='left-menu'>
          <li className='main-li'>
            <a href='#' className='topic'>
              Anime
            </a>
            <ul className='vertical-list'>
              <li>
                <a href=''>Anime Search</a>
              </li>
              <li>
                <a href=''>Top anime</a>
              </li>
              <li>
                <a href=''>Seasonal anime</a>
              </li>
            </ul>
          </li>

          <li className='main-li'>
            <a href='#' className='topic'>
              Manga
            </a>
            <ul className='vertical-list'>
              <li>
                <a href=''>Manga Search</a>
              </li>
              <li>
                <a href=''>Top manga</a>
              </li>
              <li>
                <a href=''>Seasonal manga</a>
              </li>
            </ul>
          </li>

          <li className='main-li'>
            <a href='#' className='topic'>
              Recommendations
            </a>
            <ul className='vertical-list'>
              <li>
                <a href=''>Anime recommendations</a>
              </li>
              <li>
                <a href=''>Manga recommendations</a>
              </li>
            </ul>
          </li>
        </div>
        <div className='right-menu'>
          <form action=''>
            <select name='' id=''>
              <option value=''>All</option>
              <option value=''>Anime</option>
              <option value=''>Manga</option>
              <option value=''>Characters</option>
            </select>
            <input type='text' placeholder='Search anime, manga, and more...' />
          </form>
        </div>
      </ul>
    </nav>
  )
}
