import { useState } from "react";
import { education, work } from "./Data";
import { motion } from "framer-motion";

const Experiences = () => {
  const [showContent, setShowContent] = useState("education");

  const handleShowEducation = () => {
    setShowContent("education");
  };

  const handleShowWork = () => {
    setShowContent("work");
  };

  return (
    <section
      id="Experience"
      className="container flex flex-col justify-center items-center p-2 md:p-10 min-h-screen"
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-xl text-second dark:text-white transition-all duration-500 ease-in">
          Experiences I Have in Life
        </h2>
        <h1 className="text-2xl text-main font-bold">My Journey</h1>
        <div className="flex gap-5 items-center justify-center my-2">
          <button
            className={
              "px-4 py-2 text-main rounded-md border-solid border-2 border-accent hover:bg-accent dark:hover:bg-main dark:border-main  dark:hover:text-black duration-200 ease-in " +
              (showContent === "education"
                ? "bg-accent dark:bg-main dark:text-black transition-all duration-500 ease-in"
                : "dark:text-white")
            }
            onClick={handleShowEducation}
          >
            Education
          </button>
          <button
            className={
              "px-4 py-2 text-main rounded-md border-solid border-2 border-accent hover:bg-accent dark:hover:bg-main dark:border-main  dark:hover:text-black duration-200 ease-in " +
              (showContent === "work"
                ? "bg-accent dark:bg-main dark:text-black transition-all duration-500 ease-in"
                : "dark:text-white")
            }
            onClick={handleShowWork}
          >
            Experience
          </button>
        </div>
      </div>
      <motion.div layout className="w-full flex flex-col gap-5 p-3 rounded-sm">
        {/* Cards to map */}

        {/* Cards for Education */}
        {showContent === "education" &&
          education &&
          education.map((educ) => (
            <motion.div
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full flex flex-col justify-center items-start rounded-sm bg-white shadow-lg lg:grid grid-cols-12 lg:justify-start lg:items-center dark:bg-black transition-all duration-500 ease-in"
              key={educ.level}
            >
              <div className="p-4 col-span-5">
                <img
                  className="w-[485px] h-72 rounded-sm object-cover"
                  src={educ.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col col-span-7 justify-start px-4 pb-4 dark:text-white transition-all duration-500 ease-in">
                <h2 className="mb-2 text-xl">
                  {educ.level} -{" "}
                  <span className="text-main">{educ.school}</span>
                </h2>
                <h3 className="mb-2 text-md">{educ.course}</h3>
                <h3 className="mb-2 text-md">{educ.year}</h3>
                <h3 className="mb-2 text-md">Academic Awards</h3>
                <ul className="ml-5">
                  {educ.awards &&
                    educ.awards.map((award) => (
                      <li className="list-disc" key={award}>
                        {award}
                      </li>
                    ))}
                </ul>
              </div>
            </motion.div>
          ))}

        {/* Cards for Work */}
        {showContent === "work" &&
          work &&
          work.map((job) => (
            <motion.div
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full flex flex-col justify-center items-start rounded-sm bg-white shadow-lg lg:grid grid-cols-12 lg:justify-start lg:items-center dark:bg-black transition-all duration-500 ease-in"
              key={job.level}
            >
              <div className="p-4 col-span-5">
                <img
                  className="w-[485px] h-72 rounded-sm object-cover"
                  src={job.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col col-span-7 justify-start px-4 pb-4 dark:text-white transition-all duration-500 ease-in">
                <h2 className="mb-2 text-xl">
                  {job.level} - <span className="text-main">{job.company}</span>
                </h2>
                <h3 className="mb-2 text-md">{job.role}</h3>
                <h3 className="mb-2 text-md">{job.year}</h3>
                <h3 className="mb-2 text-md">Key Responsibilities</h3>
                <ul className="ml-5">
                  {job.tasks &&
                    job.tasks.map((task) => (
                      <li className="list-disc" key={task}>
                        {task}
                      </li>
                    ))}
                </ul>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
};

export default Experiences;
