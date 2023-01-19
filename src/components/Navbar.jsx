import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'

const Navbar = () => {
    return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00dfd4]'>PH</h1>
        <ul className='flex'>
            <button className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-md font-medium mt-7 mx-auto pb-0.5 z-10 text-black hover:bg-white focus:ring focus:ring-white-300'>Resume</button>
            <AiFillLinkedin size={50} className='my-6 mx-auto w-[90px] pb-0.5 rounded-md hover:text-blue-300'/>
        </ul>
    </div>
    
  )
}

export default Navbar