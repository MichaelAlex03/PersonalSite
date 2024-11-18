import React from 'react'
import AboutMe from './aboutMe';
import Projects from './projects';
import Contact from './contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {

    const handleClick = (div: string) => {
        document.getElementById(div)?.scrollIntoView({behavior: 'smooth'});
    }

    //relative border-2 before:border-white bg-transparent py-2.5 px-5 font-medium uppercase text-white transition-colors before:absolute before:left-0 
    //before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#00ADB5] before:transition-transform before:duration-300 
    //hover:text-white before:hover:scale-x-100 flex items-center hover:border-black

    //border-2 border-white py-2 px-3 flex items-center gap-2 text-base md:text-xl

    return (
        <>
            <div className='fixed top-0 left-0 w-full z-[1000]'>
                <Navbar />
            </div>

            <div className='bg-[#222831] h-screen flex justify-center' id='home'>
                <div className='flex flex-col text-white justify-center items-center w-3/4 md:w-1/2 gap-2'>
                    <h1 className='text-center text-4xl lg:text-6xl font-bold'>Hi, I'm <span className='text-[#00ADB5]'>Michael</span></h1>
                    <h3 className='text-center text-base md:text-2xl lg:text-3xl '>Aspiring full-stack developer creating dynamic, user-focused web apps</h3>
                    <div className='z-10 mt-3'>
                        <button className='button_main flex items-center gap-2 text-base md:text-xl'
                            onClick={() => handleClick('aboutMe')}>
                            Check out My Work
                            <i className='bx bx-down-arrow-alt ml-2'></i>
                        </button>
                    </div>
                </div>
            </div>


            <div id='aboutMe'>
                <AboutMe />
            </div>

            <div id='Projects'>
                <Projects />
            </div>

            <div className='relative'id='Contact'>
                <Contact />
                <Footer />
            </div>

        </>
        
    )
}

export default Home