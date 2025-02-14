import { useState } from "react"
import ProjectCard from "../components/projects/ProjectCard";

const Projects = () => {


  const [showAll, setShowAll] = useState(true);
  const [showFrontend, setShowFrontend] = useState(false);
  const [showFullStack, setShowFullStack] = useState(false);

  return (
    <div className='min-h-screen bg-[#222831] text-white flex flex-col py-20 px-4 items-center gap-8 w-full'>

      {/*Header*/}
      <div className='flex flex-col items-center md:mt-5 mb-2'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-0'>Projects</h1>
        <div className='border-[3px] lg:border-[4px] border-sky-300 w-1/2 mt-1'></div>
      </div>


      {/*Project buttons*/}
      <div className="flex flex-row w-full justify-center gap-4 md:gap-6 lg:gap-8">

        <button className={showAll ? `border border-white text-black bg-[#55E5A4] py-2 px-4 rounded-lg xl:text-lg  transition duration-300 ease-in-out transform hover:-translate-y-2`
          : `border border-white text-white py-2 px-4 hover:text-black hover:bg-[#55E5A4] rounded-lg xl:text-lg  transition duration-300 ease-in-out transform hover:-translate-y-2`}
          onClick={() => {
            setShowAll(true)
            setShowFrontend(false)
            setShowFullStack(false)
          }}>
          <span className="block md:hidden">All</span>
          <span className="hidden md:block">All Projects</span>
        </button>
        <button className={showFrontend ? `border border-white text-black bg-[#55E5A4] py-2 px-4 rounded-lg xl:text-lg transition duration-300 ease-in-out transform hover:-translate-y-2`
          : `border border-white text-white hover:text-black hover:bg-[#55E5A4] py-2 px-4 rounded-lg xl:text-lg transition duration-300 ease-in-out transform hover:-translate-y-2`}
          onClick={() => {
            setShowAll(false)
            setShowFrontend(true)
            setShowFullStack(false)
          }}>
          <span className="block md:hidden">Frontend</span>
          <span className="hidden md:block">Frontend Projects</span>
        </button>
        <button className={showFullStack ? `border border-white text-black bg-[#55E5A4] py-2 px-4 rounded-lg text-base xl:text-lg  transition duration-300 ease-in-out transform hover:-translate-y-2`
          : `border border-white text-white hover:text-black hover:bg-[#55E5A4] py-2 px-4 rounded-lg text-base xl:text-lg  transition duration-300 ease-in-out transform hover:-translate-y-2`}
          onClick={() => {
            setShowAll(false)
            setShowFrontend(false)
            setShowFullStack(true)
          }}>
          <span className="block md:hidden">Full Stack</span>
          <span className="hidden md:block">Full Stack Projects</span>
        </button>

      </div>

      {/*Projects*/}
      <div className="flex justify-center">

        {/*NASA Project*/}

        {(showAll || showFullStack) && <div className='grid grid-cols-1 lg:grid-cols-2 w-3/4 xl:w-[70%] 2xl:w-[65%] gap-8'>
          <ProjectCard
            name="Nasa Control Center"
            image="../images/projectImages/NASA.png"
            description="A full-stack mission control dashboard using React, Node.js, Express, and MongoDB. It delivers real-time space analytics with a sleek, scalable interface, containerized with Docker and deployed using AWS"
            gitHub="https://github.com/MichaelAlex03/NasaAPI"
            technologies={['react', 'nodejs',  'Express', 'mongodb', 'docker', 'aws']}
          />

          {/*FitTrackr*/}

          <ProjectCard
            name="FitTrackr"
            image="../images/projectImages/workout.png"
            description="A full-stack workout tracker using React, Node.js, Express, and PostgreSQL. It delivers personalized fitness insights with a sleek, scalable interface enhanced by TailwindCSS and AWS-driven architecture."
            gitHub="https://github.com/MichaelAlex03/FitnessTracker"
            technologies={['react', 'tailwindcss', 'nodejs', 'postgresql', 'Express', 'aws']}
          />

          {/*Tank Game*/}

          <ProjectCard
            name="Top Down Tank Game"
            image="../images/projectImages/TankGame.png"
            description="Top Down Tank Game is an engaging real-time shooter built with React, JavaScript, Node.js, Express, and MongoDB. Command tanks in dynamic battles with responsive controls and immersive graphics."
            gitHub="https://github.com/MichaelAlex03/CS_4398"
            technologies={['javascript', 'tailwindcss', 'nodejs',  'Express', 'mongodb']}
          />

          
        </div>}

        {showFrontend && <div className="flex justify-center items-center mt-10 mr-5 w-full font-bold text-2xl"> Coming Soon.... </div>}

      </div>


    </div>
  )
}

export default Projects