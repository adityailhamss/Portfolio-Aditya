import React from "react";
import Html from "../../assets/logo/html.png";
import Css from "../../assets/logo/css.png";
import javascript from "../../assets/logo/js.png";
import Php from "../../assets/logo/php.png";
import Java from "../../assets/logo/java.png";
import Laravel from "../../assets/logo/laravel.png";
import rjs from "../../assets/logo/reactjs.png";
import Mysql from "../../assets/logo/mysql.png";
import Git from "../../assets/logo/git.png";
import Oracle from "../../assets/logo/oracle.png";


function Skills() {
    const skills = [
        { name: 'HTML', img: Html },
        { name: 'CSS', img: Css },
        { name: 'JavaScript', img: javascript },
        { name: 'PHP', img: Php },
        { name: 'Java', img: Java },
        { name: 'ReactJS', img: rjs },
        { name: 'Laravel', img: Laravel },
        { name: 'MySQL', img: Mysql },
        { name: 'Oracle', img: Oracle },
        { name: 'Git', img: Git },
    ];

    return (
        <div className="flex flex-col items-center bg-gray-800 p-4" data-aos="fade-right">
            <h1 className="text-4xl font-bold pb-4 text-white mb-4">SKILLS</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col">
                        <a className="rounded-lg w-[250px] h-[200px] p-6 bg-gray-700 flex flex-col items-center justify-center border-2 border-gray-400 hover:border-green-200 shadow-neon">
                            <img src={skill.img} alt={skill.name} className="mb-5" />
                            <h1 className="text-center text-white">{skill.name}</h1>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
