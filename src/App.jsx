import "./App.css";
import MainNav from "./components/nav";
import Hero from "./components/hero";
import MainAbout from "./components/about";
import MainSoftSkills from "./components/skills";
const App = () => {
  return (
    <div className="min-h-screen select-none gradient-bg pt-25 text-white">
        <MainNav />
        <Hero />
        <MainAbout />
        <MainSoftSkills />
    </div>
  );
}

export default App;