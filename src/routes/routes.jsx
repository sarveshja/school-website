import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Academics from '../components/Academics/Academics';
import Admissions from '../components/Admissions/Admissions';
import Faculty from '../components/Faculty/Faculty';
import Students from '../components/Students/Students';
import Gallery from '../components/Gallery/Gallery';
import Contact from '../components/Contact/Contact';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/academics" element={<Academics />} />
    <Route path="/admissions" element={<Admissions />} />
    <Route path="/faculty" element={<Faculty />} />
    <Route path="/students" element={<Students />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRoutes;
