import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import layer1 from "../assets/layer 1.png";
import layer2 from "../assets/layer 2.png";
import layer3 from "../assets/layer 3.png";
import layer4 from "../assets/layer 4.png";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [mousePos, setMousePos] = useState({});

  const parallax_el = document.querySelectorAll(".parallax");

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({
        xValue: event.clientX - window.innerWidth / 2,
        yValue: event.clientY - window.innerHeight / 2,
        rotateDegree: (event.clientX / (window.innerWidth / 2)) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div name="home" className="w-full h-screen overflow-hidden text-gray-300">
      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-50">
        <ul>
          <li className="w-[160px] h-[60px] z-80 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-grey-300 z-50"
              href="https://www.facebook.com/roman.tazhdynov"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-grey-300"
              href="https://github.com/tajdinov"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <button
              className="flex justify-between items-center w-full text-grey-300"
              onClick={() =>
                (window.location = "mailto:tajdinov@gmail.com.com")
              }
            >
              Email <HiOutlineMail size={30} />
            </button>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-grey-300"
              href="https://drive.google.com/file/d/1wfNGAtvHh4ndD6igbctnQmRsf3NgPepn/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
      {/* container */}
      <div className="max-v-[1000px] mx-auto px-8 flex flex-col justify-center h-full lg:pl-[200px] overflow-hidden">
        <img
          src={layer2}
          alt="layer2"
          className=" absolute z-0 right-0 bottom-0  opacity-40 parallax"
          style={{
            transform: `perspective(2300px) 
            
            rotateY(${mousePos.rotateDegree * 0}deg)
            translateX(calc(${-mousePos.xValue * 0.01}px)) 
            translateY(calc(${mousePos.yValue * 0.01}px))`,
          }}
        />

        <img
          src={layer4}
          alt="layer4"
          className=" absolute top-0 left-0 opacity-40 transition-none pointer-events-none z-10"
          style={{
            transform: `perspective(2300px) 
            
            rotateY(${mousePos.rotateDegree * 0}deg)
            translateX(calc(${-mousePos.xValue * 0.015}px)) 
            translateY(calc(${mousePos.yValue * 0.015}px))`,
          }}
        />
        <p className="text-[#dee5fe] parallax">Hi, my name is</p>
        <h1
          className="animate-me text-4xl sm:text-7xl font-bold  z-20 parallax"
          style={{
            transform: `perspective(2300px) 
                    
                    rotateY(${mousePos.rotateDegree * 0}deg)
                    translateX(calc(${-mousePos.xValue * 0.001}px)) 
                    translateY(calc(${mousePos.yValue * 0.001}px))`,
          }}
        >
          Roman Tazhdynov
        </h1>
        <h2
          className="animate-me text-4xl sm:text-7xl font-bold  z-20 parallax"
          style={{
            transform: `perspective(2300px) 
                    
                    rotateY(${mousePos.rotateDegree * 0}deg)
                    translateX(calc(${-mousePos.xValue * 0.002}px)) 
                    translateY(calc(${mousePos.yValue * 0.002}px))`,
          }}
        >
          I'm a full stack developer.
        </h2>
        <p
          className="tanimate-me ext-[#8892b0] py-4 max-w-[700px] text-[#a8b3d4] z-20 parallax"
          style={{
            transform: `perspective(2300px) 
                    
                    rotateY(${mousePos.rotateDegree * 0}deg)
                    translateX(calc(${-mousePos.xValue * 0.003}px)) 
                    translateY(calc(${mousePos.yValue * 0.003}px))`,
          }}
        >
          Aspiring full-stack web developer utilising marketing and business
          background to build a more intuitive user experience on the web.
        </p>

        <img
          src={layer3}
          alt="layer3"
          className=" absolute z-30 left-0 opacity-50"
          style={{
            transform: `perspective(2300px) 
            
            rotateY(${mousePos.rotateDegree * 0}deg)
            translateX(calc(${-mousePos.xValue * 0.02}px)) 
            translateY(calc(${mousePos.yValue * 0.02}px))`,
          }}
        />

        <img
          src={layer1}
          alt="layer1"
          className=" absolute z-40 bottom-0 opacity-80 right-0 sm:left-0 "
          style={{
            transform: `perspective(2300px) 
            
            rotateY(${mousePos.rotateDegree * 0}deg)
            translateX(calc(${-mousePos.xValue * 0.025}px)) 
            translateY(calc(${mousePos.yValue * 0.025}px))`,
          }}
        />
        <div className=" z-40">
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
