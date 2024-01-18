import React from 'react'

const Contact = () => {
  return (
    <div name = "contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            
            {/* pb-8 and mb-8 same? paddin, margin botto. */}
            {/* make this div so the underline/ bottom border paddin same size as tex. */}
            <div className='mb-8'>
                {/* border-b-3 is border bottom 3px v. */}
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Contact
                </p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maiores laboriosam a fuga sed, placeat, beatae voluptatem totam tenetur, cum soluta laborum ea. Tempore magnam placeat distinctio nisi qui iusto, quos nulla quidem eveniet enim vero nihil perferendis beatae eius dolorem, dignissimos ducimus quasi dolore minima dolores, ad odit cum?
                
            </p>

        </div>
    </div>
  )
}

export default Contact