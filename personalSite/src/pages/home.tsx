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

    return (
        <>
            <div className='fixed top-0 left-0 w-full z-[1000]'>
                <Navbar />
            </div>

            <div className='bg-[#222831] h-screen flex justify-center' id='home'>
                <div className='flex flex-col text-white justify-center items-center w-3/4 gap-2'>
                    <h1 className='text-3xl font-bold'>Hi, I'm <span className='text-[#00ADB5]'>Michael</span></h1>
                    <h3 className='text-center'>Aspiring full-stack developer creating dynamic, user-focused web apps</h3>
                    <div className='mt-2'>
                        <button className='border-2 border-white rounded-md py-2 px-3 flex items-center gap-2'
                            onClick={() => handleClick('aboutMe')}>
                            Check out My Work
                            <i className='bx bx-down-arrow-alt'></i>
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

            <div className='relative' id='Contact'>
                <Contact />
                <Footer />
            </div>

        </>
        
    )
}

export default Home