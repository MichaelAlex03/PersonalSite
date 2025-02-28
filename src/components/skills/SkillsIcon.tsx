import React from 'react'

interface SkillsIcon {
    name: string
}

const SkillsIcon = ({ name }: SkillsIcon) => {
    return (
        <div className='rounded-full bg-blue-500/10 text-[#55E5A4] px-2 py-1 text-sm'>{name}</div>
    )
}

export default SkillsIcon