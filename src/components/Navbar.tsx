import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface NavProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
    showMenu?: boolean;
    handleClick?: (div: string) => void;
}


//Burger Menu for mobile view
const MobileViewLinks = ({ currentPage, handleClick }: NavProps) => {


    return (
        <>
            <button onClick={() => handleClick && handleClick('home')}><span className={`${currentPage === 'home' ? 'text-[#55E5A4]' : 'text-[#c7c5c5]'} font-bold transition-colors duration-300 ease-in-out text-base`}>Home</span></button>
            <button onClick={() => handleClick && handleClick('aboutMe')}><span className={`${currentPage === 'aboutMe' ? 'text-[#55E5A4]' : 'text-[#c7c5c5]'} font-bold transition-colors duration-300 ease-in-out text-base`}>About</span></button>
            <button onClick={() => handleClick && handleClick('Projects')}><span className={`${currentPage === 'Projects' ? 'text-[#55E5A4]' : 'text-[#c7c5c5]'} font-bold transition-colors duration-300 ease-in-out text-base`}>Projects</span></button>
            <button onClick={() => handleClick && handleClick('Contact')} ><span className={`${currentPage === 'Contact' ? 'text-[#55E5A4]' : 'text-[#c7c5c5]'} font-bold transition-colors duration-300 ease-in-out text-base`}>Contact</span></button>
        </>
    )
}

//Navlink for non burger menu
const NavLinks = ({ currentPage, handleClick }: NavProps) => {


    return (
        <>
            <button onClick={() => handleClick && handleClick('home')}><span className={`${currentPage === 'home' ? 'text-[#55E5A4] active' : 'text-[#c7c5c5] hover:text-[#287955]'} nav flex justify-center font-bold transition-colors duration-500 ease-in-out text-base 2xl:text-lg`}>Home</span></button>
            <button onClick={() => handleClick && handleClick('aboutMe')}><span className={`${currentPage === 'aboutMe' ? 'text-[#55E5A4] active' : 'text-[#c7c5c5] hover:text-[#287955]'} nav  font-bold transition-colors duration-500 ease-in-out text-base 2xl:text-lg`}>About</span></button>
            <button onClick={() => handleClick && handleClick('Projects')}><span className={`${currentPage === 'Projects' ? 'text-[#55E5A4] active' : 'text-[#c7c5c5] hover:text-[#287955]'} nav  font-bold transition-colors duration-500 ease-in-out text-base 2xl:text-lg`}>Projects</span></button>
            <button onClick={() => handleClick && handleClick('Contact')}><span className={`${currentPage === 'Contact' ? 'text-[#55E5A4] active' : 'text-[#c7c5c5] hover:text-[#287955]'} nav  font-bold transition-colors duration-500 ease-in-out text-base 2xl:text-lg`}>Contact</span></button>
        </>
    )
}


//Navbar
const Navbar = ({ currentPage, setCurrentPage }: NavProps) => {

    const [showMenu, setShowMenu] = useState(false);

    
    const handleClick = (div: string) => {
        document.getElementById(div)?.scrollIntoView({ behavior: 'smooth' });
        setCurrentPage(div);

    };

    const toggleBurgerMenu = () => {
        setShowMenu(prev => !prev)
    }


    return (
        <>
            <header className="flex justify-center items-center w-full text-white py-6 px-10 bg-[#222831] drop-shadow-md ">

                <button className="flex mr-auto" onClick={() => {
                    handleClick('home');
                    toggleBurgerMenu();
                }}>
                    <h1 className='text-base lg:text-2xl font-bold'>Michael A Lleverino</h1>
                </button>

                <div className='hidden md:flex gap-10'>
                    <NavLinks currentPage={currentPage} setCurrentPage={setCurrentPage} handleClick={handleClick} />
                </div>


                <button onClick={toggleBurgerMenu} className='md:hidden'>
                    <FontAwesomeIcon icon={faBars} />


                    <div className={`lg:hidden flex absolute top-16 left-0 w-full h-auto bg-[#222831] flex-col items-center gap-6 font-semibold z-50 p-4 transition-all duration-300 ease-in-out transform 
                    ${showMenu ? "opacity-100 translate-y-0" : "-translate-y-[300px]"}`}
                    >
                        <MobileViewLinks currentPage={currentPage} setCurrentPage={setCurrentPage} showMenu={showMenu} handleClick={handleClick} />
                    </div>
                </button>


            </header>

        </>
    )
}

export default Navbar
