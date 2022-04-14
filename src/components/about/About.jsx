import React from 'react'
import './about.scss'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about_info'>
          <div className='profile_image'>
            <img src="/images/space.jpg" alt="profile image" />
          </div>
          {/* <div>About</div> */}
          <div className='profile_info'>
            I am from Goa, complete BE in Computer Engineering from Goa University.
            I am passionate about all things web. I stress on the importance of having good structure and proper architecture while building applications. I like my code to be clean without any squiggly lines.
            When I’m not fiddling around with code, I tend to learn new things, watch series, play badminton, travelling and more.
          </div>
        </div>
    </div>
  )
}

export default About