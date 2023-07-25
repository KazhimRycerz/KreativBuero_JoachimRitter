import { NavLink } from 'react-router-dom'
import JoachimRitter from '../components/JoachimRitter.js'
import './Career.scss'
import BuchmitLicht from '../Images/buchMitLicht.png'
import Basis from '../Images/1200px-Fingerprint_picture.png'
import Third from '../Images/IMG_3557.PNG'

const Career = () => (
  <div className="bg">
    <img className="bgimage" alt="" src="../Images/IMG_1839.PNG"/>
    <div className="content">
      <div className="box1"></div>
      <div className="box2">
        <h1 >Professional career</h1>
        
      </div>
      <header className="box3">
      <JoachimRitter />
      </header>
      <div className="box4">
        <div>
          <img id="basis" src={Basis} alt="" />
          <img className="third" src={require('../Images/IMG_3557.PNG')} alt="" />
        </div>
      </div>  
      <div className = "box5" id="box5ca">    
        <article className = "article_ca">
          <h2>The way I went</h2>
          <div id="career_JR">
            <h4>Further education at the DCI - Digital Career Institute, Berlin/DE</h4>
            <p> 09/2021 - 11/2021 </p>
            <p> Basic course on webdesign, AWS, Social Media Marketing</p>
            <p> 09/2021 - 11/2021 </p>
            <p> Full stack webdesign and webdevelopment -> frontend, backend</p>
            <p> 12/2021 - 12/2022 </p>
            <img className="Trenner" alt="" src={Basis} />
            <h4>Publisher, Editor-in-Chief and Owner of VIA-Verlag</h4>
            <p> 04/1994 - today <br />
            PLD - Professional Lighting Design Magazine, PLDC - Professional Lighting Design Convention, publishing of specialized books, educational events - working globally
            </p>
            <img className="Trenner" alt="" src={Basis} />
            <h4>Management and redevelopment of an open air museum "Gut Lohhof"</h4>
            <p> 01/2019 - 05/2020 <br />
            strategic work, conception, redevelopment and running the private museum including running a cafe and staging professional, private and public events.
            </p>
            <img className="Trenner" alt="" src={Basis} />
            <h4>Management and redevelopment of the "Alströmer Magasinet" in Alingsås/S</h4>
            <p> 01/2010 - 12/2012 <br />
            strategic work, conception, redevelopment and running a private museum on lighting design, including offering educational events
            </p>
            <img className="Trenner" alt="" src={Basis} />
            <h4>Freelance writer, copywriter and translator</h4>
            <p>Buero Ritterstern 08/1990 - still continiuing <br />
            Journalist, texts, translations into German and English, conceptionist, strategic concepts</p>
            <img className="Trenner" alt="" src={Basis} />
            <h4>Initiator and founding member of PLDA e.V. - Professional Lighting Designers' Association</h4>
            <p>08/1994 - 05/2011<br />
            Creative and strategic mind behind PLDA - a global association for professional lighting designers in architecture. Board member and finacial manager from 1994 - 2008, FPLDA, Fellow member from 2005. Involved in the development of the PLDA educational workshops from 1998 - 2012.</p>
            <img className="Trenner" alt="" src={Basis} />
            <h4>Eitorial staff</h4>
            <p>Bertelsmann Fachzeitschriften 02/1985 - 01/1994 <br />
            Junior editor of the DBZ - Architectural magazine, Computer Spezial, Editor-in-Chief of Architecture &amp; Light magazine and development of new fields for magazines</p>
            <img className="Trenner" alt="" src={Basis} />
            <h4>Basic education</h4>
            <p>Bertelsmann AG 02/1983 - 01/1985 <br />
            Voctional business school. <br />Degree: Verlagskaufmann</p>
          </div>
        </article>
      </div>
      <nav className="box6">
        <ul>
          <li><NavLink to ="/Home" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >home /<br /> fingerprint</NavLink></li>
          <li><NavLink to ="/PersonalData" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >personal data</NavLink></li>
          <li><NavLink to ="/Motivation" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >philosophy / <br />motivation</NavLink></li>
          <li className="career">carrer / <br />my way...</li>
          <li><NavLink to ="/Experience"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >experience and <br />professional <br />impact</NavLink></li>
          <li><NavLink to ="/References"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >references</NavLink></li>
          <li><NavLink to ="/MyFuture"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >my future</NavLink></li>
          <li><NavLink to ="/ContactAndSocialMedia" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >contact and <br />social media</NavLink></li>
        </ul>
      </nav>
      <div className="box7">
      <figure><img id="buchMitLicht" src={BuchmitLicht} alt="" /></figure>
        <figure><img id="nn2" src={BuchmitLicht} alt="" /></figure>
        <figure><img id="nn3" src={BuchmitLicht} alt="" /></figure>
        <figure><img id="nn4" src={BuchmitLicht} alt="" /></figure>
        <figure><img id="nn5" src={BuchmitLicht} alt="" /></figure>
      </div>
      <div className="box8"></div>
      <div className="box9"></div>
      <footer className="box10">&copy; Joachim Ritter</footer>   
    </div>
  </div>
  )

    export default Career