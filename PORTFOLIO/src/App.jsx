import './App.css'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  })
  return (
    <main className="font-jetbrains-mono bg-[#282c33]">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
};

export default App;
