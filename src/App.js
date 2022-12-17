import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Zak from './pages/Zak';
import Hela from './pages/Hela';
import Ida from './pages/Ida';
import Header from './components/Header';
import Memory from './components/Memory';
import Puzzle from './components/Puzzle';
import MathRace from './components/MathRace';

const App = () => {
  let path = window.location.hostname === 'localhost' ? '/' : "";
  return (
    <>
      <Router basename="/some_web">
        <Header />
        <Routes>
          <Route exact path={path} element={<Home />} />
          <Route path="/zaki" element={<Zak path={path} />} />
          <Route path="/hela" element={<Hela />} />
          <Route path="/ida" element={<Ida />} />
          <Route path="/memory" element={<Memory />} />
          <Route path="/puzzle" element={<Puzzle />} />
          <Route path="/ida/math-race" element={<MathRace />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
