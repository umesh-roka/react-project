import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black text-white flex justify-between p-6 '>
      <h1 className='text-2xl'>Tailwind</h1>
      <div className='space-x-2  '>
     <NavLink className={({isActive})=>
        isActive ? " bg-pink-300" : "bg-none"
      } to='/'>Home</NavLink>
      <NavLink className={({isActive})=>
        isActive ? " bg-pink-300" : ""
      } to='/about'>About</NavLink>
       <NavLink className={({isActive})=>
        isActive ? " bg-pink-300" : "bg-none"
      } to='/contact'>Contact</NavLink>
             <NavLink className={({isActive})=>
        isActive ? " bg-pink-300" : "bg-none"
      } to='*'>Service</NavLink>
    </div>
    </div>
  )
}

export default Header
