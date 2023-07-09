import React from "react";

const Button = (props) => {
  return (
    <button className="bg-main py-2 px-6 rounded md:ml-8 hover:bg-second hover:text-white duration-500">
      {props.children}
    </button>
  );
};

export default Button;
