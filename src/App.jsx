import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppBar from "./Components/AppBar/AppBar";
import Home from "./Components/Portfolio/Home";
import Services from "./Components/Services/Services";
import Resume from "./Components/Resume/Resume";
import ExperienceSec from "./Components/Resume/SideSec/ExperienceSec/ExperienceSec";

function App() {
  return (
    <>
      <Router>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/experience" element={<ExperienceSec />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
