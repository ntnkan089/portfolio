import React from 'react';
import { FaLaptopCode, FaHandsHelping, FaRobot } from 'react-icons/fa';
import hackathonImg from '../images/rose.bmp';

import codingClubImg from '../images/acm.bmp';
import volunteerImg from '../images/mento_a.bmp';

const Extra = () => {
  return (
    <div name="extracurricular" className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white py-8">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        
        {/* Section Title */}
        <div className="mb-8 flex items-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Extra-Curriculars
          </p>
        </div>

        {/* Hackathons */}
        <article className="flex flex-col lg:flex-row items-center mb-10">
          <img src={hackathonImg} alt="Hackathon" className="w-full lg:w-1/3 h-40 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-4" />
          <div className="lg:w-2/3 text-left">
            <h3 className="text-3xl font-semibold mb-1 flex items-center">
              <FaRobot className="text-2xl mr-2" /> Hackathons
            </h3>
            <p className="text-lg text-gray-400 mb-1">Date: Various</p>
            <p className="text-gray-300">
              Participated in various hackathons where I collaborated with teams to build innovative projects within a short time frame. These experiences honed my coding and problem-solving skills under pressure.
            </p>
          </div>
        </article>

        {/* Coding Clubs */}
        <article className="flex flex-col lg:flex-row items-center mb-10">
          <img src={codingClubImg} alt="Coding Club" className="w-full lg:w-1/3 h-40 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-4" />
          <div className="lg:w-2/3 text-left">
            <h3 className="text-3xl font-semibold mb-1 flex items-center">
              <FaLaptopCode className="text-2xl mr-2" /> Coding Clubs
            </h3>
            <p className="text-lg text-gray-400 mb-1">Date: Ongoing</p>
            <p className="text-gray-300">
              Active member of ACM and WINC where we regularly conducted coding sessions, workshops, and peer programming events. This provided a platform for learning and sharing knowledge with like-minded peers.
            </p>
          </div>
        </article>

        {/* Volunteer Work */}
        <article className="flex flex-col lg:flex-row items-center">
          <img src={volunteerImg} alt="Volunteer Work" className="w-full lg:w-1/3 h-40 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-4" />
          <div className="lg:w-2/3 text-left">
            <h3 className="text-3xl font-semibold mb-1 flex items-center">
              <FaHandsHelping className="text-2xl mr-2" /> Volunteer Work
            </h3>
            <p className="text-lg text-gray-400 mb-1">Date: Ongoing</p>
            <p className="text-gray-300">
              Engaged in various volunteer activities including teaching and mentoring new undergraduate students as they transition into the college environment (Mentor Collective). Takes on various campus jobs as a reader/grader and teaching assistant. This experience has been rewarding and fulfilling.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Extra;
