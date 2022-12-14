import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Zak from './pages/Zak';
import Header from './components/Header';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/ZAKI" element={<Zak />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
