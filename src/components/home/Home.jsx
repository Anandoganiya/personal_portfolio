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
          A front end developer like developing  Web technologies.
        </p>
        <button className='btn_cv'>Download Resume</button>
      </div>
    </div>
  )
}

export default Home