import React from "react";
import { projects } from "./Data";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="container flex flex-col justify-center items-center p-2 md:p-10 min-h-screen"
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-xl text-second">Projects I Have</h2>
        <h1 className="text-2xl text-main font-bold">My Outputs</h1>
      </div>
      {/* Container of Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-3 rounded-sm">
        {/* Cards for each data 
          Mapping Starts Here*/}
        {projects &&
          projects.map((proj) => (
            <div className="bg-white shadow-sm rounded-sm" key={proj.title}>
              <div className="p-4">
                <img src={proj.image} alt="" className="object-cover rounded" />
              </div>
              <div className="px-5 pb-3">
                <h1 className="text-2xl text-main">{proj.title}</h1>
                <p className="text-md">{proj.description}</p>
              </div>
              <div className="px-5 pb-4">
                <div className="flex flex-wrap items-center gap-3">
                  {proj.tools &&
                    proj.tools.map((tags) => (
                      <h2
                        className="bg-main text-sm rounded-lg px-2 py-1"
                        key={tags}
                      >
                        #{tags}
                      </h2>
                    ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Projects;
