import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black text-white flex justify-between p-6 '>
      <h1 className='text-2xl'>Tailwind</h1>
      <div className='grid grid-cols-autoFit'>
     <NavLink className={({isActive})=>
        isActive ? " bg-pink-300" : "bg-none"
      } to='/'>Home</NavLink>
      <NavLink className={({isActive})=>
        isActive ? " bg-pink-300" : ""
      } to='/about'>About</NavLink>
       <NavLink className={({isActive})=>
        isActive ? " bg-pink-300" : "bg-none"
      } to='/contact'>Contact</NavLink>
    </div>
    </div>
  )
}

export default Header
