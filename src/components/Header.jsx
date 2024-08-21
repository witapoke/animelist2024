import React from 'react'
import '../styles/Header.css'
export default function Header() {
  return (
    <header>
      <div className='title'>
        <h2>My Anime List</h2>
      </div>
      <div className='img-header'>
        <img
          src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3c097e07-ab69-4781-adcd-22c2d9af8902/dg7cmvh-5e314cc0-92a9-4b69-ab6c-373aeb3055c5.png/v1/fill/w_1280,h_1280,q_80,strp/padoru_padoru_by_wabisabiwonders_dg7cmvh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjMDk3ZTA3LWFiNjktNDc4MS1hZGNkLTIyYzJkOWFmODkwMlwvZGc3Y212aC01ZTMxNGNjMC05MmE5LTRiNjktYWI2Yy0zNzNhZWIzMDU1YzUucG5nIiwiaGVpZ2h0IjoiPD0xMjgwIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvM2MwOTdlMDctYWI2OS00NzgxLWFkY2QtMjJjMmQ5YWY4OTAyXC93YWJpc2FiaXdvbmRlcnMtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.Wpoi2KUi0mFKkrPeFo15PG6M9GgSGi4XZSGF2FggTk0'
          alt=''
          style={{ width: 50, height: 50 }}
        />
      </div>
      <div className='sign-up'>
        <button className='login-btn'>Login</button>
        <button className='sign-btn'>Sign Up </button>
      </div>
    </header>
  )
}
