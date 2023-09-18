import { Link } from 'react-router-dom'
import React from "react";
//import JoachimRitter from '../components/JoachimRitter.js'
import Header from '../components/Header/Header.jsx'
import './Home.scss'
import ImageSlider from '../components/SliderHome/SliderHome.js'
//import { SectionsContext } from "../context/SectionsContext.js";
/* import KA_bearbeitet from'../Images/KAimMohnspark_bearbeitet.jpg'
import KA_unbearbeitet from'../Images/KAimMohnspark.jpg' */


const Home = () => {

  const images = [
    {src: require('../Images/KAimMohnspark.jpg'), alt:'image1'},
    {src: require('../Images/KAimMohnspark_bearbeitet.jpg'), alt:'image2'},
    {src: require('../Images/KA_Mohnspark_2_0.jpg'), alt:'image3'},
    {src: require('../Images/KA_Mohnspark_2_2.jpg'), alt:'image4'},
    {src: require('../Images/KA_Mohnspark_2_3.jpg'), alt:'image5'},
    {src: require('../Images/KA_Mohnspark_2_0.jpg'), alt:'image3'},
    //{src: require('../Images/KA_Mohnspark_2_1.jpg'), alt:'image5'},
    //{src: KA_bearbeitet , alt:'image3'}
  ];
    
  return (
    <>
       <Header />
        <main>
          <div id="introHome">
            <h1 id="headlineHome">KreativBuero : Joachim Ritter</h1> 
            <p className ="typewriterkeys" id="JRHome">JR</p>
            <h2 className="motto">HI : 40 years of <br />Human Intelligence</h2>
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
            <p id="textHintergrund">
              Das Projekt nimmt sich der hochaktuellen Problematik des Süßwassermanagements an, welche in Folge des Klimawandels und dem Verlust von Sickerflächen bzw. zunehmende versiegelte Flächen aktuell wie auch in absehbarer Zeit an Bedeutung gewinnt. Der Lösungsansatz behandelt ein grundlegendes Management von Süßwasser unter Berücksichtigung von Regenfällen einerseits und Dürreperioden andererseits und damit primär von Extremwetterereignissen, wie sie aktuell und in absehbarer Zukunft mehr und mehr erwartet werden. Inhaltlich bedeutend sind der Lösungsansatz und die Überlegungen insbesondere für die am 14. März 2023 vom Bundesministerium veröffentlichte „Nationale Wasserstrategie“, die zwar Ziele definiert, aber es an konkreten umsetzbaren Lösungen mangeln lässt. Zu gleichen Überlegungen und daraus resultierenden Absichten kommt die UNO-Wasserkonferenz, die vom 22. – 24. März 2023 in New York stattfand. Weitere internationale Konferenzen finden in naher Zukunft statt, World Water Week, Stockholm/SE, 20. – 24. August 2023. Die Geschäftsidee bietet Konzepte für aktuelle Problemstellungen im Städtebau, in der Landwirtschaft und für Industrieprojekte, wie auch für die Hochwasserproblematik und stark schwankende Pegelstände in Flussläufen und Grundwasserstrukturen. Auch werden als Nebeneffekt die Möglichkeit der Gewinnung alternativer Grüner Energie innerhalb des Systems eingebunden. Diese Möglichkeit ergibt sich in der Konsequenz aus der grundlegenden Konzeption der Wasserführung. Ein weiteres Element ist die Möglichkeit, Klimatisierungseffekte im städtischen Raum durch unterirdische Wasserführung zu erzielen. Ob Thermoenergie / Kühlung in das System integriert werden kann, ist Gegenstand darüber hinaus gehender Untersuchungen. Die Idee basiert auf Erfahrungen und Lösungen antiker Kulturen, wie dem Iran bereits vor mehr als 3000 Jahren, wie auch im späteren Italien, Spanien, China und Marokko. Diese Systeme haben heute noch Gültigkeit und sind aktiv im Betrieb. Aktuell nutzen Städte wie London oder Tokio den Grundgedanken dieses Systems des Wassermanagements. Unterirdisch werden Wasserflüsse definiert und teilweise in ebenso unterirdischen Rückhaltebecken gesammelt. <div>a</div>
            </p>
          </section>

          <section id="homeTexte2">
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
            </ul> */}
          </section>

          <section id="homeTexte3">
            <div id="imageSlider">< ImageSlider  images={ images } intervalTime={4000}  /></div>
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
            {/* <ul>
              <li>A.Li.Ce - Alingsas Lighting Center, Alingsas Kommun/SE</li>
              <li>Alströmer Magasinet - Museumskonzeptionierung, Alingsas/SE</li>
              <li>Gut Lohhof - Neukonzeptionierung eines privaten Freilichtmuseums, Welver/DE</li>
              <li>Professional Lighting Designers' Association e.V - Strategie zur Entwicklung eines Berufsbildes</li>
            </ul> */}
          </section>
          
          {/* <section id="homeTexte6">
            <div id="imageSlider">< ImageSlider  images={ images } intervalTime={4000}  /></div>
            <h2>Visuals</h2>
            <ul>
            <Link to ="/home">Fotografie, </Link>
            <Link to ="/home">Bildbearbeitung</Link>
            </ul>
          </section> */}

          <div id="infoHome">
            <h1 id="headlineInfome">KreativBuero : Joachim Ritter</h1> 
            <p className ="typewriterkeys" id="JRInfoHome">JR</p>
            <h2 className="motto">HI : 40 years of <br />human intelligence</h2>
          </div>
        </main>  
    </>
    );
  };
    
    export default Home