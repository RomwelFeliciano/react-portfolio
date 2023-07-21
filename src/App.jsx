import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";

const App = () => {
  return (
    <div className="bg-body font-inder">
      <Nav />
      <main className="flex flex-col justify-center items-center">
        <Home />
        <Skills />
        <Experiences />
      </main>
    </div>
  );
};

export default App;
