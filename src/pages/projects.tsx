import { useState } from "react"
import ProjectCard from "../components/projects/ProjectCard";

const Projects = () => {


  const [showAll, setShowAll] = useState(true);
  const [showFrontend, setShowFrontend] = useState(false);
  const [showFullStack, setShowFullStack] = useState(false);

  return (
    <div className='bg-[#222831] text-white flex flex-col items-center gap-8 w-full'>

      {/*Header*/}
      <div className='flex flex-col items-center mt-24 md:mt-5 xl:mt-[8.5rem] mb-2'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-0'>Projects</h1>
        <div className='border-[4px] lg:border-[6px] border-[#32a16f] w-3/5 lg:w-3/4 mt-1 lg:mt-3'></div>
      </div>


      {/*Project buttons*/}
      <div className="flex flex-row w-full justify-center gap-4 md:gap-6 lg:gap-8">

        <button className={showAll ? `border border-white font-semibold text-black bg-[#55E5A4] py-2 px-4  xl:text-lg  transition duration-300 ease-in-out transform hover:-translate-y-2`
          : `border border-white text-white py-2 px-4 font-semibold hover:text-black hover:bg-[#55E5A4]  xl:text-lg  transition duration-300 ease-in-out transform hover:-translate-y-2`}
          onClick={() => {
            setShowAll(true)
            setShowFrontend(false)
            setShowFullStack(false)
          }}>
          <span className="block md:hidden">All</span>
          <span className="hidden md:block">All Projects</span>
        </button>
        <button className={showFrontend ? `border border-white font-semibold text-black bg-[#55E5A4] py-2 px-4  xl:text-lg transition duration-300 ease-in-out transform hover:-translate-y-2`
          : `border border-white text-white hover:text-black font-semibold hover:bg-[#55E5A4] py-2 px-4  xl:text-lg transition duration-300 ease-in-out transform hover:-translate-y-2`}
          onClick={() => {
            setShowAll(false)
            setShowFrontend(true)
            setShowFullStack(false)
          }}>
          <span className="block md:hidden">Frontend</span>
          <span className="hidden md:block">Frontend Projects</span>
        </button>
        <button className={showFullStack ? `border font-semibold border-white text-black bg-[#55E5A4] py-2 px-4  text-base xl:text-lg  transition duration-300 ease-in-out transform hover:-translate-y-2`
          : `border border-white text-white hover:text-black font-semibold hover:bg-[#55E5A4] py-2 px-4  text-base xl:text-lg  transition duration-300 ease-in-out transform hover:-translate-y-2`}
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

        {(showAll || showFullStack) && <div className=' mt-2 lg:mt-4 grid grid-cols-1 lg:grid-cols-2 w-3/4 xl:w-[70%] 2xl:w-[65%] gap-10'>
          <ProjectCard
            name="Nasa Control Center"
            image="./PersonalSite/images/projectImages/NASA.png"
            description="A full-stack mission control dashboard using React, Node.js, Express, and MongoDB. It delivers real-time space analytics with a sleek, scalable interface, containerized with Docker and deployed using AWS"
            gitHub="https://github.com/MichaelAlex03/NasaAPI"
            link="http://3.208.246.232:8000"
            technologies={['react', 'nodejs',  'Express', 'mongodb', 'docker', 'aws']}
          />

          {/*FitTrackr*/}

          <ProjectCard
            name="FitTrackr"
            image="./images/projectImages/workout.png"
            description="A full-stack workout tracker using React, Node.js, Express, and PostgreSQL. It delivers personalized fitness insights with a sleek, scalable interface enhanced by TailwindCSS and AWS-driven architecture."
            gitHub="https://github.com/MichaelAlex03/FitnessTracker"
            technologies={['react', 'tailwindcss', 'nodejs', 'postgresql', 'Express', 'aws']}
          />

          {/*Tank Game*/}

          <ProjectCard
            name="Top Down Tank Game"
            image="./PersonalSite/images/projectImages/TankGame.png"
            description="Top Down Tank Game is an engaging real-time shooter built with React, JavaScript, Node.js, Express, and MongoDB. Command tanks in dynamic battles with responsive controls and immersive graphics."
            gitHub="https://github.com/MichaelAlex03/CS_4398"
            technologies={['javascript', 'tailwindcss', 'nodejs',  'Express', 'mongodb']}
          />

          
        </div>}

        {showFrontend && <div className="flex justify-center mt-10 mr-5 w-full font-bold text-2xl h-screen"> Coming Soon.... </div>}

      </div>


    </div>
  )
}

export default Projects