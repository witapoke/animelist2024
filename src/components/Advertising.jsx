import React from 'react'
import '../styles/Advertising.css'
export default function Advertising({ imagen, texto }) {
  return (
    <article>
      <div className='advertising'>
        <div className='img-div'>
          <img src={imagen} alt='' />
        </div>

        <div className='p-div'>
          <p> {texto} </p>
        </div>
      </div>
    </article>
  )
}
