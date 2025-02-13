import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface NavProps {
    currentPage: string
    setCurrentPage: (page: string) => void;
}


//Burger Menu for mobile view
const MobileViewLinks = ({ currentPage, setCurrentPage }: NavProps) => {



    const handleClick = (div: string) => {
        document.getElementById(div)?.scrollIntoView({ behavior: 'smooth' });
        setCurrentPage(div)

    };

    return (
        <>
            <button onClick={() => handleClick('home')}><span className={`${currentPage === 'home' ? 'text-[#55E5A4]' : 'text-[#c7c5c5]'} font-bold transition-colors duration-300 ease-in-out`}>Home</span></button>
            <button onClick={() => handleClick('aboutMe')}><span className={`${currentPage === 'aboutMe' ? 'text-[#55E5A4]' : 'text-[#c7c5c5]'} font-bold transition-colors duration-300 ease-in-out`}>About</span></button>
            <button onClick={() => handleClick('Projects')}><span className={`${currentPage === 'Projects' ? 'text-[#55E5A4]' : 'text-[#c7c5c5]'} font-bold transition-colors duration-300 ease-in-out`}>Projects</span></button>
            <button onClick={() => handleClick('Contact')}><span className={`${currentPage === 'Contact' ? 'text-[#55E5A4]' : 'text-[#c7c5c5]'} font-bold transition-colors duration-300 ease-in-out`}>Contact</span></button>
        </>
    )
}

//Navlink for non burger menu
const NavLinks = ({ currentPage, setCurrentPage }: NavProps) => {

    const handleClick = (div: string) => {
        document.getElementById(div)?.scrollIntoView({ behavior: 'smooth' });
        setCurrentPage(div)

    };

    return (
        <>
            <button onClick={() => handleClick('home')}><span className={`${currentPage === 'home' ? 'text-[#55E5A4]' : 'text-[#c7c5c5] hover:text-[#287955]'} font-bold transition-colors duration-500 ease-in-out`}>Home</span></button>
            <button onClick={() => handleClick('aboutMe')}><span className={`${currentPage === 'aboutMe' ? 'text-[#55E5A4]' : 'text-[#c7c5c5] hover:text-[#287955]'} font-bold transition-colors duration-500 ease-in-out`}>About</span></button>
            <button onClick={() => handleClick('Projects')}><span className={`${currentPage === 'Projects' ? 'text-[#55E5A4]' : 'text-[#c7c5c5] hover:text-[#287955]'} font-bold transition-colors duration-500 ease-in-out`}>Projects</span></button>
            <button onClick={() => handleClick('Contact')}><span className={`${currentPage === 'Contact' ? 'text-[#55E5A4]' : 'text-[#c7c5c5] hover:text-[#287955]'} font-bold transition-colors duration-500 ease-in-out`}>Contact</span></button>
        </>
    )
}

const Navbar = ({ currentPage, setCurrentPage }: NavProps) => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleBurgerMenu = () => {
        setShowMenu(prev => !prev)
    }


    return (
        <>
            <header className="flex justify-center items-center w-full text-white py-6 px-10 bg-[#222831] drop-shadow-md ">

                <div className="flex mr-auto">
                    <h1 className='text-base lg:text-2xl font-bold'>Michael A Lleverino</h1>
                </div>

                <div className='hidden md:flex gap-6'>
                    <NavLinks currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                </div>


                <button onClick={toggleBurgerMenu} className='md:hidden'>
                    <FontAwesomeIcon icon={faBars} />

                    <div className={`lg:hidden flex absolute top-16 left-0 w-full h-auto bg-[#222831] flex-col items-center gap-6 font-semibold z-50 p-4 transition-all duration-300 ease-in-out transform 
                    ${showMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
                    >
                        <MobileViewLinks currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                    </div>
                </button>


            </header>

        </>
    )
}

export default Navbar
