import React, { useState } from "react";

import project1 from "../assets/screenshot.png";
import project2 from "../assets/Youtrailer.png";
import project3 from "../assets/users.png";
import project4 from "../assets/dalle.png";
import project5 from "../assets/main.png";
import project6 from "../assets/recordstore.png";

const Work = () => {
  const [projects, setProjects] = useState([
    {
      title: "Character Generator",
      body: "Handlebars Node JS Express JS MySQL Tailwind",
      image: project1,
      code: "https://github.com/tajdinov/DnD-Character-Generator.git",
      link: "https://dnd-character-generator-production.up.railway.app/",
      id: 1,
    },
    {
      title: "YouTrailer",
      body: "React JS Firebase Tailwind",
      image: project2,
      code: "https://github.com/tajdinov/YouTrailer_React.git",
      link: "https://youtrailer-7a21c.web.app/",
      id: 2,
    },
    {
      title: "Social Network API",
      body: "Mongoose Express JS",
      image: project3,
      code: "https://github.com/tajdinov/Social-Network-API.git",
      link: "https://drive.google.com/file/d/1R4HCIxJeTMtqoY8R4tDfzTzocNb6IDQB/view",
      id: 3,
    },
    {
      title: "DALL-E 2.0",
      body: "React JS Node JS Express JS Mongoose Tailwind Open AI",
      image: project4,
      code: "https://github.com/tajdinov/pictureGen",
      link: "https://picturegenerator.online/",
      id: 4,
    },
    {
      title: "Tech Blog",
      body: "MySQL Express JS",
      image: project5,
      code: "https://github.com/tajdinov/Tech-Blog.git",
      link: "https://polar-tundra-36305.herokuapp.com/",
      id: 5,
    },
    {
      title: "Record-Store",
      body: "React JS Node JS Express JS Mongoose Tailwind Open AI",
      image: project6,
      code: "https://github.com/tajdinov/Record-Store.git",
      link: "https://record-store-production.up.railway.app/",
      id: 6,
    },
  ]);

  return (
    <div name="work" className=" w-full md:h-screen text-gray-300">
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 text-gray-300 border-[#b9c9ff]">
            Projects
          </p>
        </div>

        {/* container */}
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* card */}
          {projects.map((project) => (
            <div
              style={{ backgroundImage: `url(${project.image})` }}
              className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
              key={project.id}
            >
              {/* hover */}
              <div className=" opacity-0 group-hover:opacity-100 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md w-full h-full duration-500 ">
                <span className="flex justify-center text-xl font-bold text-white tracking-wider mt-[60px]">
                  {project.title}
                </span>
                <span className="flex justify-center text-center text-sm font-bold text-white tracking-wider mt-1">
                  {project.body}
                </span>
                <div className=" pt-6 text-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className=" text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className=" text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
