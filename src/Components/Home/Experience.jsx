import React from 'react';

const Experience = () => {

    const data = [
        { year: "Agt 2024 - Now", 
          title: "Oracle Database Administrator - Project Core Banking System at Bank Indonesia", 
          company: "PT Metrocom Global Solusi",
          description: [
            "1. Conduct routine Oracle database health checks and monitor RAC, Data Guard, backup status, and database instances",
            "2. Generate AWR reports for performance analysis and perform database backup and restore using Data Pump.",
            "3. Update transactions based on user requests.",
            "4. Monitor and reprocess unrecorded transaction deadlocks.",
            "5. Prepare daily and monthly reports on performance and daily transactions.",
            "6. Installation and configuration Oracle Database with RAC and Data Guard.",
            "7. Simulate Disaster Recovery from Data Center (DC) to Disaster Recovery Center (DRC)."
          ]
        },
        { year: "Sep 2022 - Des 2022", 
          title: "Intern Web Developer", 
          company: "BAS-IT Studio",
          description: [
            "1. Developed websites from design mockups to functional front-end using HTML, CSS, and JavaScript with the ReactJS framework.",
            "2. Deployed websites by installing and configuring applications to ensure effective and efficient user access.",
          ]
        },
    ];

  return (
    <div className="flex px-0 lg:px-10 bg-gray-900" id="experience" data-aos="fade-up">
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
                <div className="text-gray-300 mt-2 text-sm md:text-base space-y-1">
                  {Array.isArray(exp.description) ? 
                    exp.description.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))
                    : <p>{exp.description}</p>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
