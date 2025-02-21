
import { useState } from 'react'

import AboutMe from './aboutMe';
import Projects from './projects';
import Contact from './contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { motion } from 'framer-motion';

const Home = () => {

    const [currentPage, setCurrentPage] = useState('home');

    const handleGoToContent = (div: string) => {
        document.getElementById(div)?.scrollIntoView({ behavior: 'smooth' });
        setCurrentPage('aboutMe')
    }

    return (
        <>
            <div className='fixed top-0 left-0 w-full z-[1000]'>
                <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>

            <section>
                <div className='bg-[#222831] h-screen flex justify-center' id='home'>
                    <div className='flex flex-col text-white justify-center items-center w-3/4 md:w-1/2 gap-2'>
                        <motion.h1
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: .75 }}
                            className='text-center text-4xl lg:text-6xl font-bold'
                        >
                            Hi, I'm <span className='text-[#55E5A4]'>Michael</span>
                        </motion.h1>
                        <motion.h3
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: .75 }}
                            className='text-center text-base md:text-2xl lg:text-3xl'
                        >
                            Full-stack developer creating dynamic, user-focused web apps
                        </motion.h3>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: .75 }}
                            className='z-10 mt-3'
                        >
                            <button className='button_main flex items-center gap-2 text-base md:text-xl'
                                onClick={() => handleGoToContent('aboutMe')}>
                                Check out My Work
                                <i className='bx bx-down-arrow-alt ml-2'></i>
                            </button>
                        </motion.div>
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

            </section>


        </>

    )
}

export default Home