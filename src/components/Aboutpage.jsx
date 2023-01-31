import React from 'react'
import headshot from '../images/headshot.jfif'
import { SiJavascript, SiTailwindcss, SiPython, SiPostgresql, SiCss3, SiReact, SiFlask, SiGithub } from 'react-icons/si'
import { motion } from 'framer-motion'


const Aboutpage = () => {
    return (
     <div>
      <div>
        <motion.div
        initial={{
           x: -500,
           opacity: 0,
           scale: 0.5 
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        className='text-white max-w-[800px] mt-5 pt-20 w-full mx-auto text-center flex flex-col justify-center'>
            <h1 className='text-[#00dfd4] md:text-4xl sm:text-4xl text-xl font-bold py-4 font-serif'>About</h1>
            <p className='text-gray-300 md:text-2xl sm:text-1xl py-4 font-serif'>Hello my name is Pierce. I have been learning and coding websites for the last year during my free time. The daily challenges and learning experiences have made me want to turn this into a career.</p>
            <motion.div
        initial={{
           x: -500,
           opacity: 0,
           scale: 0.5 
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        drag
        dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
        }}
        className='grid gap-8 lg:flex justify-center pt-20 lg:space-x-15 lg:mt-5'>
                <SiJavascript  size={75} className="hover:text-yellow-300 hover:scale-150 transition-all ease-in"/>
                <SiTailwindcss size={75} className="hover:text-blue-600 hover:scale-150 transition-all ease-in"/>
                <SiPython size={75} className="hover:text-blue-600 hover:scale-150 transition-all ease-in"/>
                <SiPostgresql size={75} className="hover:text-blue-300 hover:scale-150 transition-all ease-in"/>
                <SiCss3 size={75} className="hover:text-orange-400 hover:scale-150 transition-all ease-in"/>
                <SiReact size={75} className="hover:text-blue-500 hover:scale-150 transition-all ease-in"/>
                <SiFlask size={75} className="hover:scale-150 transition-all ease-in"/>
                <SiGithub size={75} className="hover:text-orange-300 hover:scale-150 transition-all ease-in"/>
            </motion.div>
            <motion.img  className='scale-50 rounded-full grayscale' src={headshot} alt="of face" />
        </motion.div>
    </div>
    </div>
  )
}

export default Aboutpage