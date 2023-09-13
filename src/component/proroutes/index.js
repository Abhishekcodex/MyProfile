import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../dashboard/home'
import About from '../dashboard/about'
import Contact from '../dashboard/contact'
import Educaion from '../dashboard/education'
import Skill from '../dashboard/skill'
import Experience from '../dashboard/experience'
function ProRoutes() {
  return (
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Educaion />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>
  )
}

export default ProRoutes;