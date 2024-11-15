import React from 'react'
import Navbar from '../components/Navbar';

const AboutMe = () => {
  return (
    <>
      <div className='h-screen bg-[#222831] text-white w-full py-20 px-8 2xl:px-2 flex flex-col lg:flex-row justify-content items-center'>
        <div className='flex flex-col items-center gap-4 h-1/4 w-5/6 mt-5'>
          <h1 className='text-4xl font-bold'>About <span className='text-[#00ADB5]'>Me</span></h1>
          <p className='text-center text-sm md:text-lg md:w-2/3'>I am an aspiring full-stack software developer with a recent bachelor’s degree in computer science from Texas State University. 
            I have a strong foundation in both front-end and back-end technologies such as React, Nodejs, and Expressjs. I’m seeking a full-time role where I can grow my skills and make an impact. In my free time, I enjoy gaming, working out, bouldering, and spending time with friends</p>
          <button className='border-2 border-white py-2 px-3 flex items-center rounded-md gap-2'>
            Download Resume
          </button>
        </div>
        <div className='w-full h-full bg-blue'>
          Testing
        </div>
      </div>
    </>
  )
}

export default AboutMe;