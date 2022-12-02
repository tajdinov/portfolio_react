import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

import Css from "../assets/css.png";
import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import Mongo from "../assets/mongo.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";

const Skills = () => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Html",
        "Css",
        "JavaScript",
        "Graph QL",
        "Mongoose",
        "React JS",
        "Express JS",
        "Apolo",
        "Mongo DB",
        "MySQL",
        "Bcrypt",
        "Node JS",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 70,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div name="skills" className="w-full h-screen text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className=" text-4xl font-bold inline border-b-4 border-[#b9c9ff] ">
            Skills
          </p>
          <p className=" py-4">
            Some of the technologies I've worked with...
            <span className="pl-2" ref={el}></span>
          </p>
        </div>
        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML Icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Css} alt="HTML Icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML Icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML Icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML Icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML Icon" />
            <p className="my-4">MONGO DB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
