import React from 'react'
import './projects.scss'

const Projects = () => {

  return (
    <div className='project' id='project'>
        <div className='project_title'>
            Projects
        </div>
        <div className='card_container'>
            <div className='card_item'>
              <img src="/images/bloggingImage.jpeg" alt="project"/>
              <a href='https://blogging-day.vercel.app/'>Blogging Web App</a>
            </div>
            <div className='card_item'>
              <img src="/images/insta.jpg" alt="project"/>
              <a href='https://insta-ochre.vercel.app/'>Instagram Clone</a>
            </div>
            <div className='card_item'>
              <img src="/images/movie.jpg" alt="project"/>
              <a href='https://movie-app-anandoganiya.vercel.app/'>Movie Web App</a>
            </div>
        </div>

    </div>
  )
}

export default Projects