import { motion, useScroll, useInView, useAnimation, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

const AboutMe = () => {

  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true })
  const mainControls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"], //Track from when the start of the elements hits the end of the viewport and stop when the end of the element hits the end
  })

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  const profileImageTransition = useTransform(
    scrollYProgress,
    [0, 1],
    ["-40%", "0%"]
  )

  const skillsTransition = useTransform(
    scrollYProgress,
    [0, 1],
    ["40%", "0%"]
  )


  return (
    <>
      <motion.div
        className=' bg-[#222831] text-white w-full py-20 px-8 2xl:px-2 flex flex-col items-center'
        ref={containerRef}
      >

        <motion.div
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ duration: 2 }} 
          className='flex flex-col items-center mt-5 xl:mt-10'
        >
          <h1 className='text-4xl lg:text-6xl font-bold'>About <span className='text-[#55E5A4]'>Me</span></h1>
          <div className='border-[4px] lg:border-[6px] border-[#32a16f] w-3/5 mt-1'></div>
        </motion.div>

        {/*Container with both skills and about me description w/ profile picture*/}
        <div className='flex flex-col xl:flex-row items-center justify-center space-y-6 mt-10'>

          {/*About me decription and profile picture*/}
          <motion.div
            style={{ translateX: profileImageTransition }}
            className='flex flex-col items-center gap-4 mt-5 w-full'
          >

            <div className='z-0 flex flex-col items-center space-y-6'>
              <img src='./PersonalSite/images/profile.jpg' className='rounded-full' />
              <p className='text-center text-sm md:text-base lg:text-xl md:w-2/3 lg:w-2/3'>I am a full-stack software developer with a bachelor’s degree in computer science from Texas State University. Passionate about building and optimizing web applications, I have a strong foundation in both front-end and back-end technologies such as React, TypeScript, Node.js, and PostgreSQL.  In my free time, I enjoy gaming, working out, climbing, and spending time with friends.</p>

              <button className='border border-white text-white py-2 px-4 font-semibold xl:text-lg 2xl:text-xl hover:bg-[#55E5A4] hover:text-black transition duration-300 ease-in-out transform hover:scale-110'>
                <a href="./PersonalSite/files/newResume.pdf" download="Resume">Download Resume</a>
              </button>
            </div>

          </motion.div>

          {/*Skills*/}
          <motion.div
            style={{ translateX: skillsTransition }}
            className='flex flex-row justify-evenly items-center w-full md:w-3/5 lg:w-2/3 xl:w-3/4 py-6 px-2'
          >

            {/*Column 1*/}
            <div className='flex flex-col justify-center w-full space-y-2 lg:space-y-4'>

              <div className='flex flex-col justify-center items-center rounded-lg border-sky-400 p-1 space-y-1 transition duration-300 ease-in-out transform hover:scale-110'>
                <img src='./PersonalSite/images/skills/javascript.svg' className='h-[30px] md:h-[40px]' />
                <h1 className='text-sm md:text-lg '>Javascript</h1>
              </div>

              <div className='flex flex-col justify-center items-center rounded-lg  border-white p-1 space-y-1 transition duration-300 ease-in-out transform hover:scale-110'>
                <img src='./PersonalSite/images/skills/html-5.svg' className='h-[30px] md:h-[40px]' />
                <h1 className='text-sm md:text-lg '>HTML</h1>
              </div>

              <div className='flex flex-col justify-center items-center rounded-lg  border-sky-400 p-1 space-y-1 transition duration-300 ease-in-out transform hover:scale-110'>
                <img src='./PersonalSite/images/skills/tailwindcss.svg' className='h-[30px] md:h-[40px]' />
                <h1 className='text-sm md:text-lg '>Tailwind</h1>
              </div>

            </div>

            {/*Column 2*/}
            <div className='flex flex-col justify-center w-full space-y-2 lg:space-y-4'>

              <div className='flex flex-col justify-center items-center rounded-lg  border-white p-1 space-y-1 transition duration-300 ease-in-out transform hover:scale-110'>
                <img src='./PersonalSite/images/skills/react.svg' className='h-[30px] md:h-[40px]' />
                <h1 className='text-sm md:text-lg '>React</h1>
              </div>

              <div className='flex flex-col justify-center items-center rounded-lg  border-sky-400 p-1 space-y-1 transition duration-300 ease-in-out transform hover:scale-110'>
                <img src='./PersonalSite/images/skills/postgresql.svg' className='h-[30px] md:h-[40px]' />
                <h1 className='text-sm md:text-lg '>PostgreSQL</h1>
              </div>

              <div className='flex flex-col justify-center items-center rounded-lg  border-sky-400 p-1 space-y-1 transition duration-300 ease-in-out transform hover:scale-110'>
                <img src='./PersonalSite/images/skills/nodejs.svg' className='h-[30px] md:h-[40px]' />
                <h1 className='text-sm md:text-lg '>NodeJS</h1>
              </div>

              <div className='flex flex-col justify-center items-center rounded-lg  border-white p-1 space-y-1 transition duration-300 ease-in-out transform hover:scale-110'>
                <img src='./PersonalSite/images/skills/docker.svg' className='h-[30px] md:h-[40px]' />
                <h1 className='text-sm md:text-lg '>Docker</h1>
              </div>
            </div>

            {/*Column 3*/}
            <div className='flex flex-col justify-center space-y-2 lg:space-y-4 w-full'>

              <div className='flex flex-col justify-center items-center rounded-lg  border-sky-400 p-1 space-y-1 transition duration-300 ease-in-out transform hover:scale-110'>
                <img src='./PersonalSite/images/skills/mongodb.svg' className='h-[30px] md:h-[40px]' />
                <h1 className='text-sm md:text-lg '>MongoDB</h1>
              </div>

              <div className='flex flex-col justify-center items-center rounded-lg  border-white p-1 space-y-1 transition duration-300 ease-in-out transform hover:scale-110'>
                <img src='./PersonalSite/images/skills/git-icon.svg' className='h-[30px] md:h-[40px]' />
                <h1 className='text-sm md:text-lg'>Git</h1>
              </div>

              <div className='flex flex-col justify-center items-center rounded-lg  border-white p-1 space-y-1 transition duration-300 ease-in-out transform hover:scale-110'>
                <img src='./PersonalSite/images/skills/typescript.svg' className='h-[30px] md:h-[40px]' />
                <h1 className='text-sm md:text-lg '>Typescript</h1>
              </div>

            </div>

          </motion.div>

        </div>

      </motion.div >
    </>
  )
}

export default AboutMe;