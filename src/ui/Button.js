import React from 'react'

const Button = ({color}) => {
  console.log(color);
  return (
    <div>
      <button className='bg-green-400 text-white px-3 py-1'>Click</button>
    </div>
  )
}

export default Button
