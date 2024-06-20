import React from 'react';
import CrudImg from '../assets/Crud.jpeg'; 
import ReactImg from '../assets/React.png'; 
import FarmerImg from '../assets/Farmer.jpeg'; 

const Project = () => {
  return (
    <section className="relative flex flex-col items-center ag-primary px-5 md:px-20 py-10" id='projects'>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full max-w-4xl bg-gray-800 p-10 rounded-lg">
        <div className="col-span-1 md:col-span-1 flex flex-col md:flex-row justify-center items-center p-5 bg-gray-900 rounded-lg mb-4">
          <img src={CrudImg} alt="Project 1" className="w-full md:w-1/3 h-auto rounded-lg mb-4 md:mb-0 md:mr-4" />
          <div className="flex flex-col justify-center items-center md:items-start">
            <h1 className="text-white text-2xl font-bold mb-2">React-Crud-operation</h1>
            <p className="text-gray-300"> It is my React first app.In this project,I learn lot of things about React,React Hooks and basic knowledge about Github like how to push a code in github and i understand the basic knowledge of web technologies.</p>
          </div>
        </div>
        <div className="col-span-1 md:col-span-1 flex flex-col md:flex-row justify-center items-center p-5 bg-gray-900 rounded-lg mb-4">
          <img src={ReactImg} alt="Project 2" className="w-full md:w-1/3 h-auto rounded-lg mb-4 md:mb-0 md:mr-4" />
          <div className="flex flex-col justify-center items-center md:items-start">
            <h1 className="text-white text-2xl font-bold mb-2">React-Portfolio</h1>
            <p className="text-gray-300">This is my another project using React framework for showing my skills to world.And this project,I use "TailwindCss" to style my personal Portfolio.</p>
          </div>
        </div>
        <div className="col-span-1 md:col-span-1 flex flex-col md:flex-row justify-center items-center p-5 bg-gray-900 rounded-lg">
          <img src={FarmerImg} alt="Project 3" className="w-full md:w-1/3 h-auto rounded-lg mb-4 md:mb-0 md:mr-4" />
          <div className="flex flex-col justify-center items-center md:items-start">
            <h1 className="text-white text-2xl font-bold mb-2">Farmer Trader-app</h1>
            <p className="text-gray-300">Its my Final year project ,we are group of four members name like Algu,Vignesh,Krithick and me in this project I make front-end page for my teammates using HTMl and CSS.The main concept of the project is connecting farmer and people directly for selling their products.  </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
