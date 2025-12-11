import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import OurStory from './pages/OurStory';
import Donations from './pages/Donations';
import SubmitProject from './pages/SubmitProject';
import ChandalaProject from './pages/ChandalaProject';
import HoopsForGrowth from './pages/HoopsForGrowth';
import CheckmateForChange from './pages/CheckmateForChange';
import FieldsOfOpportunity from './pages/FieldsOfOpportunity';
import ArcheryForAll from './pages/ArcheryForAll';
import OdishaOpportunities from './pages/OdishaOpportunities';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/request-project" element={<SubmitProject />} />
        <Route path="/chandala" element={<ChandalaProject />} />
        <Route path="/hoops" element={<HoopsForGrowth />} />
        <Route path="/checkmate" element={<CheckmateForChange />} />
        <Route path="/field" element={<FieldsOfOpportunity />} />
        <Route path='/archery' element={<ArcheryForAll />} />
        <Route path='/odisha' element={<OdishaOpportunities />} />
      </Routes>
    </Router>
  );
}

export default App;