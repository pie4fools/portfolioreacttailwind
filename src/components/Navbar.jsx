import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { SiGithub } from 'react-icons/si'
import { motion } from 'framer-motion'
import PiercenHResume from '../files/PiercenHResume 20232.pdf'


const Navbar = () => {
    return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white z-10'>
        <motion.h1
    initial={{
       x: -500,
       opacity: 0, 
    }}
    animate={{
        x: 0,
        opacity: 1,
    }}
    transition={{ duration: 1.5 }}  className='w-full text-3xl font-bold text-[#00dfd4]'>PH</motion.h1>
        <motion.ul
    initial={{
       x: 100,
       opacity: 0, 
    }}
    animate={{
        x: 0,
        opacity: 1,
    }}
    transition={{ duration: 1.5 }} className='flex '>
            <a className='bg-[#00dfd4] w-[80px] h-[34px] rounded-md text-center font-medium mt-7 mx-auto py-1.5 z-10 text-black hover:bg-white focus:ring focus:ring-white-300 transition ease-in-out' href={PiercenHResume} target="_blank" rel="noreferrer">Resume</a>
            <div className="z-10">
            <a
            href="https://www.linkedin.com/in/piercen-hughes-617044188/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <AiFillLinkedin size={45} className='cursor-pointer hover:animate-pulse my-6 mx-auto w-[70px] pb-0.5 pl-6 z-10'/>
            </a>
        </div>
            <div className="z-10">
            <a
            href="https://github.com/pie4fools?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            >
            <SiGithub size={45} className="cursor-pointer hover:animate-pulse my-6 mx-auto w-[60px] pb-0.5 pl-6 z-10" />
            </a>
        </div>
        </motion.ul>
    </div>
    
  )
}

export default Navbar