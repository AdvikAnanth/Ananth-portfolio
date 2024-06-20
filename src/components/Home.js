import React from 'react';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';
import Typical from 'react-typical';
import AnanthImg from '../assets/Ananth.jpg'; 

const Section = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row px-5 md:px-20 py-10 md:py-32 ag-primary justify-center items-center md:items-start">
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="flex flex-col items-center  md:items-start ">
          <h1 className=" text-2xl md:text-6xl font-home-font text-gray-800 ">
            HI, <br /> 
            <Typical
              steps={['I\'m AnanthaGanesh..', 2000]}
              loop={1}
              wrapper="span"
            />
            <Typical
              steps={[
                'I am a Front-End Developer', 1000,
                'I am a React Enthusiast', 1000,
                'I love coding!', 1000,
              ]}
              loop={Infinity}
              wrapper="p"
              className="text-sm md:text-2xl"
            />
          </h1>
          <div className="flex py-5">
            <a href="https://www.linkedin.com/in/ananthaganesh-a-6b3632201" className="pr-5 hover:text-white" target="_blank" rel="noopener noreferrer">
              <AiOutlineLinkedin className="text-3xl md:text-5xl" />
            </a>
            <a href="https://github.com/AdvikAnanth" className="pr-5 hover:text-white" target="_blank" rel="noopener noreferrer">
              <AiOutlineGithub className="text-3xl md:text-5xl" />
            </a>
            <a href="https://www.instagram.com/ananth__ganesh?igsh=c3ZwYmNzdzhmOHVu
" className="hover:text-white" target="_blank" rel="noopener noreferrer">
              <AiOutlineInstagram className="text-3xl md:text-5xl" />
            </a>
          </div>
          <div className="mt-4">
            <a href="https://drive.google.com/file/d/15-amw71Y0jbbOn9Q4fSGszYV9ZVxYoBk/view?usp=drivesdk

" className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg text-lg font-bold shadow-md transition duration-300 ease-in-out">
              Download CV
            </a>
          </div>
        </div>
      </div>
      
      <div className="md:w-1/2 flex justify-center mb-5 md:mb-0">
        <img className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover border-4 border-black" src={AnanthImg} alt="AnanthaGanesh" />
      </div>
    </section>
  );
};

export default Section;
