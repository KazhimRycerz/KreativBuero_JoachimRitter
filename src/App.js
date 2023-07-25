import React from "react";
import {  
  BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import PersonalData from './pages/PersonalData.jsx'
import Motivation from './pages/Motivation.jsx'
import Career from './pages/Career.jsx'
import Experience from './pages/Experience.jsx'
import References from './pages/References.jsx'
import MyFuture from './pages/MyFuture.jsx'
import ContactAndSocialMedia from './pages/ContactAndSocialMedia.jsx'
import Page404 from './pages/Page404.jsx';
import './App.scss';
   

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/PersonalData" element={<PersonalData />} />
          <Route path="/Motivation" element={<Motivation />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/References" element={<References />} />
          <Route path="/MyFuture" element={<MyFuture />} />
          <Route path="/ContactAndSocialMedia" element={<ContactAndSocialMedia />} />
          <Route path="/KreativBuero_JoachimRitter" element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>

    </>

  )
};

export default App;
