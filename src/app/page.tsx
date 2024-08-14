"use client";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuroraBackgroundDemo from "./landingpage";
import Home from "./home";
 // Make sure the import path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuroraBackgroundDemo />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
