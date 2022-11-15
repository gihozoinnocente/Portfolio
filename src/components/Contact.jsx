import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='w-full bg-[blue] py-20 px-20'>
      <div className='bg-[white] py-10 px-10 flex '>
        <div>
          <h1 className='text-3xl mb-3'>Send A Message</h1>
          <input
            type="text"
            class="
          form-control
          block
          px-4
          py-2
          mb-5
          text-xl
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
            id="exampleFormControlInput2"
            placeholder="Your Name"
          />

          <input
            type="text"
            class="
          form-control
          block
          w-full
          px-4
          py-2
          mb-5
          text-xl
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
            id="exampleFormControlInput2"
            placeholder="Your Email"
          />

          <input
            type="text"
            class="
          form-control
          block
          w-full
          px-4
          py-2
          mb-5
          text-xl
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
            id="exampleFormControlInput2"
            placeholder="Subject"
          />

          <textarea
            class="
        form-control
        block
        w-full
        px-3
        py-1.5
        mb-5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Your message"
          ></textarea>

          <button className='bg-blue-600 text-white py-3 px-5 rounded-3xl'>SEND A MESSAGE</button>
        </div>

        <div className='ml-20 mr-5'>
          <h1 className='text-3xl mb-3'>Get In Touch</h1>
          <p>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
            Simply fill the from and send me an email.</p>

          <div className='flex mt-5 gap-7'>
            <button class="w-12 h-12 rounded-full 
                       bg-blue-500 hover:bg-blue-300 text-white">
              <FaFacebook size='2rem' className='ml-2 flex 
                        justify-center items-center' />
            </button>

            <button class="w-12 h-12 rounded-full 
                       bg-blue-500 hover:bg-red-500 text-white">
              <FaLinkedin  size='2rem' className='ml-2 flex 
                        justify-center items-center' />
            </button>

            <button class="w-12 h-12 rounded-full 
                       bg-blue-500 hover:bg-red-500 text-white">
              <FaGithub  size='2rem' className='ml-2 flex 
                        justify-center items-center' />
            </button>

            <button class="w-12 h-12 rounded-full 
                       bg-blue-500 hover:bg-red-500 text-white">
              <FaTwitter  size='2rem' className='ml-2 flex 
                        justify-center items-center' />
            </button>            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
