import React from 'react'
import chatgptpic from '../pics/chatgptpic.jpg'
import pristinecleanpic from '../pics/pristinecleanpic.jpg'
import creditcardpic from '../pics/creditcardpic.jpg'

const Footer = () => {
  return (
    <div className='bg-white'>
        <div>
            <h1 className='text-[#000000] text-center md:text-5xl sm:text-4xl text-xl font-bold py-8'>Projects</h1>
        </div>
        <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 mx-10 align-center'>
                <h1>ChatGPT Clone</h1>
                <img className='scale-50 align-center' src={chatgptpic} alt="Screenshot of ChatGPT Clone" />
                <p>Using OpenAIAPI, this project sends GET requests and listens for POST requests. The ChatGPT API replies with a post request to the frontend, where the content is displayed in text format.</p>
                <button className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-md font-medium mt-7 mx-auto pb-0.5 mr-5 text-white hover:bg-black focus:ring focus:ring-grey-300'>Visit</button>
                <button className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-md font-medium mt-7 mx-auto pb-0.5 text-white hover:bg-black focus:ring focus:ring-grey-300'>Source</button>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 mx-10'>
                <h1>General E-Commerce Site</h1>
                <img className='scale-75 align-center' src={creditcardpic} alt="Screenshot credit card website" />
                <p>Simple react site for a credit card company...................................................</p>
                <button className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-md font-medium mt-7 mx-auto pb-0.5 mr-5 text-white hover:bg-black focus:ring focus:ring-grey-300'>Visit</button>
                <button className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-md font-medium mt-7 mx-auto pb-0.5 text-white hover:bg-black focus:ring focus:ring-grey-300'>Source</button>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 mx-10'>
                <h1>Twitter Backend</h1>
                <p>Using Flask and Postgres, this backend handles GET, POST, PUT requests. You can update a user's username, password, see what tweets they have tweeted, like a tweet</p>
                <button className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-md font-medium mt-7 mx-auto pb-0.5 mr-5 text-white hover:bg-black focus:ring focus:ring-grey-300'>Visit</button>
                <button className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-md font-medium mt-7 mx-auto pb-0.5 text-white hover:bg-black focus:ring focus:ring-grey-300'>Source</button>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 mx-10'>
                <h1>Pristine Cleaning</h1>
                <img className='scale-100' src={pristinecleanpic} alt="Screenshot of pristinecleaningph.com" />
                <p>This is my first website. It is a perfectly terrible mixture of HTML/CSS/JS.</p>
                <button className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-md font-medium mt-7 mx-auto pb-0.5 mr-5 text-white hover:bg-black focus:ring focus:ring-grey-300'>Visit</button>
                <button className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-md font-medium mt-7 mx-auto pb-0.5 text-white hover:bg-black focus:ring focus:ring-grey-300'>Source</button>
            </div>
        </div>
    </div>
  )
}

export default Footer