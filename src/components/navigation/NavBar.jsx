import React,{useRef} from 'react'
import './navbar.scss'

const NavBar = () => {
  // const items = ['Home','Projects','about','Skills','work']
  const menuRef = useRef(null) 
  const hamburgerElement_top_bar = useRef(null)
  const hamburgerElement_middle_bar = useRef(null)
  const hamburgerElement_bottom_bar = useRef(null)
  const toggleHambugerMenu = ()=>{
    const menuElement = menuRef.current
    const top = hamburgerElement_top_bar.current
    const middle = hamburgerElement_middle_bar.current
    const bottom = hamburgerElement_bottom_bar.current
    top.classList.toggle('rotate_top')
    middle.classList.toggle('hide_line')
    bottom.classList.toggle('rotate_bottom')
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
            <a href='#home'>HOME</a>
          </li>
          <li>
            <a href='#about'>ABOUT</a>
          </li>
          <li>
            <a href='#project'>PROJECTS</a>
          </li>
          <li>
            <a href='#skills'>SKILLS</a>
          </li>
          <li>
            <a href='#contact'>CONTACT</a>
          </li>
        </ul>
        <div className='hamburger_menu' onClick={()=>toggleHambugerMenu()}>
          <div ref={hamburgerElement_top_bar} className='hamburger_top_bar'></div>
          <div ref={hamburgerElement_middle_bar} className='hamburger_middle_bar'></div>
          <div ref={hamburgerElement_bottom_bar} className='hamburger_bottom_bar'></div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;