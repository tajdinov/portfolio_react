import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div name="home" className="w-full h-screen">
      {/* container */}
      <div className="max-v-[1000px] mx-auto px-8 flex flex-col justify-center h-full lg:pl-[100px]">
        <p className="text-[#b9c9ff]">Hi, my name is</p>
        <h1 className="animate-me text-4xl sm:text-7xl font-bold text-[#ccd6f6] ">
          Roman Tazhdynov
        </h1>
        <h2 className="animate-me text-4xl sm:text-7xl font-bold text-[#8892b0] ">
          I'm a full stack developer.
        </h2>
        <p className="tanimate-me ext-[#8892b0] py-4 max-w-[700px] text-[#8892b0] ">
          Aspiring full-stack web developer utilising marketing and business
          background to build a more intuitive user experience on the web.
        </p>
        <div>
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#b9c9ff] hover:border-[b9c9ff]">
              My Work
              <span className=" group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
