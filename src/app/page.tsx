"use client";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuroraBackgroundDemo from "./landingpage";
 // Make sure the import path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuroraBackgroundDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
