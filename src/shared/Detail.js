import React from 'react'
import { useParams } from 'react-router'
import { products } from '../dummy/data';

const Detail = () => {
  const {id} =useParams();
  const pro =products.find((product)=>product.id=== Number((id)))
  console.log(pro);
  return (
    <div>
      
    </div>
  )
}

export default Detail
