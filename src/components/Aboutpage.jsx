import React from 'react'
import headshot from '../images/headshot.jfif'
import { SiJavascript, SiTailwindcss, SiPython, SiPostgresql, SiCss3, SiReact, SiFlask, SiGithub } from 'react-icons/si'


const Aboutpage = () => {
    return (
    <div className=''>
        <div className='text-white max-w-[800px] mt-5 pt-20 w-full mx-auto text-center flex flex-col justify-center'>
            <h1 className='text-[#00dfd4] md:text-5xl sm:text-4xl text-xl font-bold py-4'>About</h1>
            <p className='text-gray-300 md:text-3xl sm:text-1xl py-4'>Hello my name is Pierce. I have been learning and coding websites for the last year during my free time. The daily challenges and learning experiences have made me want to turn this into a career. I reside in Troy Texas</p>
            <div className='grid gap-8 lg:flex justify-center pt-20 lg:space-x-15 lg:mt-5'>
                <SiJavascript size={100} className="hover:text-yellow-300 hover:scale-150 transition-all ease-in"/>
                <SiTailwindcss size={100} className="hover:text-blue-600 hover:scale-150 transition-all ease-in"/>
                <SiPython size={100} className="hover:text-blue-600 hover:scale-150 transition-all ease-in"/>
                <SiPostgresql size={100} className="hover:text-blue-300 hover:scale-150 transition-all ease-in"/>
                <SiCss3 size={100} className="hover:text-orange-400 hover:scale-150 transition-all ease-in"/>
                <SiReact size={100} className="hover:text-blue-500 hover:scale-150 transition-all ease-in"/>
                <SiFlask size={100} className="hover:scale-150 transition-all ease-in"/>
                <SiGithub size={100} className="hover:text-orange-300 hover:scale-150 transition-all ease-in"/>
            </div>
            <img className='scale-50 rounded-full' src={headshot} alt="of face" />
        </div>
    </div>
  )
}

export default Aboutpage