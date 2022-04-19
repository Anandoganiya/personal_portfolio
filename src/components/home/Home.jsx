// import beach from '../../../public/images/beach.jpg'
import './home.scss'

const Home = () => {
  return (
    <div className='home' id="home">
      <div className='home_title'>
        <div className='title'>Hi</div>
        <div className='title'>I'm Anand</div>
        <div className='title'>
         front-end developer
        </div>
        <p className='intro'>
          A front end developer passionate about developing  Web technologies.
        </p>
        <a className='resume_download' download href='/assets/resume.pdf'>Download Resume</a>
      </div>
    </div>
  )
}

export default Home