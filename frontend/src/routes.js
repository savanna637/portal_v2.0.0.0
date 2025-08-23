

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./pages/Events";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Events />} />
      </Routes>
    </Router>
  );
}
