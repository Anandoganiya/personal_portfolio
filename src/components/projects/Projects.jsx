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
              <img src="/images/bloggingImage.jpeg" alt="project" />
              <p>Blogging Web App</p>
            </div>
            {/* <div className='card_item'>
              <img src="/images/beach.jpg" alt="project" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='card_item'>
              <img src="/images/beach.jpg" alt="project" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div> */}
        </div>

    </div>
  )
}

export default Projects