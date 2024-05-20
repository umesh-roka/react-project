import React from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {
const nav = useNavigate();

  console.log(nav);

  return (
    <div>
      <h1>PAGE NOT FOUND</h1>
      <button onClick={()=>nav(-1)}>Go Back</button>
    </div>
  )
}

export default NotFound
