import React, { useState } from "react";
import Button from "./Button";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Skills", link: "/" },
    { name: "Experience", link: "/" },
    { name: "Projects", link: "/" },
    { name: "Contact", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex justify-between items-center">
          <span>Logo ni Romwel</span>

          <div
            className="text-3xl right-8 top-6 cursor-pointer md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <AiOutlineClose /> : <HiOutlineMenuAlt3 />}
          </div>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Resume</Button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
