import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <div className=' p-4 shadow-xl border rounded-sm flex flex-col justify-center items-center space-y-3'>
    <img className='h-56' src={product.image} alt="" srcset="" />
    <span>
        <h1 className='my-1 text-2xl font-bold max-w-sm text-center'>{product.title}</h1>
 
        <h2 className='my-1 text-xl font-bold text-center'>Price : {product.price}</h2>
        <h3 className='my-2 text-sm font-semibold text-center'>Rating : {product.rating.rate}</h3>

    </span>
    <Link to={`product/${product.id}`} type="button" class="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 ">View More</Link>
</div>
  )
}
export default ProductCard
