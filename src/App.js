import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Zak from './pages/Zak';
import Hela from './pages/Hela';
import Ida from './pages/Ida';
import Header from './components/Header';
import Memory from './components/Memory';
import Puzzle from './components/Puzzle';

function App() {

  return (
    <>
      <Router basename='/' >
        <Header />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/zaki" element={<Zak />} />
        <Route path="/hela" element={<Hela />} />
        <Route path="/ida" element={<Ida />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/puzzle" element={<Puzzle />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
