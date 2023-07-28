import { NavLink } from 'react-router-dom'
import React, { useState } from "react";
import './Header.scss'





const Header =()=>{
   
      const [isOpen, setIsOpen] = useState(false);
    
      const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    
   return(
      <> 
         <header>
          <nav>
            <ul>
                <li><NavLink to ="/texte">Texte</NavLink></li>
                <li><NavLink to ="/graphics"> Graphics</NavLink></li>
                <li><NavLink to ="/visuals"> Visuals</NavLink></li>
                <li><NavLink to ="/konzepte"> Konzepte</NavLink></li>
                <li><NavLink to ="/realisierung"> Realisierung</NavLink></li>
                <li><NavLink to ="/consulting"> Consulting</NavLink></li>
                
            </ul>
          </nav>
         <p>KreativBuero : Joachim Ritter</p>
         <div className ="typewriterkeys" id="JRHeader">JR</div>
         <div className="hamburger-menu">
            <div className={`menu-icon ${isOpen ? "open" : ""}`} id="hamburgerHeader" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            </div>
            {/* {isOpen && (
            <ul className="menu-items">
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
            </ul>
            )} */}
            <ul className={`${isOpen ? "menuItemsOpen" : "menuItemsClosed"}`}>
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
            </ul>
         </div>
        </header>
      </>
   )
}
export default Header