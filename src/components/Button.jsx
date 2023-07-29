import React from "react";
import { useState, useEffect } from "react";

const Button = (props) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="bg-main p-3 text-lg rounded-full md:ml-8 hover:bg-accent hover:text-main duration-500"
      onClick={handleDarkMode}
    >
      {props.children}
    </button>
  );
};

export default Button;
