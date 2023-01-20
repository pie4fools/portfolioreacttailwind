import React from 'react'
import Typed from 'react-typed'
import Video from '../video/video.mp4'

const Hero = () => {
  return (
    <section className='main-video'>
        <video src={Video} autoPlay loop muted type='video/mp4' />
    <div className=' text-white absolute w-[100%] h-[100%] top-0 flex'>
        <div className='max-w-[800px] mt-5 pt-20 w-full mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00dfd4] font-bold p-2 text-2xl'>Piercen Hughes</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Front End Developer</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Always learning more</p>
                <Typed
                className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                strings={['JS', 'React', 'Python', 'Postgres', 'Tailwindcss', 'Flask', 'SQLScripting']}
                typeSpeed={120}
                backSpeed={140}
                loop/>   
            </div>
            <button onclick="location.href='https://google.com';" className='bg-[#00dfd4] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black z-10 hover:bg-white focus:ring focus:ring-white-300'>Projects</button>
        </div>
    </div>
    </section>
  )
}

export default Hero