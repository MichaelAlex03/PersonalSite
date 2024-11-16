import React from 'react'

const Projects = () => {
  return (
      <div className='min-h-screen bg-[#222831] text-white flex flex-col py-20 px-4 items-center gap-8 w-full'>

        <div className='flex flex-col items-center mt-5'>
          <h1 className='font-bold text-4xl'>Projects</h1>
          <div className='border-[3px] border-sky-300 w-1/2 mt-1'></div>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='flex flex-col items-center gap-2'>
            <div className='flex w-3/4'>
              <img src='../images/projectImages/reviews.png' alt='Apartment project reviews page' className='border-2 border-white shadow-md w-full'/>
            </div>
            <div className='flex flex-col items-center'>
              <div className='ml-auto text-center'>
                <h2 className='font-bold'>BobcatLiving Web App</h2>
                <p className='flex flex-col text-sm'>Full stack apartment review site using React, Nodejs, Expressjs, and PostgreSQL</p>
              </div>
            </div>
            <div className='w-full flex justify-center'>
              <button className='border-2 border-white w-1/2 text-sm'>
                <a href="https://github.com/MichaelAlex03/BobcatLiving">Source Code</a>
              </button>
            </div>
          </div>

          <div className='flex flex-col items-center gap-2'>
            <div className='flex w-3/4'>
              <img src='../images/projectImages/workout.png' alt='Apartment project reviews page' className='border-2 border-white shadow-md w-full'/>
            </div>
            <div className='flex flex-col items-center'>
              <div className='ml-auto text-center'>
                <h2 className='font-bold'>FitTrackr Web App</h2>
                <p className='flex flex-col text-sm'>Full stack workout tracker site using React, Nodejs, Expressjs, and PostgreSQL</p>
              </div>
            </div>
            <div className='w-full flex justify-center'>
              <button className='border-2 border-white w-1/2 text-sm'>
                <a href="https://github.com/MichaelAlex03/FitTrackr">Source Code</a>
              </button>
            </div>
          </div>


          <div className='flex flex-col items-center gap-2'>
            <div className='flex w-3/4'>
              <img src='../images/projectImages/Blog.png' alt='Apartment project reviews page' className='border-2 border-white shadow-md w-full'/>
            </div>
            <div className='flex flex-col items-center'>
              <div className='ml-auto text-center'>
                <h2 className='font-bold'>BlogSite Web App</h2>
                <p className='flex flex-col text-sm'>Full stack blog site using HTML, CSS, Javascript, Nodejs and Expressjs</p>
              </div>
            </div>
            <div className='w-full flex justify-center'>
              <button className='border-2 border-white w-1/2 text-sm'>
                <a href="https://github.com/MichaelAlex03/BlogSite">Source Code</a>
              </button>
            </div>
          </div>
  
        </div>

      
      </div>
  )
}

export default Projects