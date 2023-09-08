import React from 'react'
import {  NavLink } from 'react-router-dom'

const MenuBar = () => {
  return (
    <nav>
        <NavLink to="/" className='nav-link'>Home</NavLink>
        <NavLink to="/task" className='nav-link'>Task</NavLink>
        <NavLink to="/teamMembers" className='nav-link'>Team Members</NavLink>
        <NavLink to="/programs" className='nav-link'>Programs</NavLink>
        <NavLink to="/loginPage" className='nav-link'>Login</NavLink>
        
    </nav>
  )
}

export default MenuBar