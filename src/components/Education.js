import React from 'react';

const Education = () => {
  return (
    <section className="relative flex flex-col items-center ag-primary px-5 md:px-20 " id='about'>
      
      <div className="w-full flex justify-center mb-16">
        <div className="flex flex-col justify-center items-center p-5 bg-gray-800 rounded-lg">
          <h1 className="text-white text-4xl font-bold text-center mb-7 md:mb-9">ABOUT ME</h1>
          <p className="text-white text-center">
            I am a recent graduate with a Bachelor's degree in Computer Science and Engineering, equipped with a solid foundation in programming and problem-solving. Eager to embark on my professional journey, I am passionate about applying my knowledge to real-world challenges within the tech industry. I am particularly interested in opportunities that allow me to contribute to innovative projects and collaborate with like-minded professionals. My goal is to continuously learn and grow, leveraging my education and enthusiasm to make meaningful contributions to the field of computer science.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center my-1">
        <div className="flex flex-col justify-center p-10 bg-gray-800 rounded-lg w-full md:w-1/2 mb-8 md:mr-4 md:mb-0">
          <h1 className="text-white text-4xl font-bold text-center mb-9">EDUCATION</h1>
          <div className="text-white mb-5">
            <p className="font-bold text-xl mb-2">Bachelor of Computer Science and Engineering</p>
            <div className='pl-1'>
              <p>Akshaya College of Engineering and Technology-Coimbatore</p>
              <p>CGPA: 8.0</p>
              <p>2018-2019</p>
            </div>
          </div>
          <div className="text-white mb-5">
            <p className="font-bold text-2xl mb-2">HSC</p>
            <div className='pl-1'>
              <p>SSHN Higher Secondary School Muhavoor-TamilNadu</p>
              <p>68%</p>
              <p>2019-2023</p>
            </div>
          </div>
          <div className="text-white">
            <p className="font-bold text-2xl mb-2">SSLC</p>
            <div className='pl-1'>
              <p>SSHN Higher Secondary School Muhavoor-TamilNadu</p>
              <p>90%</p>
              <p>2016-2017</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center p-10 bg-gray-800 rounded-lg w-full md:w-1/2">
          <h1 className="text-white text-4xl font-bold text-center mb-8">SKILLS</h1>
          <div className="text-white text-xl">
            <p className="font-bold">Programming Languages</p>
            <ul className="list-disc pl-10 mb-4">
              <li>Python</li>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
            </ul>
            <p className="font-bold pl-3">Frameworks</p>
            <ul className="list-disc pl-10 mb-4">
              <li>React</li>
              <li>Node.js</li>
            </ul>
            <p className="font-bold pl-3">Database</p>
            <ul className="list-disc pl-10 mb-4">
              <li>SQL</li>
            </ul>
            <p className="font-bold pl-6">Tools</p>
            <ul className="list-disc pl-10 mb-4">
              <li>VS Code</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
