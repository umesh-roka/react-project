import React from 'react'

const Header = () => {
  return (
    <div className='z-10 sticky top-0 bg-black text-white flex justify-between px-7 py-5 items-center'>
      <h1 className='text-2xl'>Tailwind</h1>
      <nav className='space-x-4'>
       <button>About us</button>
       <button>Contact</button>
      </nav>
    </div>
  )
}

export default Header
