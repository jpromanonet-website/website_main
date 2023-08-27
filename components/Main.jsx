import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#00A86B]"> Juan</span>
          </h1>
          <h1 className="py-2 text-gray-700">Engineering Manager & Teacher</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            Empowering individuals and leading teams to success - I'm dedicated
            on guiding teams in the development of innovative products,
            solutions, and processes. My passion lies in helping my teams reach
            their full potential, both personally and professionally
          </p>
          <div className="flex items-center justify-center max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/jpromanonet/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <div className=" p-1"></div>
            <a
              href="https://github.com/jpromanonet"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <div className=" p-1"></div>
            <a
              href="https://linktr.ee/jpromanonet"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
