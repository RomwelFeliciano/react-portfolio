import React, { useState } from "react";
import Button from "./Button";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BsMoonStarsFill } from "react-icons/bs";

const Nav = () => {
  let Links = [
    { name: "Home", link: "#Home" },
    { name: "Skills", link: "#Skills" },
    { name: "Experience", link: "#Experience" },
    { name: "Projects", link: "#Projects" },
    // { name: "Contact", link: "#Contact" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-white dark:bg-black py-4 md:px-10 px-7 transition-all duration-500 ease-in">
        <div className="font-bold text-2xl cursor-pointer flex justify-between items-center">
          <a href="#Home">
            <img className="w-14" src="logo.png" alt="" />
          </a>

          <div
            className="text-3xl right-8 top-6 cursor-pointer md:hidden dark:text-white transition-all duration-300"
            onClick={() => setOpen(!open)}
          >
            {open ? <AiOutlineClose /> : <HiOutlineMenuAlt3 />}
          </div>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white dark:bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 dark:text-white hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>
            <BsMoonStarsFill />
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
