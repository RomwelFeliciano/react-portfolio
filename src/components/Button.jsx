import React from "react";

const Button = (props) => {
  return (
    <button className="bg-main p-3 text-lg rounded-full md:ml-8 hover:bg-accent hover:text-main duration-500">
      {props.children}
    </button>
  );
};

export default Button;
