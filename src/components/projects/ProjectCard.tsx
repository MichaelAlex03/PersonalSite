interface CardProps {
    name: string,
    image: string,
    description: string,
    link?: string,
    technologies: string[],
    gitHub: string

}

const ProjectCard = ({ name, image, description, link, technologies, gitHub}: CardProps) => {
    return (
        <div className='flex flex-col rounded-md w-full bg-[#26313F] transition duration-300 ease-in-out transform hover:-translate-y-4'>

            <div className='w-full'>
                <img src={image} className='rounded-md'/>
            </div>

            <div className='flex flex-col items-center p-5'>
                <h1 className='font-bold text-center text-xl lg:text-2xl xl:text-3xl mt-2'>{name}</h1>
                <p className='text-center text-[#A9A9A9] text-sm md:text-base lg:text-lg xl:text-xl mt-4'>{description}</p>

                <h4 className='mt-4 xl:text-lg'>Technologies Used</h4>
                <div className='flex flex-row gap-4 mt-2'>
                    {technologies.map(item => (
                        <img src={`./images/skills/${item}.svg`} className="h-[20px] w-[20px] xl:h-[25px] xl:w-[25px]"/>
                    ))}
                </div>


                <div className='flex flex-row gap-6 mt-4'>
                    <button className=' text-xs md:text-base border border-white text-white font-semibold hover:text-black hover:bg-[#55E5A4] py-2 px-4 transition duration-300 ease-in-out transform'>
                        <a href={gitHub} target="_blank">Source Code</a>
                    </button>
                    {link ? <button className='text-xs md:text-base border border-white text-white font-semibold hover:text-black hover:bg-[#55E5A4] py-2 px-4 transition duration-300 ease-in-out transform'><a href={link} target='_blank'>Live Site</a></button> : null}
                </div>
            </div>

        </div>
    )
}

export default ProjectCard