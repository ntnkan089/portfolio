import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

import {BsFillPersonLinesFill} from 'react-icons/bs'
const SocialLink = () => {
    const links = [
        {id:1, child:(
            <>
                LinkedIn
                <FaLinkedin size={30}/>
            </>
        ), href: "https://www.linkedin.com/in/nhan-nguyen-61602a281/",style: 'rounded-tr-md'},

        {id:2, child:(
            <>
                Github
                <FaGithub size={30}/>
            </>
        ), href: "https://github.com/ntnkan089",},

        {id:3, child:(
            <>
                Mail me
                <HiOutlineMail size={30}/>
            </>
        ), href: "mailto:ntnkan098@gmail.com"},

        {id:5, child:(
            <>
                resume
                <BsFillPersonLinesFill size={30}/>
            </>
        ), href: "/Nhan-Nguyen_Resume.pdf",style: 'rounded-br-md',
    download: true,}
    ]
  return (

    /* When position is set to absolute or fixed, the left property specifies the distance between the element's outer margin of left edge and the inner border of left edge of its containing block. (The containing block is the ancestor to which the element is relatively positioned.) */
    <div className=" flex flex-row lg:hidden bg-">
        <ul className=" flex flex-row w-full space-x-4 bg-gray-500">
            {links.map((link, index) => (

            <li key = {link.id} className={`flex flex-grow justify-normal items-center w-auto h-15 px-4 bg-gray-500 ${link.style} ${
                index !== 0 ? 'border-l border-gray-300' : ''
              }`}>
                
                <a href={link.href} download = {link.download?true:false} target="blank" rel="noreferrer"  className='flex justify-between items-center w-full text-white ' >
                    
                        {link.child}
                    
                </a> 
            </li>
            
            ))}

        </ul>

    </div>
  )
}

export default SocialLink