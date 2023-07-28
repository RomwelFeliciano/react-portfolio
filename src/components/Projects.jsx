import { useState, useEffect } from "react";
import React from "react";
import { projects } from "./Data";
import { AnimatePresence, motion } from "framer-motion";

const Projects = () => {
  const [showProject, setShowProject] = useState("");
  const [project, setProject] = useState(projects);
  const [filtered, setFiltered] = useState(projects);

  useEffect(() => {
    if (showProject === "") {
      setFiltered(project);
      return;
    }
    const filtered = project.filter((prj) => prj.type.includes(showProject));
    setFiltered(filtered);
  }, [showProject]);

  const handleShowAll = () => {
    setShowProject("");
  };

  const handleShowWebsite = () => {
    setShowProject("Website");
  };

  const handleShowWebApp = () => {
    setShowProject("Web Application");
  };

  return (
    <section
      id="Projects"
      className="container flex flex-col justify-start items-center p-2 md:p-10 min-h-screen"
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-xl text-second">Projects I Have</h2>
        <h1 className="text-2xl text-main font-bold">My Outputs</h1>
        <div className="flex flex-wrap gap-5 items-center justify-center my-2">
          <button
            className={
              "w-[160px] px-4 py-2 text-main rounded-md border-solid border-2 border-accent hover:bg-accent duration-200 ease-in " +
              (showProject === "" ? "bg-accent" : "")
            }
            onClick={handleShowAll}
          >
            All Projects
          </button>
          <button
            className={
              "w-[160px] px-4 py-2 text-main rounded-md border-solid border-2 border-accent hover:bg-accent duration-200 ease-in " +
              (showProject === "Website" ? "bg-accent" : "")
            }
            onClick={handleShowWebsite}
          >
            Website
          </button>
          <button
            className={
              "w-[160px] px-4 py-2 text-main rounded-md border-solid border-2 border-accent hover:bg-accent duration-200 ease-in " +
              (showProject === "Web Application" ? "bg-accent" : "")
            }
            onClick={handleShowWebApp}
          >
            Web Application
          </button>
        </div>
      </div>
      {/* Container of Cards */}
      <motion.div
        layout
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-3 rounded-sm"
      >
        <AnimatePresence>
          {/* Cards for each data 
          Mapping Starts Here*/}
          {filtered &&
            filtered.map((proj) => (
              <motion.div
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                className="bg-white shadow-sm rounded-sm"
                key={proj.title}
              >
                <div className="p-4">
                  <img
                    src={proj.image}
                    alt=""
                    className="object-cover rounded"
                  />
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
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
