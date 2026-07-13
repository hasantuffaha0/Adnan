import "./App.css";
import MainNav from "./components/nav";
import { useEffect } from "react";
import Hero from "./components/hero";
import MainAbout from "./components/about";
import MainSoftSkills from "./components/skills";
import AOS from "aos";
import "aos/dist/aos.css";

const Animat = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      disable: () => window.innerWidth <= 768,
    });
  }, []);

  return null;
};

const App = () => {
  return (
    <div className="min-h-screen select-none gradient-bg pt-25 text-white">
        <Animat />
        <MainNav />
        <Hero />
        <MainAbout />
        <MainSoftSkills />
    </div>
  );
}

export default App;