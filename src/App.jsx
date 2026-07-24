import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Photos from "./components/Photos";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photos/:slug" element={<Photos />} />
        </Routes>
    );
}

export default App;