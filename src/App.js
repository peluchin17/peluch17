import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Client/Screens/Home';
import About from './Client/Screens/About';
import Tokenomics from './Client/Screens/Tokenomics';
import Airdrop from './Client/Screens/Airdrop';
import Admin from './Admin/Screens/Admin';
import NavigationBar from './Client/components/NavigationBar';
import Footer from './Client/Screens/footer';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tokenomics" element={<Tokenomics />} />
        <Route path="/airdrop" element={<Airdrop />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer className="footer" />
    </Router>
  );
}

export default App;