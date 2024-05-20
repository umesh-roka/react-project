/* eslint-disable array-callback-return */
import React from 'react'
import { products } from '../../dummy/data'
import { useNavigate } from 'react-router'

const Home = () => {
  const nav =useNavigate();
  return (
    <div className='p-4'>
    
      {products.map((product)=>{
return <div onClick={()=>nav(`/product/${product.id}`)} key={product.id} className='space-y-2
cursor-pointer mb-4'>
  <img className='' src={product.thumbnail} alt="" />
  <h1 className='text-2xl'>{product.title}</h1>

</div>




})}
    </div>
  )
}

export default Home
