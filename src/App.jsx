import "./App.css";
import MainNav from "./components/nav";
import Hero from "./components/hero";
import { useState } from "react";
const App = () => {
  return (
    <div className="min-h-screen select-none gradient-bg pt-25 text-white">
        <MainNav />
        <Hero />
    </div>
  );
}

export default App;