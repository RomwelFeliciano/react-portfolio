import React from "react";
import { TypeAnimation } from "react-type-animation";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

const Home = () => {
  const profile = {
    name: "Romwel Reyes Feliciano",
    description:
      "A front-end developer who is a Bataan Peninsula State University graduate and is currently an intern at Kloudtech. I continued to acquire various web designs and layouts and the necessary programming skills every day at that time. I also concentrate on honing my proficiency with popular frameworks and libraries.",
  };

  return (
    <>
      <div className="w-full min-h-screen items-center grid grid-rows-1 grid-cols-1 lg:grid-cols-[10%_40%_50%] px-10">
        <div className="w-[200px] hidden lg:flex md:flex-col gap-10 text-3xl justify-center items-center">
          <a href="#FB" target="_blank">
            <BsFacebook className="cursor-pointer hover:text-[#4267B2] hover:scale-125 duration-300" />
          </a>
          <a href="#LI" target="_blank">
            <BsLinkedin className="cursor-pointer hover:text-[#0077B5] hover:scale-125 duration-300" />
          </a>

          <a href="#GH" target="_blank">
            <BsGithub className="cursor-pointer hover:text-[#1D1D1D] hover:scale-125 duration-300" />
          </a>
        </div>
        <div className="lg:mt-0 mt-24 relative mx-auto bg-gradient-to-b from-[#ffffff] rounded-full md:w-80 md:h-80 w-72 h-72 overflow-hidden">
          <img className="relative object-cover" src="./profile.png" alt="" />
        </div>
        <div className="xl:w-100 xl:w-3/4 lg:text-left text-center">
          <h2 className="md:text-5xl text-4xl font-bold text-main lg:pt-0 pt-5">
            {profile.name}
          </h2>
          <h3 className="typed flex lg:justify-start justify-center text-2xl gap-2 font-normal text-second md:text-4xl pt-2">
            I'm a
            <TypeAnimation
              sequence={[
                "Web Developer",
                2000,
                "UI/UX Designer",
                2000,
                "Gamer",
                2000,
              ]}
              wrapper="div"
              cursor={false}
              repeat={Infinity}
            />
          </h3>
          <p className="font-normal leading-7 pt-2">{profile.description}</p>
        </div>
        <div className="lg:hidden flex gap-10 text-3xl justify-center items-center py-10 lg:py-0">
          <a href="#FB" target="_blank">
            <BsFacebook className="cursor-pointer hover:text-[#4267B2] hover:scale-125 duration-300" />
          </a>
          <a href="#LI" target="_blank">
            <BsLinkedin className="cursor-pointer hover:text-[#0077B5] hover:scale-125 duration-300" />
          </a>

          <a href="#GH" target="_blank">
            <BsGithub className="cursor-pointer hover:text-[#1D1D1D] hover:scale-125 duration-300" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
