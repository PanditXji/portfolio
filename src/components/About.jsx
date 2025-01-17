import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 ">Hello!</p>
        <br />
        <p className="text-xl">
          I'm  Vishal Sharma, a B.Tech CSE, specializing in design
          and frontend development. My passion lies in crafting cutting-edge
          and fully functional web applications.        </p>
        <br />

       
      </div>
    </div>
  );
};

export default About;
