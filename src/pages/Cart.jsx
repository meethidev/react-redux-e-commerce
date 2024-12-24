import React from 'react'
import CartItems from '../components/CartItem'
import BillCart from '../components/BillCart'
import BackButton from '../components/BackButton'
import { useSelector } from 'react-redux'


const Cart = () => {

  const{ cartItems } = useSelector((state) => state.cart);

  if( !cartItems || cartItems.length === 0 ) {
    return (

  <div className='pt-32 pl-5'>
  <BackButton />
        <div className='min-h-screen pt-36'>
        <h1 className='my-5 text-gray-600 text-4xl text-center'>No items added yet..</h1>
      </div>
  
  </div>
    )
  }

  return (
   
    <div className='md:pt-28 pl-5 pt-24'>
        <BackButton/>
        <div className='pt-5'>
        <div className='p-5'>
             <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                   {
                    cartItems.map(cartItem =>  <CartItems cartItem={cartItem} key={cartItem.id}/>)
                   }
                </div>
               <BillCart cartItems={cartItems} />
            </div>
        </div>
    </div>
    </div>   

  

  )
}

export default Cart


