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
      <div className="flex flex-row w-full justify-center gap-8">

        <button className={showAll ? `border border-white text-black bg-[#55E5A4] py-2 px-4 rounded-lg`
          : `border border-white text-white py-2 px-4 hover:text-black hover:bg-[#55E5A4] rounded-lg`}
          onClick={() => {
            setShowAll(!showAll)
            setShowFrontend(false)
            setShowFullStack(false)
          }}>
          All Projects
        </button>
        <button className={showFrontend ? `border border-white text-black bg-[#55E5A4] py-2 px-4 rounded-lg`
          : `border border-white text-white hover:text-black hover:bg-[#55E5A4] py-2 px-4 rounded-lg`}
          onClick={() => {
            setShowAll(false)
            setShowFrontend(!showFrontend)
            setShowFullStack(false)
          }}>
          Frontend Projects
        </button>
        <button className={showFullStack ? `border border-white text-black bg-[#55E5A4] py-2 px-4 rounded-lg`
          : `border border-white text-white hover:text-black hover:bg-[#55E5A4] py-2 px-4 rounded-lg`}
          onClick={() => {
            setShowAll(false)
            setShowFrontend(false)
            setShowFullStack(!showFullStack)
          }}>
          Full Stack Projects
        </button>

      </div>

      {/*Projects*/}
      <div className='flex flex-row items-center justify-center space-x-8'>

        {/*NASA Project*/}

        <ProjectCard
          name="Nasa Control Center"
          image="../images/projectImages/NASA.png"
          description="A simulated mission control dashboard for launching and managing space missions with real-time data visualization"
          gitHub="https://github.com/MichaelAlex03/NasaAPI"
          technologies={['react', 'nodejs', 'mongodb', 'docker', 'aws']}
        />
        
        {/*FitTrackr*/}

        <ProjectCard
          name="FitTrackr"
          image="../images/projectImages/workout.png"
          description="Full stack workout tracker site using React, Node.js/Express.js, and PostgreSQL"
          gitHub="https://github.com/MichaelAlex03/FitTrackr"
          technologies={['react', 'tailwindcss', 'nodejs', 'postgresql']}
        />

        {/*Tank Game*/}

        <ProjectCard
          name="Top Down Tank Game"
          image="../images/projectImages/TankGame.png"
          description="Top down tank game built with React, Javascript, Node.js/Express.js, and MongoDB"
          gitHub="https://github.com/MichaelAlex03/CS_4398"
          technologies={['javascript', 'tailwindcss', 'nodejs', 'mongodb']}
        />

      </div>


    </div>
  )
}

export default Projects