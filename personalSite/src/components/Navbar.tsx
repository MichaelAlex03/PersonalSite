
import React, { useState } from 'react'
// import { Link } from "react-router-dom";
import {Link} from 'react-scroll'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);



    return (
        <div>
            <header className="flex justify-center items-center text-white py-6 px-10 md:px-32 bg-[#222831] drop-shadow-md ">
                <div className='flex items-center justify-center md:justify-between sm:w-[vw] w-full'>
                    <h1 className='hidden md:flex mr-auto text-md'>Michael Lleverino</h1>
                    <ul className="flex gap-6 font-semibold text-base">
                        <li className='text-sm'>
                            <Link to='home'
                                spy={true} 
                                smooth={true} 
                                offset={0} 
                                duration={500} 
                                >
                                Home
                            </Link>
                        </li>
                        <li className='text-sm'>
                            <Link to='aboutMe'
                                activeClass='active'
                                spy={true} 
                                smooth={true} 
                                offset={0} 
                                duration={500}
                                >
                                About Me
                            </Link>
                        </li>
                        <li className='text-sm'>
                            <Link to='Projects'
                                activeClass='active'
                                spy={true} 
                                smooth={true} 
                                offset={0} 
                                duration={500}
                                >
                                Projects
                            </Link>
                        </li>
                        <li className='text-sm'>
                            <Link to='Contact'
                                activeClass='active'
                                spy={true} 
                                smooth={true} 
                                offset={0} 
                                duration={500}
                                >
                                Contact
                            </Link>
                        </li>
                </ul>
                </div>

            </header>
        </div>
    )
}

export default Navbar
