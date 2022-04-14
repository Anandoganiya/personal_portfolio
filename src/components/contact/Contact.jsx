import React from 'react'
import './contact.scss'

const Contact = () => {
  return (
    <div className='contact'id='contact'>
      <div className='contact_title'>
        contact
      </div>
        {/* <form action="" className='contact_form'>
           <div className='form_items'>
            <input type="text" placeholder='name'  />
            <input type="email"  placeholder='email' />
            <textarea name="" placeholder='message' id="" cols="30" rows="10"></textarea>
            <input type="submit" className='submit' />
           </div>
        </form> */}
        <div className='contact_form'>
          I would love to connect!. Feel free to reach out me on my email 
          <a href="mailo:anandoganiya@gmail.com" className='link'>hi@anand</a>
        </div>
    </div>
  )
}

export default Contact