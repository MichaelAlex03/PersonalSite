import React from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div className='bg-[#222831] h-screen flex justify-center'>
        <div className='flex flex-col text-white justify-center items-center w-3/4 gap-2'>
            <h1 className='text-3xl font-bold'>Hi, I'm <span className='text-[#00ADB5]'>Michael</span></h1>
            <h3 className='text-center'>Aspiring full-stack developer creating dynamic, user-focused web apps</h3>
            <div className='mt-2'>
                <Link to='aboutMe'
                            spy={true} 
                            smooth={true} 
                            offset={0} 
                            duration={500}
                            onClick={() => console.log('Link clicked!')}
                        >
                    <button className='border-2 border-white rounded-md py-2 px-3 flex items-center gap-2'>
                        Check Out My Work
                        <i className='bx bx-down-arrow-alt'></i>
                    </button>
                </Link> 
            </div>
        </div>
    </div>
  )
}

export default Home