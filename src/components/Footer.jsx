import React from 'react'
import chatgptpic from '../pics/chatgptpic.jpg'
import pristinecleanpic from '../pics/pristinecleanpic.jpg'
import creditcardpic from '../pics/creditcardpic.jpg'
import dictionaryapi from '../pics/dictionaryapi.jpg'

const Footer = () => {
  return (
    <div className='bg-gray-100'>
        <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 mx-10 align-center'>
                <h1>ChatGPT Clone</h1>
                <img className='scale-75 align-center' src={chatgptpic} alt="Screenshot of ChatGPT Clone" />
                <p className='pb-3'>Using OpenAIAPI, send GET requests from the front end and listens for POST requests. The ChatGPT API replies with a post request to the frontend, where the content is displayed in text format.</p>
                <a href='https://chatgptclone-lilac.vercel.app/' target='_blank' rel='noreferrer' className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-full font-medium mt-7 mx-auto py-2.5 px-6 lg:mr-2 sm:mr-0 text-white hover:bg-black focus:ring focus:ring-grey-300 transition ease-in-out'>Visit</a>
                <a href='https://github.com/pie4fools/chatgptclone' target='_blank' rel='noreferrer' className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-full font-medium mt-7 mx-auto py-2.5 px-6 text-white sm:mr-2 lg:mr-2 hover:bg-black focus:ring focus:ring-grey-300 transition ease-in-out'>Source</a>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 mx-10'>
                <h1>General E-Commerce Site</h1>
                <img className='scale-75 align-center' src={creditcardpic} alt="Screenshot credit card website" />
                <p className='pb-7'>Simple react site for a credit card company. Styled components with a register/login ready to connect to backend.</p>
                <a href='https://master--beautiful-zuccutto-11d061.netlify.app/' target='_blank' rel='noreferrer' className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-full font-medium mt-7 mx-auto py-2.5 px-6 sm:mr-0 lg:mr-2 text-white hover:bg-black focus:ring focus:ring-grey-300 transition ease-in-out'>Visit</a>
                <a href='https://github.com/pie4fools/react-website-v2' target='_blank' rel='noreferrer' className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-full font-medium mt-7 mx-auto py-2.5 px-6 text-white sm:mr-2 lg:mr-2 hover:bg-black focus:ring focus:ring-grey-300 transition ease-in-out'>Source</a>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 mx-10'>
                <h1>Dictionary API</h1>
                <img className='scale-75 align-center' src={dictionaryapi} alt="Screenshot of dictionary site" />
                <p className='pb-3'>Searches for a word in the dictionaryapi.dev API and displays the results on the page. Sets audio source attribute with a pronunciation of the word from the API</p>
                <a href='https://master--chipper-salmiakki-0518f5.netlify.app/' target='_blank' rel='noreferrer' className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-full font-medium mt-7 mx-auto py-2.5 px-6 sm:mr-0 lg:mr-2 text-white hover:bg-black focus:ring focus:ring-grey-300 transition ease-in-out'>Visit</a>
                <a href='https://github.com/pie4fools/dictionaryapi' target='_blank' rel='noreferrer' className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-full font-medium mt-7 mx-auto py-2.5 px-6 text-white sm:mr-2 lg:mr-2 hover:bg-black focus:ring focus:ring-grey-300 transition ease-in-out'>Source</a>
            </div>
            <div className='sm:mb-0 text-center shadow-lg p-10 rounded-xl lg:my-10 mx-10'>
                <h1 className='mb-4'>Pristine Cleaning</h1>
                <img className='scale-100 mb-6' src={pristinecleanpic} alt="Screenshot of pristinecleaningph.com" />
                <p className='pb-7'>This is my first website completed for a client. This is a simple project using HTML/CSS and minimal JS.</p>
                <a href='http://www.pristinecleaningph.com/' target='_blank' rel='noreferrer' className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-full font-medium mt-7 mx-auto py-2.5 px-6 text-white sm:mr-2 lg:mr-2 hover:bg-black focus:ring focus:ring-grey-300 transition ease-in-out'>Visit</a>
                <a href='https://github.com/pie4fools/1st-Website' target='_blank' rel='noreferrer' className='bg-[#00dfd4] w-[90px] h-[37.5px] rounded-full font-medium mt-7 mx-auto py-2.5 px-6 text-white sm:mr-2 lg:mr-2 hover:bg-black focus:ring focus:ring-grey-300 transition ease-in-out'>Source</a>
            </div>
        </div>
    </div>
  )
}

export default Footer