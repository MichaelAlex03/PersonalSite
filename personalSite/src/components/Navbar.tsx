import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';

interface NavProps {
    setShowMenu?: React.Dispatch<React.SetStateAction<boolean>>;
    showMenu?: boolean;
}

const NavLinks = ({ showMenu, setShowMenu }: NavProps) => {

    const handleClick = (div: string) => {
        document.getElementById(div)?.scrollIntoView({ behavior: 'smooth' });
        if (setShowMenu) {
            setShowMenu(!showMenu)
        }
    };

    return (
        <>
            <button onClick={() => handleClick('home')}><span className="nav">Home</span></button>
            <button onClick={() => handleClick('aboutMe')}><span className="nav">About</span></button>
            <button onClick={() => handleClick('Projects')}><span className="nav">Projects</span></button>
            <button onClick={() => handleClick('Contact')}><span className="nav">Contact</span></button>
        </>
    )
}

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleBurgerMenu = () => {
        setShowMenu(prev => !prev)
    }


    return (
        <>
            <header className="flex justify-center items-center w-full text-white py-6 px-10 bg-[#222831] drop-shadow-md flex-wrap">


                <div className="flex mr-auto">
                    <h1 className='text-base lg:text-2xl font-bold'>Michael A Lleverino</h1>
                </div>

                <div className='hidden md:flex gap-6'>
                    <NavLinks />
                </div>


                <button onClick={toggleBurgerMenu} className='md:hidden'>
                    <FontAwesomeIcon icon={faBars} />
                </button>

                {showMenu && (
                
                        <div className='flex flex-col basis-full gap-6 mt-4'>
                            <NavLinks showMenu={showMenu} setShowMenu={setShowMenu} />
                        </div>
                    
                )}
            </header>

        </>
    )
}

export default Navbar
