import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { getProducts } from '../features/products/productSlice'
import Loading from "../components/Loading"
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const Home = () => {

    const{ user } = useSelector((state) => state.auth);

    const { products, isLoading, isError, message } = useSelector((state) => state.products)

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(()=>{

        if(!user){
            navigate("/login");
        }

        if(isError){
            toast.error("something went wrong");
        }

        dispatch(getProducts());

    }, [user]) 

    if(isLoading){
        return <Loading/>;
    }

  return (
    <div className='container w-full py-32 '>
        {/* HERO SECTION */}
        <section className='p-5 shadow-sm h-auto w-full flex flex-col items-center justify-around md:flex-row '>
        {/* TEXT */}
        <div className='text-center md:text-left'>
            <h1 className='text-4xl font-bold m-x-sm my-4'><p className='text-red-600  text-5xl font-serif'>Shop</p> Anything, Anywhere</h1>
            <p className='text-xl font-thin text-gray-600 my-3'>Get Your Orders @24/7</p>
            <Link to={"/"} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium  text-sm px-5 py-3 text-center mt-8 mb-2 ">Shop Now</Link>
        </div>
        {/* IMAGE */}
            <img className='h-[400px] w-[600px] pt-8 md:block hidden' src="https://images.pexels.com/photos/749353/pexels-photo-749353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" /> 
        </section>

        {/* PRODUCTS */}
        <h1 className="text-center text-3xl font-sans font-bold mt-44 mb-3 text-red-600">All Products</h1>

        <div className='p-5 px-10 grid lg:grid-cols-3 md:grid-cols-2 gap-4' >
       {
        products.map((product)=><ProductCard key={product.id} product={product}/>)
       }
        </div>

    </div>
  )
}

export default Home




{/* <img className='h-[400px] w-[600px] pt-8 md:block hidden' src="https://images.pexels.com/photos/749353/pexels-photo-749353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" /> */}
