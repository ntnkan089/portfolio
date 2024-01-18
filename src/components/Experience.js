import React from 'react'
import experie from '../assets/React-icon.svg.png'
const Experience = () => {

    const experiences = [
        
        {
            id:1, src:experie, a: "HTML", style: 'shadow-orange-500'
        },
        {
            id:1, src:experie, a: "React.js", style: 'shadow-orange-500'
        },
        {
            id:1, src:experie, a: "Tailwind CSS", style: 'shadow-orange-500'
        },
        {
            id:1, src:experie, a: "Node.js", style: 'shadow-orange-500'
        },
        {
            id:1, src:experie, a: "Express.js", style: 'shadow-orange-500'
        }
    ]
  return (
    <div name = "experience" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white py-20
    md:h-auto'>
    
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        
        {/* pb-8 and mb-8 same? paddin, margin botto. */}
        {/* make this div so the underline/ bottom border paddin same size as tex. */}
        <div className='mb-8'>
            {/* border-b-3 is border bottom 3px v. */}
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                Experience
            </p>
            <p className='py-5'>
            Some technologies I've worked with:
            
        </p>
        </div>
        

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center px-12 sm:px-0'>
            
                {experiences.map((experience)=>(
                    <div  key = {experience.id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg'+' '+experience.style} width={100} height={100}>
                       <img src={experience.src} alt="" className='w-20 mx-auto' />
                       <p className='mt-4'>
                            {experience.a}
                       </p>
                    </div>
                ))}
            
            
        </div>

    </div>
</div>
  )
}

export default Experience