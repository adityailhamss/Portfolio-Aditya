import React from "react";
import {
    AiFillGithub,
    AiFillInstagram,
  } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer(){
  let date = new Date();
  let year = date.getFullYear();
    return(
        <div className="flex flex-col items-center mt-6" data-aos="fade-up">
        <h1 className="text-4xl mb-2 font-bold">FIND ME ON</h1>
        <p className="text-lg mb-2">Feel free to <span className="text-[#28CB8B]">connect</span> with me</p>
        <ul className="flex gap-4">
          <li>
            <a
              href="https://github.com/adityailhamss"
              target="_blank"
              rel="noreferrer"
              className="text-white rounded-full p-2"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/aditya-ilhams/"
              target="_blank"
              rel="noreferrer"
              className="text-white rounded-full p-2"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/adityailhamss/"
              target="_blank"
              rel="noreferrer"
              className="text-white rounded-full p-2"
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
        <h1 className="mb-4 text-lg">Copyright © {year} AIS</h1>
      </div>
    )
}

export default Footer;