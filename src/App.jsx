import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import AboutUs from './pages/AboutUs'
import OurTeam from './pages/OurTeam'
import OurStory from './pages/OurStory'
import Donations from './pages/Donations'
import SubmitProject from './pages/SubmitProject'
import ProjectGallery from './pages/ProjectGallery'

function App() {
  return (
    <Router basename="/sports-forward">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/request-project" element={<SubmitProject />} />
        <Route path="/gallery/:projectId" element={<ProjectGallery />} />
      </Routes>
    </Router>
  )
}

export default App