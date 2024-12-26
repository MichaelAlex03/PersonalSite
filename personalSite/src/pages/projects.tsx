

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

          {/*NASA Project*/}
          <div className='flex flex-col items-center gap-4'>

            <div className='flex object-cover w-4/5 xl:w-3/5'>
              <img src='../images/projectImages/NASA.png' alt='Apartment project reviews page' className='shadow-2xl w-full rounded-3xl border-4 border-black'/>
            </div>

            <div className='flex flex-col items-center w-3/4 md:w-3/5 lg:w-1/2 space-y-4'>

              <div className='text-center mb-1'>
                <h2 className='font-bold md:font-extrabold text-xl md:text-3xl lg:text-4xl'>Nasa Control Center Web App</h2>
                <p className='flex flex-col text-sm md:text-lg lg:text-xl'>Full stack NASA control center using React, Node.js/Express.js, and MongoDB</p>
              </div>

              <div className='z-10 w-full flex justify-center'>
                <button className='button_sub border-2 border-white text-sm md:text-base lg:text-lg md:p-1 w-2/3 md:w-1/3'>
                  <a href="https://github.com/MichaelAlex03/NasaAPI" target="_blank">Source Code</a>
                </button>
              </div>

            </div>

          </div>

          {/*FitTrackr*/}
          <div className='flex flex-col items-center gap-4'>

            <div className='flex w-4/5 xl:w-3/5'>
              <img src='../images/projectImages/workout.png' alt='FitTrack workout page' className=' shadow-2xl w-full rounded-3xl border-4 border-black'/>
            </div>

            <div className='flex flex-col items-center w-3/4 md:w-3/5 lg:w-1/2 space-y-4'>

              <div className='text-center mb-1'>
                <h2 className='font-bold md:font-extrabold text-xl md:text-3xl lg:text-4xl'>FitTrackr Web App</h2>
                <p className='flex flex-col text-sm md:text-lg lg:text-xl'>Full stack workout tracker site using React, Node.js/Express.js, and PostgreSQL</p>
              </div>

              <div className='z-10 w-full flex justify-center'>
                <button className='button_sub text-sm md:text-base lg:text-lg md:p-1 w-2/3 md:w-1/3'>
                  <a href="https://github.com/MichaelAlex03/FitTrackr" target="_blank">Source Code</a>
                </button>
              </div>

            </div>

          </div>

          {/*Tank Game*/}
          <div className='flex flex-col items-center gap-4'>

            <div className='flex w-4/5 xl:w-3/5'>
              <img src='../images/projectImages/TankGame.png' alt='Tank game top down view' className=' shadow-xl w-full rounded-3xl border-4 border-black'/>
            </div>

            <div className='flex flex-col items-center w-3/4 md:w-3/5 lg:w-1/2 space-y-4'>

              <div className='text-center mb-1'>
                <h2 className='font-bold md:font-extrabold text-xl md:text-3xl lg:text-4xl'>Top Down Tank Game</h2>
                <p className='flex flex-col text-sm md:text-lg lg:text-xl'>Top down tank game built with React, Javascript, Node.js/Express.js, and MongoDB</p>
              </div>

              <div className='z-10 w-full flex justify-center'>
                <button className='button_sub border-2 border-white text-sm md:text-base lg:text-lg md:p-1 w-2/3 md:w-1/3'>
                  <a href="https://github.com/MichaelAlex03/PersonalSite" target="_blank">Source Code</a>
                </button>
              </div>

            </div>
            
          </div>
  
        </div>

      
      </div>
  )
}

export default Projects