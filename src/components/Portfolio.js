import React, { useState } from 'react';
import petlinkImg from '../assets/portfolio/petlink.png';
import photoboothImg from '../assets/portfolio/photobooth.png';

import a0 from '../assets/portfolio/Screenshot 2024-01-18 105635.jpg';
import blog from '../assets/portfolio/blog.png';

import enta from '../assets/portfolio/enta.png';

import list from '../assets/list.png';
import ches from '../assets/portfolio/ches.png';
const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);

  const portfolios = [
    {

      id: 1,
      src: petlinkImg,
      demo: 'https://petlink-six.vercel.app/',
      github: 'https://github.com/ntnkan089/petlink',
      title: 'PetLink',
      description: 'A pet adoption platform using Next.js, Prisma, and NextAuth.'
    },
    {
      id: 2,
      src: photoboothImg,
      demo: 'https://photobooth-ftl1.onrender.com/',
      github: 'https://github.com/ntnkan089/photobooth',
      title: 'PhotoBooth',
      description: 'A social media app for sharing posts and chatting, built with React, Node.js, Express.js, and PostgreSQL.'
    },
    {
      id: 3,
      src: enta,
      demo: 'https://mental-health-s.vercel.app/',
      github: 'https://github.com/ntnkan089/mental-health-s',
      title: 'Mental Health Support',
      description: 'A comprehensive mental health support platform designed to promote well-being and provide valuable resources for users. Built with Tailwind CSS, React, ShadCN, and Spring Boot.'
    }
  ];

  const hiddenPortfolios = [
    {
      id: 3,
      src: a0,
      demo: 'https://legendary-hotteok-612fb2.netlify.app/',
      github: 'https://github.com/ntnkan089/expense',
      title: 'Expense Tracker',
      description: 'A web app for tracking expenses and managing personal finances.',
    },
    {
      id: 8,
      src: blog,
      demo: 'https://cerulean-buttercream-616495.netlify.app/',
      github: 'https://github.com/ntnkan089/react-blog',
      title: 'React Blog',
      description: 'A blog platform built with React, allowing users to write and publish posts.',
    },
    {
      id: 5,
      src: list,
      demo: 'https://superlative-buttercream-e30591.netlify.app/',
      github: 'https://github.com/ntnkan089/react-list',
      title: 'React To-Do List',
      description: 'A task management app built with React for creating and organizing to-do lists.',
    },
    {
      id: 18,
      src: ches,
      demo: 'https://github.com/cs100/final-project-cs100-dream-team',
      github: 'https://github.com/cs100/final-project-cs100-dream-team',
      title: 'Chess App',
      description: 'A Chess App for class project, built using C++ and raylib.',
    },
  ];

  return (
    <div name="portfolio" className="w-full h-auto bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-5">Check out some of my work:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map((portfolio) => (
            <div key={portfolio.id} className="shadow-md shadow-gray-600 rounded-lg flex flex-col justify-between">
              <div className="w-full h-80">
                <img
                  src={portfolio.src}
                  alt={portfolio.title}
                  className="rounded-md hover:scale-105 duration-200 object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{portfolio.title}</h3>
                <p className="text-gray-400">{portfolio.description}</p>
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={portfolio.demo} target="_blank" rel="noreferrer">Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={portfolio.github} target="_blank" rel="noreferrer">GitHub</a>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Section for older projects */}
        {showMore && (
          <div className="mt-16"> {/* Add top margin to separate sections */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-center">Older Projects</h3>
              <p className="text-center text-gray-400">These are some of my earlier works.</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {hiddenPortfolios.map((portfolio) => (
                <div key={portfolio.id} className="shadow-md shadow-gray-600 rounded-lg flex flex-col justify-between">
                  <div className="w-full h-80">
                    <img
                      src={portfolio.src}
                      alt={portfolio.title}
                      className="rounded-md hover:scale-105 duration-200 object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{portfolio.title}</h3>
                    <p className="text-gray-400">{portfolio.description}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      <a href={portfolio.demo} target="_blank" rel="noreferrer">Demo</a>
                    </button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      <a href={portfolio.github} target="_blank" rel="noreferrer">GitHub</a>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>


)}

        <div className="flex justify-center mt-8">
          <button onClick={() => setShowMore(!showMore)} className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-700 duration-200">
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </div>
  );

};

export default Portfolio;






