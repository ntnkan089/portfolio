import React from 'react';



const Education = () => {
  return (

<div name="education" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        
        {/* Section Title */}
        <div className="mb-8 flex items-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Education
          </p>
        </div>

        {/* Degree Information */}
        <div className="text-xl mt-5">
          <h3 className="text-2xl font-semibold mb-1">Bachelor of Science in Computer Science</h3>
          <p className="italic text-lg text-gray-300">University of California, Riverside</p>
          <p className="text-lg text-gray-300">September 2021 - Present</p>
          
          <div className="mt-5">
            <h4 className="text-xl font-semibold mb-2">Relevant Coursework:</h4>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-5 text-gray-300">
              <li>Data Structures and Algorithms</li>
              <li>Operating Systems</li>
              <li>Database Management Systems</li>
              <li>Software Engineering</li>
              <li>Computer Networks</li>
              <li>Artificial Intelligence</li>
              <li>Web Development</li>
              
              <li>Compilers Design</li>
            </ul>
          
          </div>
        </div>

       
      </div>
    </div>

);
}

export default Education;




