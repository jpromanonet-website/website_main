import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/about.jpg";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#000]">About</p>
          <h2 className="py-4">Who Am I?</h2>
          <p className="py-2 text-gray-600">
            My love for technology and solving problems started at a young age.
            I taught myself how to code with a book about Quick Basic and an old
            IBM PC, and I've been hooked ever since. I've been fortunate enough
            to turn my passion into a successful career and continue to expand
            my knowledge and skills.
          </p>
          <p className="py-2 text-gray-600">
            In addition to my professional achievements, I have a passion for
            books and building things. I'm always looking for ways to help
            others and make a positive impact in their lives. Whether it's
            through coding, selling websites, or simply lending a hand, I find
            great joy in helping others.
          </p>
          <p className="py-2 text-gray-600">
            I bring my technical expertise and leadership skills to the table,
            and I'm excited to join a new team where I can continue making a
            difference. I'm eager to bring my positive energy and passion for
            problem-solving to any organization.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
}

export default About;
