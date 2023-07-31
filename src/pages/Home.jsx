import { Link } from 'react-router-dom'
//import JoachimRitter from '../components/JoachimRitter.js'
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
            <ul>
              <Link to ="/home">Journalismus, </Link> 
              <Link to ="/home">Copywriting, </Link>
              <Link to ="/home">Korrespondenz, </Link>
              <Link to ="/home">Übersetzungen, </Link>
              <Link to ="/home">Recherchen </Link>
            </ul>
            <p id="textHintergrund">an, welche in Folge des Klimawandels und dem Verlust von Sickerflächen bzw. zunehmende versiegelte Flächen aktuell wie auch in absehbarer Zeit an Bedeutung gewinnt. Der Lösungsansatz behandelt ein grundlegendes Management von Süßwasser unter Berücksichtigung von Regenfällen einerseits und Dürreperioden andererseits und damit insbesondere von Extremwetterereignissen, wie sie aktuell und in absehbarer Zukunft mehr und mehr erwartet werden. Inhaltlich bedeutend sind der Lösungsansatz und die Überlegungen insbesondere für die am 14. März 2023 vom Bundesministerium veröffentlichte „Nationale Wasserstrategie“, die zwar Ziele definiert, aber es an konkreten umsetzbaren Lösungen mangeln lässt. Zu gleichen Überlegungen und daraus resultierenden Absichten kommt die UNO-Wasserkonferenz, die vom 22. – 24. März 2023 in New York stattfand. Weitere internationale Konferenzen finden in naher Zukunft statt  World Water Week, Stockholm/SE, 20. – 24. August 2023.</p>
          </section>
          <section id="homeTexte2">
            <h2>Graphics</h2>
            <ul>
              <Link to ="/home">Designkonzepte, </Link> 
              <Link to ="/home">Webdesign, </Link>
              <Link to ="/home">Styling </Link>
            </ul>
            {/* <ul>
              <li>Qanat21</li>
              <li></li>
            </ul> */}
          </section>
          {/* <section className="info">
            <div className ="typewriterkeys" id="JRHome">JR</div>
          </section> */}
          <section id="homeTexte3">
            <h2>Visuals in modernster Form</h2>
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
            {/* <ul>
              <li>A.Li.Ce - Alingsas Lighting Center, Alingsas Kommun/SE</li>
              <li>Alströmer Magasinet - Museumskonzeptionierung, Alingsas/SE</li>
              <li>Gut Lohhof - Neukonzeptionierung eines privaten Freilichtmuseums, Welver/DE</li>
              <li>Professional Lighting Designers' Association e.V - Strategie zur Entwicklung eines Berufsbildes</li>
            </ul> */}
          </section>
        </main>
        
    </>
)

    export default Home