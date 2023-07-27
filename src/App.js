import React from "react";
import {  
  BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import References from './pages/References.jsx'
import Page404 from './pages/Page404.jsx';
import './global.scss';
   

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/References" element={<References />} />
          <Route path="/KreativBuero_JoachimRitter" element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>

    </>

  )
};

export default App;
