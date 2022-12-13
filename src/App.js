import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import ComposeTheory from './pages/ComposeTheory';
import Containers from './pages/Containers';
import Theory from './pages/Theory';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import Card from './components/Card';

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('loader')) {
      setLoader(false);
    } else {
      setTimeout(() => {
        setLoader(false);
      }, 6000);
    }
  }, []);

  return (
    <>
      <Router>
        {loader ? <Preloader /> : null}
        <Header
          home="Home"
          first="Docker theory"
          second="Docker compose theory"
          third="Docker containers"
        />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/docker-theory" element={<Theory />} />
          <Route path="/docker-theory/:theory" element={<Card />} />
          <Route path="/docker-compose-theory" element={<ComposeTheory />} />
          <Route path="/docker-containers" element={<Containers />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
