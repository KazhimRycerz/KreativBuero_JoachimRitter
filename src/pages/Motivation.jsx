import { NavLink } from 'react-router-dom'
import JoachimRitter from '../components/JoachimRitter.js'
import './Motivation.scss'
import BuchmitLicht from '../Images/buchMitLicht.png'

const Motivation = () => (
  <div className="bg">
      <img className="bgimage" src="../Images/IMG_1839.PNG" alt=""/>
    <div className="content">
      <div className="box1"></div>
      <div className="box2">
        <h1 >Professional philosophy Motivation</h1>
        {/* <p>Why I do what I do</p> */}
      </div>
      <header className="box3">
      <JoachimRitter />
      </header>
      <div className="box4">
        <div>
          <img id="basis" src={require('../Images/1200px-Fingerprint_picture.png')} alt="" />
          <img className="second" src={require('../Images/IMG_3556.PNG')} alt="" />
        </div>
      </div>  
      <div className = "box5" id="box5mp">
        <article className="article_mp">
            <h2>Why I do what I do</h2>
            <div id="motivation_JR">
              <p>Enjoying your professional work sounds very unusual or even crazy. But I am not crazy. I enjoy to fill my live with things I can develop and be satisfied with.</p>
              <p>Working from 8 to 17.00 is not what I believe in. When I caught fire for something and I am really burning to learn and use my skills. </p>
              <p>Mostly I feel attracked by project which are new and not existing on the market. Therefore it is necessary to understand humans, the society and business-structures. I believe in the revolution of the digitalisation, although I am also able to see risks and negative developments which I can deal with and continiously adapt my believes and convictions.   </p>
              <p>Therefore I am also proud of my current career and experiences as a 
              </p>              
                <p>
                  <li>journalist</li>
                  <li>translator</li>
                  <li>managing director</li>
                  <li>event manager</li>
                  <li>museum manager</li>
                  <li>full stack webdeveloper</li>
                </p>
              <p>All of these were of my interest and I believe that they are linked and led to better results in my professional career. And this is not to end as my age and priavte status is not asking me to stop enjoying my professional path...</p>
              
              <div>
                <h3>Certified by 16Personalities:</h3>
                  <a href="https://www.16personalities.com/profiles/ffa70d7bacbb3">My personality test, last made on 13. October 2022</a><br /><br />
                  <p>Result: Commander. 
                    <li>...need a job that gives them freedom to decide what they do, and how they do it</li>
                    <li>...consider themselves ambitious</li>
                    <li>...resist social pressure</li>
                    <li>...be high achievers</li>
                    <li>...enjoy setting goals for improving themselves</li>
                    </p>
              
              </div>
            </div>

        </article>
      </div>
      <nav className="box6">
        <ul>
          <li><NavLink to ="/Home" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >home /<br /> fingerprint</NavLink></li>
          <li><NavLink to ="/PersonalData" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >personal data</NavLink></li>
          <li className="motivation"> philosophy / <br />motivation</li>
          <li><NavLink to ="/Career"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >carrer / <br />my way...</NavLink></li>
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

    export default Motivation