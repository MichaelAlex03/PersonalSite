import React from 'react'
import Navbar from '../components/Navbar';

const AboutMe = () => {
  return (
    <>
      <div className='h-screen bg-[#222831] text-white w-full py-20 px-8 2xl:px-2 flex flex-col lg:flex-row items-center gap-4'>

        <div className='flex flex-col items-center gap-4 mt-5'>

          <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-bold'>About <span className='text-[#00ADB5]'>Me</span></h1>
            <div className='border-[3px] border-sky-300 w-1/3 mt-1'></div>
          </div>

          <p className='text-center text-sm md:text-lg md:w-2/3'>I am an aspiring full-stack software developer with a recent bachelor’s degree in computer science from Texas State University. 
            I have a strong foundation in both front-end and back-end technologies such as React, Nodejs, and Expressjs. I’m seeking a full-time role where I can grow my skills and make an impact. In my free time, I enjoy gaming, working out, bouldering, and spending time with friends</p>

          <button className='border-2 border-white py-2 px-3 flex items-center rounded-md gap-2'>
            Download Resume
          </button>

        </div>

        <div className='flex justify-evenly w-full p-2'>

          <div className='flex flex-col justify-center w-full gap-2'>

            <div className='flex flex-col justify-center items-center rounded-lg border-sky-400 p-1 space-y-1'>
              <img src='../../images/skills/javascript.svg' className='h-[30px]'/>
              <h1 className='text-sm'>Javascript</h1>
            </div>

            <div className='flex flex-col justify-center items-center rounded-lg  border-white p-1 space-y-1'>
              <img src='../../images/skills/html-5.svg' className='h-[30px]'/>
              <h1 className='text-sm'>HTML</h1>
            </div>

            <div className='flex flex-col justify-center items-center rounded-lg  border-sky-400 p-1 space-y-1'>
              <img src='../../images/skills/tailwindcss-icon.svg' className='h-[30px]'/>
              <h1 className='text-sm'>Tailwind</h1>
            </div>

          </div>

          <div className='flex flex-col justify-between w-full gap-2'>

            <div className='flex flex-col justify-center items-center rounded-lg  border-white p-1 space-y-1'>
              <img src='../../images/skills/react.svg' className='h-[30px]'/>
              <h1 className='text-sm'>React</h1>
            </div>

            <div className='flex flex-col justify-center items-center rounded-lg  border-sky-400 p-1 space-y-1'>
              <img src='../../images/skills/postgresql.svg' className='h-[30px]'/>
              <h1 className='text-sm'>PostgreSQL</h1>
            </div>

            <div className='flex flex-col justify-center items-center rounded-lg  border-sky-400 p-1 space-y-1'>
              <img src='../../images/skills/nodejs-icon.svg' className='h-[30px]'/>
              <h1 className='text-sm'>NodeJS</h1>
            </div>

            <div className='flex flex-col justify-center items-center rounded-lg  border-white p-1 space-y-1'>
              <img src='../../images/skills/docker-icon.svg' className='h-[30px]'/>
              <h1 className='text-sm'>Docker</h1>
            </div>
          </div>

          <div className='flex flex-col justify-center gap-2 w-full'>

            <div className='flex flex-col justify-center items-center rounded-lg  border-sky-400 p-1 space-y-1'>
              <img src='../../images/skills/mongodb-icon.svg' className='h-[30px]'/>
              <h1 className='text-sm'>MongoDB</h1>
            </div>

            <div className='flex flex-col justify-center items-center rounded-lg  border-white p-1 space-y-1'>
              <img src='../../images/skills/git-icon.svg' className='h-[30px]'/>
              <h1 className='text-sm'>Git</h1>
            </div>

            <div className='flex flex-col justify-center items-center rounded-lg  border-white p-1 space-y-1'>
              <img src='../../images/skills/typescript-icon.svg' className='h-[30px]'/>
              <h1 className='text-sm'>Typescript</h1>
            </div>

          </div>
          
        </div>
      </div>
    </>
  )
}

export default AboutMe;