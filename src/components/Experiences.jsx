import React from "react";
import { education } from "./EducationExperience";
import { work } from "./WorkExperience";

const Experiences = () => {
  return (
    <section
      id="Experience"
      className="container flex flex-col justify-center items-center p-2 md:p-10 min-h-screen"
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-xl text-second">What Experiences I Have in Life</h2>
        <h1 className="text-2xl text-main font-bold">My Journey</h1>
        <div className="flex gap-5 items-center justify-center my-2">
          <button className="px-4 py-2 bg-accent text-main rounded-md">
            Education
          </button>
          <button className="px-4 py-2 bg-accent text-main rounded-md">
            Experience
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 p-3 rounded-sm">
        {/* Cards to map */}

        {/* Cards for Education */}
        {education &&
          education.map((educ) => (
            <div
              className="w-full flex flex-col justify-center items-center rounded-sm bg-white shadow-lg lg:flex-row lg:justify-start"
              key={educ.level}
            >
              <div className="p-4">
                <img
                  className="w-[485px] h-72 rounded-sm object-cover"
                  src={educ.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-start px-4 pb-4">
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
                      <li className="list-disc">{award}</li>
                    ))}
                </ul>
              </div>
            </div>
          ))}

        {/* Cards for Work */}
        {work &&
          work.map((job) => (
            <div
              className="w-full flex flex-col justify-center items-center rounded-sm bg-white shadow-lg lg:flex-row lg:justify-start"
              key={job.level}
            >
              <div className="p-4">
                <img
                  className="w-[485px] h-72 rounded-sm object-cover"
                  src={job.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-start px-4 pb-4">
                <h2 className="mb-2 text-xl">
                  {job.level} - <span className="text-main">{job.company}</span>
                </h2>
                <h3 className="mb-2 text-md">{job.role}</h3>
                <h3 className="mb-2 text-md">{job.year}</h3>
                <h3 className="mb-2 text-md">Academic Awards</h3>
                <ul className="ml-5">
                  {job.tasks &&
                    job.tasks.map((task) => (
                      <li className="list-disc">{task}</li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Experiences;
