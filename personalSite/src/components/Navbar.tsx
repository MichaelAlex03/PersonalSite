
const Navbar = () => {

    const handleClick = (div: string) => {
        document.getElementById(div)?.scrollIntoView({behavior: 'smooth'})
    }



    return (
        <header className="text-white py-6 px-10 md:px-32 bg-[#222831] drop-shadow-md">
            <div className="flex w-full">
                <h1 className='hidden md:flex mr-auto text-md'>Michael Lleverino</h1>
                <div className='flex justify-between w-full'>
                    <button onClick={() => handleClick('home')}><span className="nav">Home</span></button>
                    <button onClick={() => handleClick('aboutMe')}><span className="nav">About</span></button>
                    <button onClick={() => handleClick('Projects')}><span className="nav">Projects</span></button>
                    <button onClick={() => handleClick('Contact')}><span className="nav">Contact</span></button>
                </div>
            </div>
        </header>
    )
}

export default Navbar
