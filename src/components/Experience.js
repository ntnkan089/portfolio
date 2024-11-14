import React from 'react'
import { FaHtml5, FaReact, FaCss3Alt, FaNodeJs, FaJava, FaPython, F } from 'react-icons/fa'
import { SiSpringboot, SiTypescript  } from "react-icons/si";

import { SiTailwindcss, SiJavascript, SiMongodb, SiPostgresql, SiNextdotjs, SiExpress } from 'react-icons/si'

const Experience = () => {
    const experiences = [
        {
            id: 1, icon: <FaHtml5 size={40} />, a: "HTML", style: 'shadow-orange-500'
        },
        {
            id: 2, icon: <FaReact size={40} />, a: "React.js", style: 'shadow-blue-500'
        },
        {
            id: 5, icon: <SiJavascript size={40} />, a: "JavaScript", style: 'shadow-yellow-500'
        },
        {
            id: 3, icon: <FaCss3Alt size={40} />, a: "CSS", style: 'shadow-blue-500'
        },
        {
            id: 8, icon: <FaJava size={40} />, a: "Java", style: 'shadow-red-500'
        },
        {
            id: 18, icon: <SiExpress size={40} />, a: "Express.js", style: 'shadow-gray-500'
        },
        {
            id: 4, icon: <SiTailwindcss size={40} />, a: "Tailwind CSS", style: 'shadow-teal-500'
        },
        
        
        {
            id: 6, icon: <FaNodeJs size={40} />, a: "Node.js", style: 'shadow-green-500'
        },
        
        
        {
            id: 9, icon: <SiMongodb size={40} />, a: "MongoDB", style: 'shadow-green-500'
        },
        {
            id: 11, icon: <SiNextdotjs size={40} />, a: "Next.js", style: 'shadow-white'
        },
        {
            id: 10, icon: <SiPostgresql size={40} />, a: "PostgreSQL", style: 'shadow-blue-500'
        },
        
        {
            id: 12, icon: <FaPython size={40} />, a: "Python", style: 'shadow-yellow-500'
        },
        {
            id: 31, icon: <SiSpringboot size={40} />, a: "Spring Boot", style: 'shadow-green-300'
        },
        {
            id: 81, icon: <SiTypescript size={40} />, a: "TypeScript", style: 'shadow-blue-500'
        },
    ]
  
    return (
        <div name="experience" className='w-full h-auto bg-gradient-to-b from-black to-gray-800 text-white py-20 md:h-auto'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='mb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                       Technical Experience
                    </p>
                    <p className='py-5'>
                        Some technologies I've worked with:
                    </p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center px-12 sm:px-0'>
                    {experiences.map((experience) => {
                        const experience_style = `shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${experience.style}`

                        return (
                            <div key={experience.id} className={experience_style}>
                                <div className='flex justify-center'>
                                    {experience.icon}
                                </div>
                                <p className='mt-4'>
                                    {experience.a}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Experience




