import React from 'react'

const Projects = () => {
  return (
      <div className='min-h-screen bg-[#222831] text-white flex flex-col py-32 items-center gap-4 w-full'>

        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-4xl'>Projects</h1>
          <div className='border-[3px] border-sky-300 w-3/4 mt-1'></div>
        </div>

        <div className='flex flex-col items-center m-0'>
          <img src='../images/projectImages/reviews.png' alt='Apartment project reviews page' className='border-2 border-white shadow-md w-1/2 h-1/2 max-w-full'/>
          <p className='flex flex-col text-center m-0'><span className='font-bold'>BobcatLiving Web App</span>Full stack application allowing students to leave reviews for student housing. Created using React, Nodejs, Expressjs, and PostgreSQL</p>
        </div>

        <div className='flex flex-col items-center m-0'>
          <img src='../images/projectImages/workout.png' alt='FitTrackr workouts' className='border-2 border-white shadow-md w-1/2 h-1/2 max-w-full'/>
          <p className='flex flex-col text-center m-0'><span className='font-bold'>FitTrackr Web App</span>Full stack workout tracker app. 
            Created using React, Typescript, Nodejs, Expressjs, and PostgreSQL</p>
        </div>

        <div className='flex flex-col items-center'>
          <img src='../images/projectImages/Blog.png' alt='BlogSite Home' className=' border-2 border-white shadow-md w-3/4 h-1/2 max-w-full'/>
          <p className='flex flex-col text-center'><span className='font-bold'>BlogSite Web App</span>Full stack blog site created using HTML, CSS, Javascript, Nodejs and Expressjs</p>
        </div>
        
      </div>
  )
}

export default Projects