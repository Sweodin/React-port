import React from "react";
import Welcome from "../components/sections/Welcome";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Blog from "../components/sections/Blog/Blog";

const Home: React.FC = () => {
  return (
    <>
      <Welcome />
      <About />
      <Skills />
      <Blog />
      {/* Add other sections here (Projects, Contact) */}
    </>
  );
};

export default Home;
