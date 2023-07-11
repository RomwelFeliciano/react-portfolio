import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="bg-body font-poppins">
      <Nav />
      <main className="">
        <Home />
      </main>
    </div>
  );
};

export default App;
