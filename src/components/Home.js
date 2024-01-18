import React from 'react'
import hero from '../assets/1705409754436.png'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
const Home = () => {
  return (
    //top blac, middle bla, botto gra.
    
    //name for smooth scrol w.
    <div name = "home" className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">

        {/* You can set the margin property to auto to horizontally center the element within its container.

        The element will then take up the specified width, and the remaining space will be split equally between the left and right margins. */}
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-3 md:flex-row">
            <div className="flex flex-col justify-center h-full px-5">
                <h2 className="text-4xl sm:text: 8xl font-bold">I'm a full stack</h2>
                {/* max-w-medium a . */}
                <p className="text-gray-500 py-3 max-w-md">
                    About: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, explicabo! Amet quis eaque laudantium distinctio sint qui! Omnis itaque neque quasi libero blanditiis velit dolor!
                </p>
                    <div>
                        <button className='group flex flex-row text-white w-fit px-6 py-3 my-2 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer' >
                                
                            portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                            </span>
                        </button>
                    </div>
            </div>
            
            <div>
                <img src={hero} alt="my img a." height={200} width={100} className="rounded-2xl mx-auto w-2/3 md:w-2/3"/>
            </div>

        </div>
    </div>
  )
}

export default Home