import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../features/cart/cartSlice'
import { } from '../features/cart/cartSlice'
import { toast } from 'react-toastify'


const CartItems = ({cartItem}) => {

  

  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {

    toast.info("Item removed successfully.", dispatch(removeFromCart(id)));
    ;
  }
  

  return (
    <div className='mb-3 flex itmems-center space-x-10 p-5 rounded-md border shadow-sm'>
    <img className='w-32' src={cartItem.image} alt="" srcset="" />
    <span>
    <h1 className='text-2xl font-bold my-2'>{cartItem.title}</h1>
    <h2 className='text-xl font-bold my-2'>Price : {cartItem.price}</h2>
    <h3 className='text-sm font-bold my-2'>Qty : {cartItem.quantity}</h3>
    <div className='pt-2'>
    <button onClick={() => {handleRemoveFromCart(cartItem.id)}} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2">Remove Item</button>

    </div>
    </span>



</div>
  )
}

export default CartItems
