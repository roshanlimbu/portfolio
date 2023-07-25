import React from 'react'
import {Link, NavLink} from "react-router-dom"
import '../Styles/Header.css'
const Header = () => {
  return (
    <nav>
      <div className='logo-container'>
        <Link className='logo' to='/'>Logo</Link>
      </div>
      <div className='nav_container'>
        <NavLink className="nav-links" to="/">Home</NavLink>
        <NavLink className="nav-links" to="about">About</NavLink>
        <NavLink className="nav-links" to="contact">Contact</NavLink>
      </div>
    </nav>
  )
}

export default Header
