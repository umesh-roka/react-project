import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black text-white flex justify-end '>
      <NavLink className='px-4' to='/contact'>Contact</NavLink>
      <NavLink to='/about'>About</NavLink>
      
    </div>
  )
}

export default Header
