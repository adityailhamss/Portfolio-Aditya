import React from 'react';

const Experience = () => {

    const data = [
        { year: "2022", 
          title: "Intern Web Developer", 
          company: "BAS-IT Studio",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
        },
        { year: "2022", 
          title: "Intern Web Developer", 
          company: "BAS-IT Studio",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
        },
    ];

  return (
    <div className="flex px-0 lg:px-10 bg-gray-900 min-h-screen" id="experience" data-aos="fade-up">
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
