"use client";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuroraBackgroundDemo from "./landingpage";
import SidebarDemo from "./home"; // Make sure the import path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuroraBackgroundDemo />} />
        <Route path="/home" element={<SidebarDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
