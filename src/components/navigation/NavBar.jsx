import React,{useRef} from 'react'
import './navbar.scss'

const NavBar = () => {
  // const items = ['Home','Projects','about','Skills','work']
  const menuRef = useRef(null) 
  const toggleHambugerMenu = ()=>{
    const menuElement = menuRef.current
    menuElement.classList.toggle('active')
  }
  return (
    <header className='container'>
      <div className='logo_name'>
        <a href="#">A</a>
      </div>
      <nav className='container_menu'>
        <ul className='menu_bar'ref={menuRef}>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#project'>Projects</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <div className='hamburger_menu' onClick={()=>toggleHambugerMenu()}>
          <div className='hamburger_top_bar'></div>
          <div className='hamburger_middle_bar'></div>
          <div className='hamburger_bottom_bar'></div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;