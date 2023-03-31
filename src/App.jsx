import React from 'react'
import Home from './pages/homePage/Home.jsx'
import Services from './pages/servicesPage/Services.jsx'
// import About from './pages/About.jsx'
import Navbar from './pages/homePage/Navbar'
import Contact from './pages/contactPage/Contact.jsx'
import Career from './pages/careerPage/Career.jsx'
import Services_Group from './pages/servicesGroup/Services_Group.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />Home
          <Route exact path="/Services" element={<Services />} />Services
          {/* <Route exact path="/About" element={<About />} />About */}
          <Route exact path="/Contact" element={<Contact />} />Contact
          <Route exact path="/Career" element={<Career />} />Career
          <Route exact path="/Services_Group" element={<Services_Group />} />Services_Group

        </Routes>

      </BrowserRouter>
      
    </>
  )
}

export default App
