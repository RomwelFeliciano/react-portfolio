import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="bg-body font-inder">
      <Nav />
      <main className="flex flex-col justify-center items-center">
        <Home />
        <Skills />
      </main>
    </div>
  );
};

export default App;
