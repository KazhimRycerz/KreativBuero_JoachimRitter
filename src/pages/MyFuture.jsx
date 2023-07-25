import { NavLink } from 'react-router-dom'
import JoachimRitter from '../components/JoachimRitter.js'
import './MyFuture.scss'
import BuchmitLicht from '../Images/buchMitLicht.png'
import Basis from '../Images/1200px-Fingerprint_picture.png'
import Sixth from '../Images/IMG_3560.PNG'

const MyFuture = () => (
  <div className="bg">
    <img className="bgimage" src="../Images/IMG_1839.PNG" alt="" />
    <div className="content">
      <div className="box1"></div>
      <div className="box2">
        <h1 >Where I see my future</h1>
        {/* <p>The journey is the reward</p> */}
      </div>
      <header className="box3">
      <JoachimRitter />
      </header>
      <div className="box4">
        <div>
          <img id="basis" src={Basis} alt="" />
          <img className="sixth" src={Sixth} alt="" />
        </div>
      </div>  
      <div className = "box5" id="box5mf">  
        <article className="article_mf">
            <h2>The journey is the reward</h2>
            <div id="future_JR">
              <p> I still enjoy developing new ideas and accept challenges. My philosophy is "living to work instead of working to survive". Nevertheless I am realistic and evaluate before I accept a challenge. I am able to analyse and make realistic decisions.</p><br />
              <p> In this aspect webdesign and webdevelopment is a consequent step. From the conventional communication and printing technology of the last century / millenium now being able to be a part of the digital revolution is my basis for the upcoming years. Seeing opportunities and realising new developments is just my thing.</p>
              <p>Webdesign is the consequent part of my professional career and personal development.</p>
              <p>Nevertheless, I am not fixed to this one path. I believe that future offers several paths for me to experiencemy philosophy and I am open to choose the most existing one...</p>
            </div>
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
          <li className="myfuture"> my future</li>
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

    export default MyFuture