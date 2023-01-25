import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { SiGithub } from 'react-icons/si'


const Navbar = () => {
    return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white z-10'>
        <h1 className='w-full text-3xl font-bold text-[#00dfd4]'>PH</h1>
        <ul className='flex'>
            <button className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-md font-medium mt-7 mx-auto py-0.5 z-10 text-black hover:bg-white focus:ring focus:ring-white-300'>Resume</button>
            
            <div className="z-10">
            <a
            href="https://www.linkedin.com/in/piercen-hughes-617044188/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <AiFillLinkedin size={50} className='cursor-pointer hover:animate-pulse my-6 mx-auto w-[70px] pb-0.5 pl-6 z-10'/>
            </a>
        </div>
            <div className="z-10">
            <a
            href="https://github.com/pie4fools?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            >
            <SiGithub size={50} className="cursor-pointer hover:animate-pulse my-6 mx-auto w-[60px] pb-0.5 pl-6 z-10" />
            </a>
        </div>
        </ul>
    </div>
    
  )
}

export default Navbar