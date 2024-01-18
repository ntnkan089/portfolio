import React from 'react'
import { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        {id:1, link: 'home'},
        {id:2, link: 'about'},
        {id:3, link: 'portfolio'},
        {id:4, link: 'experience'},
        {id:5, link: 'contact'},
    ]
  return (
    /*fix navbar, when scroll fixed to screen.*/ 
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
        <div>
         <h1 className="text-5xl font-signature ml-2">Nhan</h1>
        </div>
        {/* only show from at least medium siz. */}
        <ul className="hidden md:flex">
            {
                links.map((link) => (
                    <li key = {link.id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
                        {link.link}
                    </li>))
            }
        </ul>

        {/* ( z-index ) is a CSS property that defines the order of overlapping HTML elements. Elements with a higher index will be placed on top of elements with a lower index 
        
        z-index only works on positioned elements ( position:absolute , position:relative , or position:fixed )
        */}
        <div className="cursor-pointer pr-3 z-10 text-gray-50 md:hidden" onClick={() => setNav(!nav)}>
         {nav?
            <FaTimes size = {30} />:
            <FaBars size = {30} />}
        </div>

        {
        nav&&

        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 text-gray-500 ">
            {
                links.map((link) => (
                    <li key = {link.id} className="px-3 cursor-pointer capitalize py-5 text-4xl">
                        {link.link}
                    </li>))
            }
        </ul>
        }
    </div>
  )
}

export default NavBar