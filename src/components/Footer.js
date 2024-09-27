import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLink = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/nhan-nguyen-61602a281/",
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/ntnkan089",
    },
    {
      id: 3,
      child: (
        <>
          Mail Me <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:ntnkan098@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "/Nhan-Nguyen_Resume.pdf",
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className="lg:hidden">
      <ul className="flex flex-row justify-center items-center w-full space-x-4 bg-gray-900 p-4  shadow-lg">
        {links.map((link, index) => (
          <li
            key={link.id}
            className={`flex justify-center items-center bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition-all duration-300 ${
              link.style ? link.style : ''
            } ${index !== 0 ? 'border-l border-gray-500' : ''}`}
          >
            <a
              href={link.href}
              download={link.download ? true : false}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center text-white text-lg font-medium space-x-2"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>

      
      <div className="text-center  text-gray-400 text-sm bg-gray-900">




        &copy; {new Date().getFullYear()} Nhan Nguyen. All rights reserved.
      </div>
    </div>
  );
};

export default SocialLink;



