import React from 'react';

const Home2 = () => {
  return (
    <div className="flex px-0 lg:px-10 bg-gray-800" data-aos="fade-up" id="home">
    <div className="text-white p-8 md:p-16">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-center lg:text-start">LET ME
      <span className="text-[#28CB8B] font-bold"> INTRODUCE </span> MYSELF
      </h1>
      <div className="space-y-6 md:space-y-8">
        <div className="relative pl-0 md:pl-8">
        <div className="absolute left-0 top-0 w-16 h-px hidden lg:flex bg-green-500 pt-1"></div>
          <div className="ml-0 md:ml-12 text-center lg:text-start">
            <div className="text-2xl lg:text-4xl font-bold text-white">Welcome! I'm
            <span className="text-[#28CB8B] text-2xl lg:text-4xl"> Aditya Ilham Subagja </span>
            </div>
            <p className="text-gray-300 mt-2 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home2;
