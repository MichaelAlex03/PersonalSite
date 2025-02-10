import React from 'react'

interface CardProps {
    name: string,
    image: string,
    description: string,
    link?: string,
    technologies: string[],
    gitHub: string
}

const ProjectCard = ({ name, image, description, link, technologies, gitHub }: CardProps) => {
    return (
        <div className='flex flex-col rounded-md w-full bg-[#26313F] transition duration-300 ease-in-out transform hover:-translate-y-2'>

            <div className='w-full'>
                <img src={image} className='rounded-md'/>
            </div>

            <div className='flex flex-col items-center p-5'>
                <h1 className='font-bold text-center text-xl lg:text-2xl mt-2'>{name}</h1>
                <p className='text-center text-[#A9A9A9] text-md lg:text-lg mt-4'>{description}</p>

                <h4 className='mt-4'>Technologies Used</h4>
                <div className='flex flex-row gap-4 mt-2'>
                    {technologies.map(item => (
                        <img src={`../../.././images/skills/${item}.svg`} height={20} width={20}/>
                    ))}
                </div>


                <div className='flex flex-row gap-6 mt-4'>
                    <button className='border border-white text-white hover:text-black hover:bg-[#55E5A4] py-2 px-4 rounded-lg'>
                        <a href={gitHub} target="_blank">Source Code</a>
                    </button>
                    {link ? <button><a href={link} target='_blank'>Site</a></button> : null}
                </div>
            </div>

        </div>
    )
}

export default ProjectCard