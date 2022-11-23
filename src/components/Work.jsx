import React from "react";

import Dnd from "../assets/dnd.png";

const Work = () => {
  return (
    <div name="work" className=" w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 text-gray-300 border-[#b9c9ff]">
            Projects
          </p>
        </div>

        {/* container */}
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* card */}
          <div
            style={{ backgroundImage: `url(${Dnd})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Full Stack Applicaton
              </span>
              <div className=" pt-8 text-center">
                <a href="/">
                  <button className=" text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className=" text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Dnd})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Full Stack Applicaton
              </span>
              <div className=" pt-8 text-center">
                <a href="/">
                  <button className=" text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className=" text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Dnd})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Full Stack Applicaton
              </span>
              <div className=" pt-8 text-center">
                <a href="/">
                  <button className=" text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className=" text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
