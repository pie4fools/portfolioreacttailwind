import React from 'react'
import chatgptpic from '../pics/chatgptpic.jpg'
import pristinecleanpic from '../pics/pristinecleanpic.jpg'
import creditcardpic from '../pics/creditcardpic.jpg'

const Footer = () => {
  return (
    <div className='bg-gray-100'>
        <div>
            <h1 className='text-[#000000] text-center md:text-5xl sm:text-4xl text-xl font-bold py-8 font-serif hover:scale-150 transition-all ease-in'>Projects</h1>
        </div>
        <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 mx-10 align-center'>
                <h1>ChatGPT Clone</h1>
                <img className='scale-75 align-center' src={chatgptpic} alt="Screenshot of ChatGPT Clone" />
                <p>Using OpenAIAPI, send GET requests from the front end and listens for POST requests. The ChatGPT API replies with a post request to the frontend, where the content is displayed in text format.</p>
                <a href='https://chatgptclone-lilac.vercel.app/' target='_blank' rel='noreferrer' className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-full font-medium mt-7 mx-auto py-2.5 px-6 lg:mr-5 sm:mr-0 text-white hover:bg-black focus:ring focus:ring-grey-300'>Visit</a>
                <button className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-full font-medium mt-7 mx-auto pb-0.5 text-white hover:bg-black focus:ring focus:ring-grey-300'>Source</button>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 mx-10'>
                <h1>General E-Commerce Site</h1>
                <img className='scale-75 align-center' src={creditcardpic} alt="Screenshot credit card website" />
                <p>Simple react site for a credit card company. Styled components with a register/login ready to connect to backend.</p>
                <a href='https://master--beautiful-zuccutto-11d061.netlify.app/' target='_blank' rel='noreferrer' className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-full font-medium mt-7 mx-auto py-2.5 px-6 sm:mr-0 lg:mr-2 text-white hover:bg-black focus:ring focus:ring-grey-300'>Visit</a>
                <button className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-full font-medium mt-7 mx-auto pb-0.5 text-white hover:bg-black focus:ring focus:ring-grey-300'>Source</button>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 mx-10'>
                <h1>Twitter Backend</h1>
                <p>Using Flask and Postgres, Use the front end for CRUD operations on the backend. Update a user profile with a new username/PW, view tweets, like a tweet, show who liked a tweet, find a user.</p>
                <button className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-full font-medium mt-7 mx-auto pb-0.5 sm:mr-0 lg:mr-2 text-white hover:bg-black focus:ring focus:ring-grey-300'>Visit</button>
                <button className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-full font-medium mt-7 mx-auto pb-0.5 text-white hover:bg-black focus:ring focus:ring-grey-300'>Source</button>
            </div>
            <div className='sm:mb-0 text-center shadow-lg p-10 rounded-xl lg:my-10 mx-10'>
                <h1 className='mb-4'>Pristine Cleaning</h1>
                <img className='scale-100 mb-6' src={pristinecleanpic} alt="Screenshot of pristinecleaningph.com" />
                <p>This is my first website completed for a client. This is a simple project using HTML/CSS and minimal JS.</p>
                <a href='http://www.pristinecleaningph.com/' target='_blank' rel='noreferrer' className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-full font-medium mt-7 mx-auto py-2.5 px-6 text-white sm:mr-2 lg:mr-2 hover:bg-black focus:ring focus:ring-grey-300'>Visit</a>
                <button className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-full font-medium mt-7 mx-auto pb-0.5 text-white hover:bg-black focus:ring focus:ring-grey-300'>Source</button>
            </div>
        </div>
    </div>
  )
}

export default Footer