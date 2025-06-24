import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
<<<<<<< HEAD
          "Oracle Database Administrator",
          "Database Administrator",
          "System Analyst",
          "Web Developer",
          "Front End Developer"
=======
          "Web Developer",
          "Front End Developer",
          "System Analyst",
          "Technical Writer",
>>>>>>> cc0a733f2a5599f8b18c6e7f7ac964b72a50b000
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
