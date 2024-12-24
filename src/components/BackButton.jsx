import React from 'react'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom'



const BackButton = () => {
  return (
<Link to={"/"} type="button" class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
<div className='flex space-x-2'>
<FaHome className='h-5 w-5 pt-1' /> <p>Back</p>
</div>
</Link>  )
}

export default BackButton
