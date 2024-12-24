import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutUser } from '../features/auth/authSlice';


const Navbar = () => {

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser())
  }


  return (
    <nav className='fixed container p-5 bg-white shadow-2xl flex items-center justify-between'>
        <Link to={"/"}>      
        <h1 className='font-bold uppercase text-xl'>Indore Bazara</h1>
        </Link>
      <span className='flex space-x-3'>
        {
            !user ? (<>
            <Link to={"/login"}> 
             <button  type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium  text-sm px-5 py-3 text-center me-2 mb-2 ">Login</button>
            </Link>
            <Link to={"/register"}> 
             <button  type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium  text-sm px-5 py-3 text-center me-2 mb-2 ">Register</button>
            </Link>
            </>):
            <div className='flex space-x-5'>
           
           <p className="text-xl text-gray-600 pt-1 font-semibold">Welcome, {user.name}</p>

            <button onClick={handleLogOut} className='py-2 px-3 bg-red-600 text-white rounded-sm'>LogOut</button>
            </div>

        }

      </span>

    </nav> 
  )
}

export default Navbar  