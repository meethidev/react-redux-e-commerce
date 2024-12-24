import React, { useEffect } from 'react'
import BackButton from '../components/BackButton'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../features/products/productSlice'
import Loading from '../components/Loading'
import { addToCart, increaseCartItem } from '../features/cart/cartSlice'
import { toast } from 'react-toastify'

const ProductPage = () => {

    const  { product, isLoading, isError} = useSelector((state) => state.products);

    const { id } = useParams();

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        toast.info("Itme added to cart", dispatch(addToCart(product)));
    }


    useEffect(() => {
        dispatch(getProduct(id));
    }, [])

    if(!product || isLoading ){
        return (
            <Loading/>
        )
    }


  return (

<div className='pt-28 pl-5'>
<BackButton />
        <div className=" bg-white min-h-screen flex items-center justify-center">
       
       <div className="flex flex-col space-y-10 md:flex-row md:space-x-32 md:space-y-0  rounded-xl">
   
      
               <div>
                   <img className="w-56 hover:scale-105 duration-200 mx-auto" src={product?.image} alt="" srcset=""/>
               </div>
   
             
               <div className="flex flex-col space-y-6">
              
                   <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                       <div>
                           <div className=" hover:shadow-pink-400/10 bg-black text-white text-center rounded-full text-sm px-3 py-1 inline-block">
                               Free Shipping
                            </div>
                       </div>
                       
                       <div className="text-2xl font-medium max-w-sm tect-center md:text-left">
                           {product?.title}
                       </div>
   
                      
                       <div className="flex flex-col mb-4 text-center space-y-6 md:text-left">
                           <p className="text-lg line-through">${product?.price + 200}</p>
                           <p className="text-pink-500 font-semibold font-mono text-5xl">${product?.price}</p>
                           <p className="text-sm font-light text-gray-500 max-w-sm">
                            {product?.description}
                           </p>
                       </div>
   
                     
   
                       <div className="group">
                           <button className="transition-all duration-150 w-full bg-blue-700 text-white rounded-xl border border-b-8 border-b-blue-700 group-hover:border-t-8 group-hover:border-b-0 group-hover:border-t-blue-700 group-hover:shadow-lg">
                               <div className="px-4 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700">
                                   Buy Now
                               </div>
                           </button>
                       </div>
   
                      
                        <div className="flex items-center space-x-3 group">
                           <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
                           <div className="text-sm ">{product?.rating?.count} pcs. in stock</div>
                        </div>
   
                      
   
                        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 ">
                           <Link onClick={() => handleAddToCart(product)} to={"/cart"} className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg hover:bg-pink-300 hover:scale-105 duration-300">
                               <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                   <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                                 </svg>
                               <span>Add To Cart</span>
                           </Link>
                           <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg hover:bg-pink-300 hover:scale-105 duration-300">
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                   <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                 </svg>
                                 
                               <span>Wishlist</span>
                           </button>
                        </div>
   
                   </div>
               </div>
   
   
       </div>
   
   
   </div>

</div>
  )
}

export default ProductPage
