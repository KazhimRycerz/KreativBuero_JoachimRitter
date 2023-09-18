import React from "react";
import {  
  BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import TexteUndInhalte from './pages/TexteUndInhalte.jsx'
import Doppelpass from './pages/Doppelpass.jsx'
import References from './pages/References.jsx'
import Page404 from './pages/Page404.jsx';
import './global.scss';
   

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/texteundinhalte" element={<TexteUndInhalte />} />
          <Route path="/doppelpass" element={<Doppelpass />} />
          <Route path="/references" element={<References />} />
          <Route path="/KreativBuero_JoachimRitter" element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>

    </>

  )
};

export default App;
