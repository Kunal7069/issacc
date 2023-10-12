import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Clubs from "./components/Clubs";
import About from "./components/About";
import Events from "./components/Events";
import "./App.css"; // Move this import after your component imports
function App() {
  return (
    <>
      <Router>
        <Home />
        <Routes>
          <Route path="/Header" element={<Header />} />
          <Route path="/About" element={<About />} />
          <Route path="/Clubs" element={<Clubs />} />
          <Route path="/Events" element={<Events />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
