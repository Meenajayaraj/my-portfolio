import React from "react";
import NavigationBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <NavigationBar />
    <Home />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  </div>
);

export default App;
