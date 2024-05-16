import React from 'react'
import Header from '../../ui/Header'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='flex flex-col'>
      <NavLink to='/'>Child</NavLink>
      <NavLink to='/Child2'>Child2</NavLink>
      <h1>This is home</h1>
      </div>
      <Outlet/>
    </div>
  )
}

export default Home
