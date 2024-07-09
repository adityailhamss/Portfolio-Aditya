import React from "react";
import Donatsu from "../../assets/image/donatsu.png";
import Designxx from "../../assets/image/designxx.png";
import Smarthome from "../../assets/image/smarthome.png";
import Furniro from "../../assets/image/furniro.png";
import PortfolioWeb from "../../assets/image/portofolio.png";
import Kalori from "../../assets/image/kaloritrack.png";
import Writer from "../../assets/image/writer.png";
import Uml from "../../assets/image/uml.png";
import { FaReact, FaJava, FaPhp } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStrapi, SiMysql } from "react-icons/si";
import { DiCodeigniter } from "react-icons/di";
import { TbApi } from "react-icons/tb";


const portfolioData = [
    {
        title: 'Portfolio Website',
        description: 'Portfolio website showcasing my projects, skills, and experience. Built using React and styled with Tailwind CSS. Highlighting my journey as a Front-End Developer, and includes detailed sections for my work, skills, and contact information.',
        livePreview: 'https://donatsu.netlify.app/',
        github: 'https://github.com/adityailhamss/Portfolio-Aditya',
        img: PortfolioWeb,
        icons: [<FaReact/>, <RiTailwindCssFill/>,]
    },
    {
        title: 'Furniro',
        description: 'Furniro is a modern e-commerce website for a furniture shop. It features a user-friendly design, allowing customers to easily browse and purchase furniture. Built with React and styled using Tailwind CSS, Furniro offers a smooth and responsive shopping experience.',
        livePreview: '',
        github: 'https://github.com/adityailhamss/furniro-shop',
        img: Furniro,
        icons: [<FaReact/>, <RiTailwindCssFill/>,]
    },
    {
        title: 'Donatsu',
        description: 'Donatsu is a stylish and responsive e-commerce website for a donut shop. It features an attractive design, allowing customers to easily browse and order donuts. Built with React, Tailwind CSS, and Strapi, Donatsu provides a seamless shopping experience with a smooth interface.',
        livePreview: 'https://donatsu.netlify.app/',
        github: 'https://github.com/adityailhamss/donatsu',
        img: Donatsu,
        icons: [<FaReact/>, <RiTailwindCssFill/>, <SiStrapi />]
    },
    {
        title: 'DesignXX',
        description: 'DesignXX is a modern and responsive website for selling design services. It features a clean and professional design, making it easy for clients to explore and purchase design packages. Built with React and styled using Tailwind CSS, DesignXX offers a seamless and engaging user experience.',
        livePreview: 'https://designxx.netlify.app/',
        github: 'https://github.com/adityailhamss/designxx',
        img: Designxx,
        icons: [<FaReact/>, <RiTailwindCssFill/>]
    },
    {
        title: 'Smarthomes',
        description: 'Smarthomes is a sleek and responsive e-commerce website for selling electronics. It features an intuitive design, making it easy for customers to browse and purchase electronic products. Built with React and styled using Tailwind CSS, Smarthomes offers a smooth and user-friendly shopping experience.',
        livePreview: 'https://smarthomess.netlify.app/',
        github: 'https://github.com/adityailhamss/SmartHomes',
        img: Smarthome,
        icons: [<FaReact/>, <RiTailwindCssFill/>]
    },
    {
        title: "Kalori Track's Design and Application",
        description: 'Figma design and android applications KaloriTrack. KaloriTrack is an application to control daily calorie intake from the food consumed. Built in Java and PHP for backend with Codeigniter Framework. Utilize API FatSecret and API Clarifai',
        livePreview: 'https://www.figma.com/design/kCaTlL36NohX1MX9yIC6Do/KaloriClarifaiAPI?node-id=0-1&t=X29gYpkKgGBBMZcT-0',
        github: 'https://github.com/adityailhamss/kalori',
        img: Kalori,
        icons: [<FaJava />, <FaPhp />, <DiCodeigniter />, <SiMysql />, <TbApi />]
    },
    {
        title: 'Technical Writer',
        description: 'Experienced in creating clear and concise technical documents and user guides. Specializing in transforming complex information into easy-to-understand content for end-users and developers.',
        livePreview: 'https://drive.google.com/drive/folders/1XKkQEXoQ7296N8iyRLw8eZDXRH_ZwwPe?usp=drive_link',
        github: 'https://drive.google.com/drive/folders/1XKkQEXoQ7296N8iyRLw8eZDXRH_ZwwPe?usp=drive_link',
        img: Writer,
        icons: '-',
    },
    {
        title: 'UML Diagram',
        description: 'The UML Diagram Creator is a tool designed to simplify the process of creating Unified Modeling Language (UML) diagrams. It offers a user-friendly interface to help developers and designers visualize system architecture, design patterns, and interactions between components. The tool supports various types of UML diagrams, making it versatile for different project needs.',
        livePreview: 'https://drive.google.com/drive/folders/1aB41ZPSHGe8g_GGAqS-jMb57TfwQn7fm?usp=sharing',
        github: 'https://drive.google.com/drive/folders/1aB41ZPSHGe8g_GGAqS-jMb57TfwQn7fm?usp=sharing',
        img: Uml,
        icons: '-',
    },
];

function Portfolio() {
    return (
        <div className="flex flex-col items-center px-4 py-6 min-h-screen" id="portfolio" data-aos="fade-right">
            <h1 className="text-4xl font-bold mb-4">PORTFOLIO</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData.map((item, index) => (
                    <div key={index} className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-2 border-gray-400 hover:border-green-200">
                        <a 
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.livePreview}>
                            <img className="rounded-t-lg " src={item.img} alt={item.title} />
                        </a>
                        <div className="p-5 flex flex-col items-center">
                            <a href={item.livePreview}>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{item.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">{item.description}</p>
                            <div className="flex gap-4 mb-4 items-center">
                                <p className="text-center" >Use: </p>
                                    {item.icons}
                            </div>
                            <div className="flex gap-4">
                                <a
                                    href={item.livePreview}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Live Preview
                                </a>
                                <a
                                    href={item.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
                                >
                                    GitHub
                                    <svg
                                        className="w-4 h-4 ml-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.01.08-2.1 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.27.82 2.14 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
