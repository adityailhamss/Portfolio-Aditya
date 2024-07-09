import React from 'react';

const Experience = () => {

    const data = [
        { year: "Sep 2022 - Des 2022", 
          title: "Intern Web Developer", 
          company: "BAS-IT Studio",
          description: "As an Intern Web Developer at BAS-IT Studio, I contributed to the development of engaging and user-friendly websites under the guidance of experienced mentors. Leveraging my skills in HTML, CSS, JavaScript, ReactJS and TailwindCSS, I collaborated on various projects aimed at enhancing client online presence and functionality. Throughout my internship, I gained valuable hands-on experience in web development practices, honed my problem-solving abilities, and developed a keen eye for detail in delivering high-quality web solutions. This experience equipped me with practical skills and insights into front-end development, preparing me for a successful career in the field.",
        },
    ];

  return (
    <div className="flex px-0 lg:px-10 bg-gray-900 " id="experience" data-aos="fade-up">
    <div className="text-white p-8 md:p-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">EXPERIENCE</h1>
      <div className="space-y-6 md:space-y-8">
        {data.map((exp, index) => (
          <div key={index} className="relative pl-6 md:pl-8">
            <div className="absolute left-0 top-0 mt-1.5 w-4 h-4 bg-green-500 rounded-full"></div>
            <div className="absolute left-0 top-0 w-px h-full bg-gray-600"></div>
            <div className="ml-8 md:ml-12">
              <div className="text-sm md:text-base font-semibold text-gray-400">{exp.year}</div>
              <h2 className="text-xl md:text-2xl font-bold">{exp.title}</h2>
              <h3 className="text-lg md:text-xl">{exp.company}</h3>
              <p className="text-gray-300 mt-2 text-sm md:text-base">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Experience;
