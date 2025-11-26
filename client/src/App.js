import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Sources from './pages/Sources';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/sources" element={<Sources />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;