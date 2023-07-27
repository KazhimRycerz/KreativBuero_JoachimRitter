import { NavLink, Nav } from 'react-router-dom'
import './Header.scss'


const Header =()=>{
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
        </header>
      </>
   )
}
export default Header