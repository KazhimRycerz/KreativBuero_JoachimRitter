import { NavLink, Link } from 'react-router-dom'
import React, { useContext} from "react";
import { SectionsContext } from "../../context/SectionsContext.js";
import './Header.scss'

const Header =()=>{
   //const { scrollPosition } = useContext(SectionsContext);
   const { headerPosition } = useContext(SectionsContext);
   const { isOpen, setIsOpen } = useContext(SectionsContext);
   
   /* const toggleMenu = () => {
      setIsOpen(!isOpen);
   }; */
    
   return(
      <header id={ headerPosition } >
         <div id="headerBox">
          <nav>
            <ul>
                <li><NavLink to ="/texteundinhalte">Texte</NavLink></li>
                <li><NavLink to ="/graphics"> Graphics</NavLink></li>
                <li><NavLink to ="/visuals"> Visuals</NavLink></li>
                {/* <li><NavLink to ="/konzepte"> Konzepte</NavLink></li> */}
                <li><NavLink to ="/realisierung"> Realisierung</NavLink></li>
                <li><NavLink to ="/consulting"> Consulting</NavLink></li>
                <li><NavLink to ="/home"> home</NavLink></li>
            </ul>
          </nav>
         <div>
            <p><NavLink to ="/home">KreativBuero : Joachim Ritter</NavLink></p>
            <div>
               {/* <p>Aktuelle Scroll-Position: {scrollPosition}</p>
               <span style={{ height: '2000px' }}></span> */}
            </div>
         </div>
         <div className ="typewriterkeys" id="JRHeader">JR</div>
         <div className="hamburger-menu">
            <div className={`menu-icon ${isOpen ? "open" : ""}`} id="hamburgerHeader" 
            //onClick={toggleMenu} 
            onClick={() => setIsOpen(!isOpen)}>
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
         </div>
        </div>
            <ul className={`${isOpen ? "menuItemsOpen" : "menuItemsClosed"}`}>
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
               <li><Link to ="/References">Texte</Link></li>
            </ul>
      </header>
   )
}
export default Header