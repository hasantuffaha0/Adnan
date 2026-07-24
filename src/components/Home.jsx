import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MainNav from "./nav";
import Hero from "./hero";
import MainAbout from "./about";
import MainSoftSkills from "./skills";
import Cert from "./cert";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./developer";

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

const Home = () => {
    return (
        <div className="min-h-screen select-none gradient-bg pt-25 text-white">
            <Animat />
            <MainNav />
            <Hero />
            <MainAbout />
            <MainSoftSkills />
            <Cert />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;