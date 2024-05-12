//IMPORTS
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
