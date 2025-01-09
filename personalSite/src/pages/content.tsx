import React from 'react'
import Navbar from '../components/Navbar'
import AboutMe from './aboutMe'

export const Content = () => {
  return (
    <div>
            <Navbar />
            <div id="aboutMe">
                <AboutMe /> {/* This is your About Me section */}
            </div>
            {/* Other sections */}
        </div>
  )
}

export default Content
