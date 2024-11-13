
const Navbar = () => {

    const handleClick = (div: string) => {
        document.getElementById(div)?.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <header className="flex justify-center items-center w-full text-white py-6 px-10 bg-[#222831] drop-shadow-md">
            <div className="hidden md:flex mr-auto">
                <h1 className='text-2xl font-bold'>Michael Lleverino</h1>
            </div>
            <div className='flex gap-6'>
                <button onClick={() => handleClick('home')}><span className="nav">Home</span></button>
                <button onClick={() => handleClick('aboutMe')}><span className="nav">About</span></button>
                <button onClick={() => handleClick('Projects')}><span className="nav">Projects</span></button>
                <button onClick={() => handleClick('Contact')}><span className="nav">Contact</span></button>
            </div>
        </header>
    )
}

export default Navbar
