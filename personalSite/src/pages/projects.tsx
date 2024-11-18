import React from 'react'

const Projects = () => {
  return (
      <div className='min-h-screen bg-[#222831] text-white flex flex-col py-20 px-4 items-center gap-8 w-full'>

        {/*Header*/}
        <div className='flex flex-col items-center md:mt-5 mb-2'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-0'>Projects</h1>
          <div className='border-[3px] lg:border-[4px] border-sky-300 w-1/2 mt-1'></div>
        </div>

        {/*Projects*/}
        <div className='flex flex-col items-center justify-between space-y-10 md:space-y-16'>

          {/*BobcatLiving*/}
          <div className='flex flex-col items-center gap-4'>

            <div className='flex object-cover w-4/5 xl:w-3/5'>
              <img src='../images/projectImages/reviews.png' alt='Apartment project reviews page' className='shadow-2xl w-full rounded-3xl border-2 border-black'/>
            </div>

            <div className='flex flex-col items-center w-3/4 md:w-3/5 lg:w-1/2 space-y-4'>

              <div className='text-center mb-1'>
                <h2 className='font-bold md:font-extrabold text-xl md:text-3xl lg:text-4xl'>BobcatLiving Web App</h2>
                <p className='flex flex-col text-sm md:text-lg lg:text-xl'>Full stack apartment review site using React, Nodejs, Expressjs, and PostgreSQL</p>
              </div>

              <div className='z-10 w-full flex justify-center'>
                <button className='button_sub border-2 border-white text-sm md:text-base lg:text-lg md:p-1 w-1/3'>
                  <a href="https://github.com/MichaelAlex03/BobcatLiving">Source Code</a>
                </button>
              </div>

            </div>

          </div>

          {/*FitTrackr*/}
          <div className='flex flex-col items-center gap-4'>

            <div className='flex w-4/5 xl:w-3/5'>
              <img src='../images/projectImages/workout.png' alt='Apartment project reviews page' className=' shadow-xl w-full rounded-3xl border-2 border-black'/>
            </div>

            <div className='flex flex-col items-center w-3/4 md:w-3/5 lg:w-1/2 space-y-4'>

              <div className='text-center mb-1'>
                <h2 className='font-bold md:font-extrabold text-xl md:text-3xl lg:text-4xl'>FitTrackr Web App</h2>
                <p className='flex flex-col text-sm md:text-lg lg:text-xl'>Full stack workout tracker site using React, Nodejs, Expressjs, and PostgreSQL</p>
              </div>

              <div className='z-10 w-full flex justify-center'>
                <button className='button_sub w-1/2 text-sm md:text-base lg:text-lg md:p-1 w-1/3'>
                  <a href="https://github.com/MichaelAlex03/FitTrackr">Source Code</a>
                </button>
              </div>

            </div>

          </div>

          {/*Portfolio*/}
          <div className='flex flex-col items-center gap-4'>

            <div className='flex w-4/5 xl:w-3/5'>
              <img src='../images/projectImages/Portfolio.png' alt='Apartment project reviews page' className=' shadow-xl w-full rounded-3xl border-2 border-black'/>
            </div>

            <div className='flex flex-col items-center w-3/4 md:w-3/5 lg:w-1/2 space-y-4'>

              <div className='text-center mb-1'>
                <h2 className='font-bold md:font-extrabold text-xl md:text-3xl lg:text-4xl'>Portfolio Web App</h2>
                <p className='flex flex-col text-sm md:text-lg lg:text-xl'>Portfolio page built with React, Typescript, Tailwind CSS</p>
              </div>

              <div className='z-10 w-full flex justify-center'>
                <button className='button_sub border-2 border-white w-1/2 text-sm md:text-base lg:text-lg md:p-1 w-1/3'>
                  <a href="https://github.com/MichaelAlex03/PersonalSite">Source Code</a>
                </button>
              </div>

            </div>
            
          </div>
  
        </div>

      
      </div>
  )
}

export default Projects