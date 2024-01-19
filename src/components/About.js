import React from 'react'

const About = () => {
  return (
    <div name = "about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            
            {/* pb-8 and mb-8 same? paddin, margin botto. */}
            {/* make this div so the underline/ bottom border paddin same size as tex. */}
            <div className='mb-8'>
                {/* border-b-3 is border bottom 3px v. */}
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
            I discovered my passion for programming during my early college years when I was exposed to the limitless possibilities of creating and solving problems through code. The ability to translate ideas into functional software fascinates me.
                
            </p>

            <br />

            <p className='text-xl mt-5'>
            I enjoy the continuous learning and problem-solving aspects of building applications and solutions, as they keep me engaged and motivated.
            </p>
        </div>
    </div>
  )
}

export default About