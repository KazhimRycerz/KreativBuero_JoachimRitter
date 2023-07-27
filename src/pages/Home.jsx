import { Nav } from 'react-router-dom'
import JoachimRitter from '../components/JoachimRitter.js'
import Header from '../components/Header/Header.js'
import './Home.scss'

const Home = () => (
    <>
       <Header />
        <main>
          <div id="introHome">
            <h1 id="headlineHome">KreativBuero : Joachim Ritter</h1> 
            <div className ="typewriterkeys" id="JRHome">JR</div>
            <h2 id="motto">HI : 40 years of human intelligence</h2>
          </div>
          <section id="homeTexte1">
            <h2>Texte und Inhalte</h2>
            <p>Journalismus, Copywriting, Korrespondenzen, Übersetzungen, Recherchen</p>
          </section>
          <section id="homeTexte2">
            <h2>Graphics</h2>
            <p>Designkonzepte, Webdesign, Styling</p>
            <ul>
              <li>Qanat21</li>
              <li></li>
            </ul>
          </section>
          <section id="homeTexte3">
            <h2>Visuals in modernster Form</h2>
            <p>Fotografie, Bildbearbeitung</p>
          </section>
          <section id="homeTexte4">
            <h2>Realisierung</h2>
            <p>Webprogrammierung, Druckmanagement, Events, Lichtinstallationen</p>
          </section>
          <section id="homeTexte5">
            <h2>Consulting</h2>
            <p>Projektconsulting, Managementconsulting</p>
            <ul>
              <li>A.LI.CE - Alingsas Lighting Center, Alingsas Kommun/SE</li>
              <li>Alströmer Magasinet - Museumskonzeptionierung, Alingsas/SE</li>
              <li>Gut Lohhof - Neukonzeptionierung eines privaten Freilichtmuseums, Welver/DE</li>
              <li>Professional Lighting Designers' Association e.V - Strategie zur Entwicklung eines Berufsbildes</li>
            </ul>
          </section>
        </main>
        
    </>
)

    export default Home