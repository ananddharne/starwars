import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav className='nav-container'>
    <Link to='/'> <img className="logo" src={"starwars.png"}/></Link>
        <button className='navLinks'><Link className='navLinks' to='/'>Home</Link></button>
        <button className='navLinks'><Link className='navLinks' to='/character'>Characters</Link></button>
    </nav>
  </header>
)

export default Header
