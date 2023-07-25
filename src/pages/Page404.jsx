import { NavLink } from 'react-router-dom'
import './Page404.scss'

const Home = () => (
    <div className="bg">
      <img className="bgimage" src="../Images/IMG_1839.PNG" alt=""/>
      <div className="content">
        <div className="box1"></div>
        <div className="box2">
          
        </div>
        <header className="box3">
          
          
        </header>
        <div className="box4">
          <div>
            <img id="basis" src="./Images/1200px-Fingerprint_picture.png" alt="" />
            <img id="first" src="./Images/IMG_3561.PNG" alt="" />
            <img id="second" src="./Images/IMG_3556.PNG" alt="" />
            <img id="third" src="./Images/IMG_3557.PNG" alt="" />
            <img id="fourth" src="./Images/IMG_3558.PNG" alt="" />
            <img id="fifth" src="./Images/IMG_3559.PNG" alt="" />
            <img id="sixth" src="./Images/IMG_3560.PNG" alt="" />
            <img id="seventh" src="./Images/IMG_3554.PNG" alt="" />
            <img id="eigth" src="./Images/IMG_3679.PNG" alt="" />
            <img id="ninth" src="./Images/IMG_3680.PNG" alt="" />
          </div>
        </div>
        <div className="box5" id="box5home">
          <div>
            <h2 id="textviernullvier">
                404 page not found <br /> <br /> How is that possible? Try again and choose from the list right
            </h2>
          </div>
        </div>
        <nav className="box6">
        <ul>
        <li><NavLink to ="/Home" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >home /<br /> overview</NavLink></li>
          <li><NavLink to ="/PersonalData" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >personal data</NavLink></li>
          <li><NavLink to ="/Motivation" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >philosophy / <br />motivation</NavLink></li>
          <li><NavLink to ="/Career"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >carrer / <br />my way...</NavLink></li>
          <li><NavLink to ="/Experience"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >experience and <br />professional <br />impact</NavLink></li>
          <li><NavLink to ="/References"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >references</NavLink></li>
          <li><NavLink to ="/MyFuture"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >my future</NavLink></li>
          <li><NavLink to ="/ContactAndSocialMedia" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >contact and <br />social media</NavLink></li>
        </ul>
      </nav>
        
        <div className="box8"></div>
        <div className="box9"></div>
        <footer className="box10">&copy; Joachim Ritter</footer>
        
      </div>
    </div>
)

    export default Home