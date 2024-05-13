import React from 'react'
import { FaPython,FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";

const Display = () => {
  return (
    <div className=''>
     <div className='grid grid-cols-2 items-center text-white bg-purple-300'>
      <div >
      <dotlottie-player src="https://lottie.host/24590414-81cb-4e76-9ff9-154aa1cca69d/sUoD2tUtFl.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
      </div>
      <div className="dis-info">
        <h1 className='text-2xl'>Hi, I am Umesh Roka Magar</h1>
<h1 className='text-red-600 my-2 italic tracking-wider'>web Developer,Rounder,Freelencer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, laudantium minus omnis pariatur a sit esse dolorum expedita deleniti similique error? Possimus dolores cumque cupiditate sunt aspernatur id alias doloremque? Iste quisquam adipisci dolorum.</p>
      </div> 
      </div>
      <h1 className='text-5xl text-center py-5'>Technology I Know</h1>
      <div className='ml-20 grid grid-cols-4'>
      
      <FaPython  size="14em"  />
      <FaReact size="14em"/>
      <DiJavascript size="14em"/>
      <TiHtml5 size="14em" />
      </div>

      <h1 className='text-3xl text-center py-9'>Who AM I</h1>
      <div className='flex justify-center'>
        <div className='border-4 px-14 py-24 w-96 h-96 border-green-300 rounded-full bg-black text-white'>
          <h1>Name:Umesh Roka Magar</h1>
          <h1>Email:umeshmagar764@gmail.com</h1>
          <h1>Tel:9841144826</h1>
          <h1>Age:24</h1>
          <h1>Web Developer</h1>
        </div>
      </div>

    </div>
  )
}

export default Display
