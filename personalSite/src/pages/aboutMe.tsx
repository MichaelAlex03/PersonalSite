
const AboutMe = () => {
  return (
    <>
      <div className='bg-[#222831] text-white w-full py-20 px-8 2xl:px-2 flex flex-col xl:h-screen items-center gap-'>

        <div className='flex flex-col items-center mt-5'>
              <h1 className='text-4xl lg:text-6xl font-bold'>About <span className='text-[#00ADB5]'>Me</span></h1>
              <div className='border-[3px] lg:border-[4px] border-sky-300 w-1/3 mt-1'></div>
        </div>

        {/*Container with both skills and about me description w/ profile picture*/}
        <div className='flex flex-col xl:flex-row items-center justify-center space-y-6 xl:h-screen'>

          {/*About me decription and profile picture*/}
          <div className='flex flex-col items-center gap-4 mt-5 w-full'>

            <div className='z-0 flex flex-col items-center space-y-6'>
              <img src='../../images/profile.jpg' className='rounded-full'/>
              <p className='text-center text-sm md:text-xl md:w-2/3 lg:w-3/4 xl:w-2/3'>I am an aspiring full-stack software developer with a recent bachelor’s degree in computer science from Texas State University. Passionate about building and optimizing web applications, I have a strong foundation in both front-end and back-end technologies, including React, TypeScript, Node.js, and PostgreSQL. I’m actively seeking a full-time role where I can grow my skills and make an impact. In my free time, I enjoy gaming, working out, climbing, and spending time with friends.</p>

              <button className='button_sub flex items-center gap-2 text-sm md:text-xl'>
                <a href="../../files/Resume.pdf" download="Resume">Download Resume</a>
              </button>
            </div>

          </div>

          {/*Skills*/}
          <div className='flex justify-evenly items-center w-full md:w-3/5 lg:w-2/3 xl:w-1/2 py-6'>

            {/*Column 1*/}
            <div className='flex flex-col justify-center w-full space-y-2 lg:space-y-4'>

              <div className='flex flex-col justify-center items-center rounded-lg border-sky-400 p-1 space-y-1'>
                <img src='../../images/skills/javascript.svg' className='h-[30px] md:h-[40px]'/>
                <h1 className='text-sm md:text-lg '>Javascript</h1>
              </div>

              <div className='flex flex-col justify-center items-center rounded-lg  border-white p-1 space-y-1'>
                <img src='../../images/skills/html-5.svg' className='h-[30px] md:h-[40px]'/>
                <h1 className='text-sm md:text-lg '>HTML</h1>
              </div>

              <div className='flex flex-col justify-center items-center rounded-lg  border-sky-400 p-1 space-y-1'>
                <img src='../../images/skills/tailwindcss-icon.svg' className='h-[30px] md:h-[40px]'/>
                <h1 className='text-sm md:text-lg '>Tailwind</h1>
              </div>

            </div>

             {/*Column 2*/}
            <div className='flex flex-col justify-center w-full space-y-2 lg:space-y-4'>

              <div className='flex flex-col justify-center items-center rounded-lg  border-white p-1 space-y-1'>
                <img src='../../images/skills/react.svg' className='h-[30px] md:h-[40px]'/>
                <h1 className='text-sm md:text-lg '>React</h1>
              </div>

              <div className='flex flex-col justify-center items-center rounded-lg  border-sky-400 p-1 space-y-1'>
                <img src='../../images/skills/postgresql.svg' className='h-[30px] md:h-[40px]'/>
                <h1 className='text-sm md:text-lg '>PostgreSQL</h1>
              </div>

              <div className='flex flex-col justify-center items-center rounded-lg  border-sky-400 p-1 space-y-1'>
                <img src='../../images/skills/nodejs-icon.svg' className='h-[30px] md:h-[40px]'/>
                <h1 className='text-sm md:text-lg '>NodeJS</h1>
              </div>

              <div className='flex flex-col justify-center items-center rounded-lg  border-white p-1 space-y-1'>
                <img src='../../images/skills/docker-icon.svg' className='h-[30px] md:h-[40px]'/>
                <h1 className='text-sm md:text-lg '>Docker</h1>
              </div>
            </div>

            {/*Column 3*/}
            <div className='flex flex-col justify-center space-y-2 lg:space-y-4 w-full'>

              <div className='flex flex-col justify-center items-center rounded-lg  border-sky-400 p-1 space-y-1'>
                <img src='../../images/skills/mongodb-icon.svg' className='h-[30px] md:h-[40px]'/>
                <h1 className='text-sm md:text-lg '>MongoDB</h1>
              </div>

              <div className='flex flex-col justify-center items-center rounded-lg  border-white p-1 space-y-1'>
                <img src='../../images/skills/git-icon.svg' className='h-[30px] md:h-[40px]'/>
                <h1 className='text-sm md:text-lg'>Git</h1>
              </div>

              <div className='flex flex-col justify-center items-center rounded-lg  border-white p-1 space-y-1'>
                <img src='../../images/skills/typescript-icon.svg' className='h-[30px] md:h-[40px]'/>
                <h1 className='text-sm md:text-lg '>Typescript</h1>
              </div>

            </div>

          </div>

        </div>
        
      </div>
    </>
  )
}

export default AboutMe;