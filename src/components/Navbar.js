import React from 'react'
import logo from "../shared/logo.svg"
import { Link } from 'react-router-dom'


function Navbar({stopbutton=false}) {
  return (
    <>
    <nav className='navbar'>
          <div className='logo-container'>
            <img src={logo}/>
          </div>
          <Link to={stopbutton ? "/":"/gallery/0"} >
            {stopbutton ? "STOP SLIDESHOW":"START SLIDESHOW"}
          </Link>
      </nav>
      <hr/>
    </>
  )
}

export default Navbar