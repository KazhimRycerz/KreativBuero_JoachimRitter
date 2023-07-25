import { NavLink } from 'react-router-dom'
import JoachimRitter from '../components/JoachimRitter.js'
import './Experience.scss'
import BuchmitLicht from '../Images/buchMitLicht.png'
import Basis from '../Images/1200px-Fingerprint_picture.png'
import DCIZertifikatOK from '../Images/Zertifikat_DCI_Joachim Ritter.jpg'


const Experience = () => (
  <div className="bg">
    <img className="bgimage" src="../Images/IMG_1839.PNG" alt=""/>
    <div className="content">
      <div className="box1"></div>
      <div className="box2">
        <h1 >Experience and <br />professional impact</h1>
      </div>
      <header className="box3">
      <JoachimRitter />
      </header>
      <div className="box4">
        <div>
          <img id="basis" src={Basis} alt="" />
          <img className="fifth" src={require('../Images/IMG_3559.PNG')} alt="" />
        </div>
      </div>  
      <div className="box5" id= "box5ei" >
           <article className="article_ei">
             <h2>Professional fingerprint in detail</h2>
              <div id="experiences_JR">
                  <div>
                    <h4> Working experience</h4>
                      <li> 40 years of journalism and publishing trade magazines and books</li>
                      <li> Graphic concepts</li>
                      <li> Photography</li>
                      <li> Translating: German -> English / English -> German</li>
                      <li> Strategic work and redevelopment for private museums</li>
                      <li> Professional management of more than 100 educational and social events, including budgets from 5,000 to 2.1 Million €</li>
                      <li> Giving papers worldwide on architrecture and lighting design</li>
                    
                  </div>
                  <img className="Trenner" alt="" src={Basis} />
                  <div>
                    <h4>Market impact</h4>
                    <li> PLDA e.V, founded as European Lighting Designers' Association was the first international association of a profession not existing. By strategic activities the profession is now acknowledged in the architectural market.  </li>
                    <li>First public international educational workshops in lighting design / Alingsås/SE</li>
                    <li> Created the largest first convention on professional lighting design wordlwide. PLDC developed to the most important trendsetting event with 2100 attendees in Paris 2017. PLDC was staged in London/GB, Berlin/DE, Madrid/ES, Copenhagen/DK, Rom/IT, Paris/FR, Ingapore/SG and Rotterdam/NL</li>
                  </div>
                  <img className="Trenner" alt="" src={Basis} />
                  <div>
                    <h4> Software knowhow</h4>
                    <li> MS Office  --> professional</li>
                    <li> Backend programming MS Access --> experienced</li>
                    <li> MS Project --> common understanding</li>
                    <li> QuarkXPress, Adobe Indesign, Photoshop and similar Apps --> experienced</li>
                    <li> Lexware --> experienced</li> 
                    <h4>Webdevelopment</h4>
                    <li> webdesign: HTML5, CSS, Sass, Java Script, React, Node JS, MongoDB, Mongoose --> awaiting practical cases </li> 
                    <li> loved add ons / frameworks / libraries: Bootstrap, GoJS, Font Awesome, Ionic --> awaiting practical cases </li> 
                    <li> helpers: Canva Colors, CSS gradient, Clippy,  --> ready for practical cases </li> 
                    <li> professionality: GitHub, Heroku, Slack, Brello --> ready for practical cases </li> 
                    <li> Website Builders: Wix, WordPress</li> 
                    <li> on my list to explore next: MySQL, React Native, animate.css, TypeIt, Animated Transition Effects</li>
                  </div>
                  <img className="Trenner" alt="" src={Basis} />
                  <div>
                    <h4> Hardware knowhow / operating systems</h4>
                    <li> Apple --> OS</li>
                    <li> Windows --> Windows 95 until Windows 10</li>
                    <li> Linux --> Ubuntu</li>
                    <li> Networks --> basic understanding</li>                  
                  </div>
                  <img className="Trenner" alt="" src={Basis} />
                  <div>
                    <h4>Lanuage skills</h4>
                    <li> German --> native language</li>
                    <li> English --> full professional proficiency</li>
                  </div>       
              </div>
              
              
          </article> 
      </div>
      <nav className="box6">
        <ul>
          <li><NavLink to ="/Home" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >home /<br /> fingerprint</NavLink></li>
          <li><NavLink to ="/PersonalData" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >personal data</NavLink></li>
          <li><NavLink to ="/Motivation" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >philosophy / <br />motivation</NavLink></li>
          <li><NavLink to ="/Career"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >carrer / <br />my way...</NavLink></li>
          <li className="experience">experience and <br />professional <br />impact</li>
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
        <figure><img id="DCIZOK" src={DCIZertifikatOK} alt="" /></figure>
      
      </div>
      <div className="box8"></div>
      <div className="box9"></div>
      <footer className="box10">&copy; Joachim Ritter</footer>   
    </div>
  </div>
)

    export default Experience