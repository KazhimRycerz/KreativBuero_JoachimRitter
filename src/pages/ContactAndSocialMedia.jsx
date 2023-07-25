import { NavLink } from 'react-router-dom'
import JoachimRitter from '../components/JoachimRitter.js'
import './ContactAndSocialMedia.scss'
import BuchmitLicht from '../Images/buchMitLicht.png'
import Basis from '../Images/1200px-Fingerprint_picture.png'
import Eigth from '../Images/IMG_3679.PNG'


const ContactAndSocialMedia = () => (
  <div className="bg">
    <img className="bgimage" alt="" src="../Images/IMG_1839.PNG" />
    <div className="content">
      <div className="box1"></div>
      <div className="box2">
        <h1 >Contact and Social Media</h1>
      </div>
      <header className="box3">
      <JoachimRitter />
      </header>
      <div className="box4">
        <div>
          <img id="basis" src={Basis} alt="" />
          <img className="eigth" src={Eigth} alt="" />
        </div>
      </div>  
      <div className = "box5" id="box5csm">
        <article className="article_ca">
          <h2>Contact or just follow. You decide. Press <ion-icon name="finger-print-outline"></ion-icon></h2>
          <ul>
            <li><a href="mailto:jritter@via-internet.com"><i alt="" class="fa-regular fa-envelope"></i><p>My e-mail for professional issues...</p></a></li>
            <li><a href="https://github.com/KazhimRycerz/" alt="" rel="noreferrer" target="_blank"><ion-icon name="logo-github"></ion-icon><p>My professional activity in coding...</p></a></li>
            <li><a href="https://www.Linkedin.com/in/joachimr/" alt="" rel="noreferrer" target="_blank"><ion-icon name="logo-Linkedin"></ion-icon><p>My professional network in lighting design...</p></a></li>
            <li><a href="https://www.xing.com/profile/Joachim_Ritter19/" alt="" rel="noreferrer" target="_blank"><ion-icon name="logo-xing"></ion-icon><p>My xing-account - just starting...</p></a></li>
            <li><a href="https://www.instagram.com/ritter_joachim/" alt="" rel="noreferrer" target="_blank"><ion-icon name="logo-instagram"></ion-icon><p>Enjoy my pictures...</p></a></li>
            <li><a href="https://twitter.com/RitterJoachim/" alt="" rel="noreferrer" target="_blank"><ion-icon name="logo-twitter"></ion-icon><p>Some of my opinions...</p></a></li>
            <li><a href="https://www.facebook.com/joachim.ritter.31/" alt="" rel="noreferrer" target="_blank"><ion-icon name="logo-facebook"></ion-icon><p>My private network...just in case...</p></a></li>
            {/* <li><a href="https://www.telegram.com/joachim.rycerz/" alt="" rel="noreferrer" target="_blank"><ion-icon name="logo-telegram"></ion-icon><p>My private network...just in case...</p></a></li> */}
            <li><a href="https://telegram.com/Joachim_Rycerz/" alt="" rel="noreferrer" target="_blank"><ion-icon name="logo-telegram"></ion-icon><p>Another network...</p></a></li>
            <li><a href="https://mastodon.com/@kazhim_rycerz@dju.social/" alt="" rel="noreferrer" target="_blank"><ion-icon name="logo-mastodon"></ion-icon><p>Another network...</p></a></li>
            <li><a href="skype:jritter_43/"><ion-icon name="logo-skype"></ion-icon><p>For deeper collaboration and communication...</p></a></li>
            <li><a href="slack:Joachim Ritter"><ion-icon name="logo-slack"></ion-icon><p>or slacking...</p></a></li>
            <li><ion-icon name="videocam-outline"></ion-icon><p>or zoom...</p></li>
            <li><p>or just the traditional way ... </p></li>
          </ul>
        </article>
      </div>
      <nav className="box6">
        <ul>
          <li><NavLink to ="/Home" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >home /<br /> fingerprint</NavLink></li>
          <li><NavLink to ="/PersonalData" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >personal data</NavLink></li>
          <li><NavLink to ="/Motivation" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >philosophy / <br />motivation</NavLink></li>
          <li><NavLink to ="/Career"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >carrer / <br />my way...</NavLink></li>
          <li><NavLink to ="/Experience"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >experience and <br />professional <br />impact</NavLink></li>
          <li><NavLink to ="/References"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >references</NavLink></li>
          <li><NavLink to ="/MyFuture"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >my future</NavLink></li>
          <li className="contactandsocialmedia">contact and <br />social media</li>
        </ul>
      </nav>
      <div className="box7">
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

    export default ContactAndSocialMedia