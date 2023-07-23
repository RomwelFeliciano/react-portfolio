import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="bg-body font-inder">
      <Nav />
      <main className="flex flex-col justify-center items-center">
        <Home />
        <Skills />
        <Experiences />
        <Projects />
      </main>
    </div>
  );
};

export default App;
