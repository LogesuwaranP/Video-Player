import React from 'react'
import './Nav.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link, useNavigate } from 'react-router-dom';
const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav className='nav-container'>
      <div className='back' onClick={()=>navigate(-1)}>
          <KeyboardBackspaceIcon/>
      </div>
      <div className='link-container'>
          <Link to="/"><li>Videos</li></Link>
          {/* <Link to="/music"><li>Music</li></Link> */}
          <Link to="/edit"><li>About</li></Link> 
          <Link to="/contact"><li>Contact</li></Link>
      </div>
      
    </nav>
  )
}

export default Nav
