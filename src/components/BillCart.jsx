import React from 'react'
import { quantity } from '../features/cart/cartSlice'

const BillCart = ({ cartItems, totalPrice }) => {

  const total = cartItems.reduce((p, c) => p+c.price * c.quantity , 0)


  return (
    <div className='p-5  shadow-sm'>
    <h1 className='text-4xl font-semibold my-2'>Your Bill:</h1>
    <h2 className='text-2xl my-2'>Total Items: {cartItems.length}</h2>
    <h2 className='text-2xl my-2'>Tax (including GST: 18%): {(total * 18) / 100}</h2>
    <h2 className='text-2xl my-2'>Total Amount: {total + (total * 18) / 100 }  </h2>
   <div className='pt-4'>
   <button class="p relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 w-full  group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 w-full bg-white dark:bg-green-600  group-hover:bg-opacity-0">
    Pay Now
    </span>
    </button>
   </div>
   </div>
  )
}

export default BillCart
