import React from "react";
import { frontend } from "./FrontendSkills";
import { backend } from "./BackendSkills";

const Skills = () => {
  return (
    <section
      id="Skills"
      className="container flex flex-col justify-center items-center p-2 md:p-10 min-h-screen"
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-xl text-second">What Skills I Have</h2>
        <h1 className="text-2xl text-main font-bold">My Expertise</h1>
      </div>
      <div className="w-full mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 p-3">
        <div className="w-full bg-white shadow-lg p-2 md:pb-14 rounded-sm">
          <h1 className="text-center text-2xl md:py-3 text-main">
            Front-end Development
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 p-3">
            {frontend.map((skill) => (
              <div className="flex gap-4 items-center" key={skill.name}>
                <div className="flex justify-center items-center">
                  <img className="w-10" src={skill.image} alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <h2>
                    {skill.name} - {skill.level}
                  </h2>
                  <h2>{skill.experience} experience in school</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-white shadow-lg p-2 md:pb-14 rounded-sm">
          <h1 className="text-center text-2xl md:py-3 text-main">
            Back-end Development
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 p-3">
            {backend.map((skill) => (
              <div className="flex gap-4 items-center" key={skill.name}>
                <div className="flex justify-center items-center">
                  <img className="w-10" src={skill.image} alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <h2>
                    {skill.name} - {skill.level}
                  </h2>
                  <h2>{skill.experience} experience in school</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
