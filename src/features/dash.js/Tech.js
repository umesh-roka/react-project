import React from 'react'
import {DiAtom,DiCodepen,DiCss3Full,DiPython,DiReact,DiSwift} from "react-icons/di"

const Tech = () => {
  return (
    <div className="">
      <h1 className='text-3xl text-center mt-5'>Technology I Know</h1>
    <div className='grid grid-cols-autoFit justify-items-center '>
      <DiAtom size={200} className='hover:scale-125 hover:text-pink-600 transition-all ease-out'/>
      <DiCodepen size={200}/>
      <DiCss3Full size={200}/>
      <DiPython size={200}/>
      <DiReact size={200}/>
      <DiSwift size={200}/>
      </div>
    </div>
  )
}

export default Tech
