// ALAP REACT ALKALMAZAS

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from './pages/Events';
import NavigationBar from './components/NavigationBar';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/events" element={<Events />} />
        
      </Routes>
    </Router>
  );
}

export default App;
