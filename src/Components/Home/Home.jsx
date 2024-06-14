import React from 'react';
import Foto from "../../assets/image/Illustration.png";
import Type from "./Type";
import Skills from "./Skills";
import Home2 from "./Home2";
import Experience from "./Experience";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "./Contact";

const LandingPage = () => {
  return (
    <div className="bg-grey-700 min-h-screen" data-aos="fade-up">
      <div className="flex flex-row justify-around items-center min-h-screen" >
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="flex-1 flex-col px-6 lg:px-24 text-center lg:text-start">
            <h1 className="text-2xl lg:text-6xl text-white flex flex-row gap-2 lg:gap-4">
              Hi, I'm
              <span className="text-2xl lg:text-6xl text-[#28CB8B]">Aditya Ilham Subagja</span>
            </h1>
            <div className="text-2xl lg:text-6xl py-4 lg:py-6">
              <Type />
            </div>
                <a
                href="#contact"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                data-aos="fade-up"
                >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Contact Me
                </span>
                </a>
          </div>
          <img className="flex justify-center py-8 px-20" src={Foto} alt="Illustration" data-aos="fade-left" />
        </div>
      </div>
      <Home2/>
      <Skills/>
      <Experience/>
      <Portfolio/>
      <Contact/>
    </div>
  );
};

export default LandingPage;
