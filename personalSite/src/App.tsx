import React from 'react'
import AboutMe from './pages/aboutMe'
import Contact from './pages/contact'
import Home from './pages/home'
import Projects from './pages/projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
        <div className='fixed top-0 left-0 w-full h-screen z-[1000]'>
            <Navbar />
        </div>
        <div>
            <div id='home'>
                <Home />
            </div>
            <div id='aboutMe'>
                <AboutMe />
            </div>
            <div id='Projects'>
                <Projects />
            </div>
            <div id='Contact'>
            <Contact /> 
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </>
  )
}

export default App