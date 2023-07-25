import React from 'react'
import {Link, NavLink} from "react-router-dom"
const Header = () => {
  return (
    <div>
      <nav className='nav_container'>
          <NavLink className="nav-links" to="/">Home</NavLink>
          <NavLink className="nav-links" to="about">About</NavLink>
          <NavLink className="nav-links" to="contact">Contact</NavLink>
      </nav>
    </div>
  )
}

export default Header
