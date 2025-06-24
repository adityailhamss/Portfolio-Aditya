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
            Hello, my name is Aditya Ilham Subagja. I am Bachelor's degree in Informatics Engineering from Universitas Komputer Indonesia. Currently, I work as 
            a Database Administrator with close to one year of experience. I have experience in Database Management on Oracle, MySQL and PostgresSQL, 
            Database Installation with High Availability RAC and Data Guard, Backup and Restore Database with RMAN 
            and Data Pump, Partition Table and Indexing, Describing System Requirements with UML, Understanding 
            SDLC with Waterfall and Scrum, Creating Mockups with Balsamiq and Web Development with the Java, 
            JavaScript, PHP programming languages.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home2;
