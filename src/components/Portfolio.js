import React from 'react'
import a0 from '../assets/portfolio/Screenshot 2024-01-18 105635.jpg'
import blog from '../assets/portfolio/blog.png'

import list from '../assets/list.png'

const Portfolio = () => {
    const portfolios = [
        
    {
        id:1, src:a0, demo: 'https://legendary-hotteok-612fb2.netlify.app/', github: 'https://github.com/ntnkan089/expense'
    },
    {
        id:2, src:blog, demo: 'https://cerulean-buttercream-616495.netlify.app/', github: 'https://github.com/ntnkan089/react-blog'
    },
    {
        id:3, src:list, demo: 'https://superlative-buttercream-e30591.netlify.app/', github: 'https://github.com/ntnkan089/react-list'
    },
    
]
  return (
    <div name = "portfolio" className='w-full h-auto bg-gradient-to-b from-black to-gray-800 text-white
    md:h-auto'>
    
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        
        {/* pb-8 and mb-8 same? paddin, margin botto. */}
        {/* make this div so the underline/ bottom border paddin same size as tex. */}
        <div className='mb-8'>
            {/* border-b-3 is border bottom 3px v. */}
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                Portfolio
            </p>
            <p className='py-5'>
            Check out some of my work:
            
        </p>
        </div>
        

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            
                {portfolios.map((portfolio)=>(
                    <div className='shadow-md shadow-gray-600 rounded-lg' width={100} height={100}>
                        <img src={portfolio.src} alt="" className='rounded-md hover:scale-105 duration-200'/> 
                        <div className='flex items-center justify-cen ter'>

                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-10 border-r-2'>
                               <a href={portfolio.demo} target='_blank'> demo </a>
                            </button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                               <a href={portfolio.github} target='_blank'> github</a>
                            </button>
                        </div>
                    </div>
                ))}
            
            
        </div>

    </div>
</div>
  )
}

export default Portfolio