import { Link } from 'react-router-dom'
import React from "react";
import Header from '../components/Header/Header.jsx'
import './TexteUndInhalte.scss'


const Home = () => {

  
    
  return (
    <>
       <Header />
        <main>
          <div id="introTexteUndInhalte">
            <h1 id="headlineTexteUndInhalte">Texte und Inhalte</h1> 
            <p>JR - hier steht der Text, der den Bereich des Textens und redaktioneller Inhalte beschreibt</p>
            <ul>
              <Link to ="/home">Journalismus </Link> 
              <Link to ="/home">Copywriting </Link>
              <Link to ="/home">Korrespondenz </Link>
              <Link to ="/home">Übersetzungen </Link>
              <Link to ="/home">Recherchen </Link>
            </ul>
          </div>
          
          <article id="texteundinhalte1">
            <h2>Doppelpass</h2>
            <p >
            Moderner Fussball ist nicht mehr so, wie wir es kennen. Mit "wir" meine ich die Fussballgeselschaft oder zumindest die meines Alters. Erfolg wird in der heutigen Zeit anders definiert als noch vor wenigen Jahrzehneten, man mag auch sagen wie im vergangenen Jahrhundert. Es ist erstens der sportliche Erfolg ebenso wie zweitens der wirtschaftliche Erfolg, die drittens die Anerkennung eines sogenanntes Clubs definieren und den es zu bewerten gilt. Hier zeigen sich die unterschiedlichen Interessen der beteiligten Player.  
            <br /><br />
            Als erstes seien die Fans genannt, für die noch immer mit einer fast romantischen Ansatz den sprtlichen Erfolg als das Ziel ansehen, definiert durch elf Freunde, die – was immer auch kommen mag – zusammenhalten. Hier können wir schon erkennen, dass dieser romantische Ansatz kaum noch zu realisieren ist, bis in die untersten Kreisklassen. Überall da, wo Spieler durch monitäre Anreize zu einem Verein gelockt werden, wird erwarten in unserer kapitalistischen Welt diejenigen, die bezahlen immer auch einen Gegenwert, gerne als Trophäe.
            <br /><br />
            Mal ganz ehrlich: erwarten wir wirklich ein Elffreunde- und Vereinsgefühl, wenn mit Investitionen von mehr als 100 Millionen der sportliche Erfolg egal ist?
            <div>a</div>
            </p>
          </article>

          {/* <section id="homeTexte2">
            <h2>Graphics</h2>
            <ul>
              <Link to ="/home">Designkonzepte, </Link> 
              <Link to ="/home">Webdesign, </Link>
              <Link to ="/home">Styling </Link>
            </ul>
            {/* <img src={ require('../Images/KAimMohnspark_bearbeitet.jpg')} /> */}
            {/* <ul>
              <li>Qanat21</li>
              <li></li>
            </ul> 
          </section>

          <section id="homeTexte3">
            
            <h2>Visuals</h2>
            <ul>
            <Link to ="/home">Fotografie, </Link>
            <Link to ="/home">Bildbearbeitung</Link>
            </ul>
          </section>

          <section id="homeTexte4">
            <h2>Realisierung</h2>
            <ul>
              <Link to ="/home">Webprogrammierung, </Link>
              <Link to ="/home">Druckmanagement, </Link>
              <Link to ="/home">Events, </Link>
              <Link to ="/home">Lichtinstallationen</Link>
            </ul>
          </section> 

          <section id="homeTexte5">
            <h2>Consulting</h2>
            <ul> 
              <Link to ="/home">Projektconsulting, </Link>
              <Link to ="/home">Managementconsulting </Link>
            </ul>
          </section>*/}
          

          
        </main>  
    </>
    );
  };
    
    export default Home