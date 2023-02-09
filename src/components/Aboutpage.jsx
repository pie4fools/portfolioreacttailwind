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
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.7,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once:true }}
        className='text-white max-w-[800px] mt-5 pt-20 w-full mx-auto flex flex-col justify-center'>
            <h2 className='text-[white] md:text-4xl sm:text-4xl text-xl font-bold py-4 px-5 font-raleway uppercase text-left'>About</h2>
            <p className='text-gray-300 md:text-sm sm:text-1xl py-4 font-semibold font-sans px-5'>Hello my name is Pierce. My current projects focus on E-Commerce, aesthetics, responsive designs, and designing in general. When i'm not actively coding, i'm usually thinking of a better way to design/animate a current or previous project. My other time is spent pushing my limits. My primary focus is to master JS, then learn backend technologies like Postgres, Django, Firebase, and Flask. From there I will move on to the cloud with Lambda, EC2 web servers, CI/CD pipelines.</p>
            <p className='text-gray-300 md:text-2xl sm:text-1xl py-4 font-serif'></p>
            <div className='grid gap-8 lg:flex justify-center pt-20 lg:space-x-15 lg:mt-5'>
                <SiJavascript  size={75} className="hover:text-yellow-300 hover:scale-150 transition-all ease-in"/>
                <SiTailwindcss size={75} className="hover:text-blue-600 hover:scale-150 transition-all ease-in"/>
                <SiPython size={75} className="hover:text-blue-600 hover:scale-150 transition-all ease-in"/>
                <SiPostgresql size={75} className="hover:text-blue-300 hover:scale-150 transition-all ease-in"/>
                <SiCss3 size={75} className="hover:text-orange-400 hover:scale-150 transition-all ease-in"/>
                <SiReact size={75} className="hover:text-blue-500 hover:scale-150 transition-all ease-in"/>
                <SiFlask size={75} className="hover:scale-150 transition-all ease-in"/>
                <SiGithub size={75} className="hover:text-orange-300 hover:scale-150 transition-all ease-in"/>
            </div>
            <img  className='scale-50 rounded-full grayscale' src={headshot} alt="of face" />
        </motion.div>
    </div>
    </div>
  )
}

export default Aboutpage