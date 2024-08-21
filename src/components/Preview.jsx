import '../styles/Preview.css'
export default function Preview({
  rank,
  images,
  title,
  type,
  episodes,
  score,
  members
}) {
  return (
    <div className='main-preview'>
      <div className='rank'>
        <p> {rank} </p>
      </div>
      <div className='details'>
        <img src={images.jpg.small_image_url} alt='' />
        <div className='text-details'>
          <p className='first-p'> {title} </p>
          <p className='second-p'>
            {' '}
            {type}, {episodes} , scored {score} {members} members
          </p>
        </div>
      </div>
      <div className='btn'>
        <button>add</button>
      </div>
    </div>
  )
}
