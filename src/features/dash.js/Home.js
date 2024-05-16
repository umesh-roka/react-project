import React from 'react'
import { Outlet } from 'react-router'


const Home = () => {
  return (
    <div>
      <div className='flex flex-col'>
      <h1>This is home</h1>
      </div>
      <Outlet/>
    </div>
  )
}

export default Home
