import React from "react";
import Welcome from "../components/sections/Welcome";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Blog from "../components/sections/Blog/Blog";
import Projects from "../components/sections/Projects/Projects";
import Contact from "../components/sections/Contact";

const Home: React.FC = () => {
  return (
    <>
      <Welcome />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      {/* Add other sections here (Projects, Contact) */}
    </>
  );
};

export default Home;
