import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

const RouteLayout = () => {
  return (
    <div>
      <Header/>

      <Outlet/>
    </div>
  )
}

export default RouteLayout
