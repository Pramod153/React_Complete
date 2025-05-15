import React from 'react'

function ProductCard(props) {
  return (
    <div className='user'>
      <h1>Product Details</h1>
      <li>Name : {props.name}</li>
      <li>Price : {props.Price}</li>
      <li>Description : {props.desc || 'Nodescription Available'}</li>
    </div>
  )
}

export default ProductCard
