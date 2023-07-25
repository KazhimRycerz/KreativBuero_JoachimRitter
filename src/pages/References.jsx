import { NavLink, Link } from "react-router-dom";
import JoachimRitter from "../components/JoachimRitter.js";
import "./References.scss";
import BuchmitLicht from "../Images/buchMitLicht.png";
import Basis from "../Images/1200px-Fingerprint_picture.png";
import Seventh from "../Images/IMG_3554.PNG";
import DCIZertifikatOK from "../Images/Zertifikat_DCI_Joachim Ritter.jpg";
import GuideAwardCertificate from "../Images/GuideAwardCertificate.jpg";
import LingodaCertificat from "../Images/LingodaCertificat.jpg";
import DCI_certificate_webdeveloper_en from "../Images/DCI_certificate_webdeveloper_en.jpg";
import { useState } from "react";

const References = () => {
  
  const [raiseImage, setRaiseImage] = useState("");

  return(
    <div className="bg">
      <img className="bgimage" src="../Images/IMG_1839.PNG" alt="" />
      <div className="content">
        <div className="box1"></div>
        <div className="box2">
          <h1>References</h1>
        </div>
        <header className="box3">
          <JoachimRitter />
        </header>
        <div className="box4">
          <div>
            <img id="basis" src={Basis} alt="" />
            <img className="seventh" src={Seventh} alt="" />
          </div>
        </div>
        <div className="box5" id="box5re">
          <article className="article_re">
            <h2>References, certificats, honors, competitions</h2>
            <div id="references_JR">
              <h3>My personality test</h3>
              <div className="apparisal">
                <h4>Classified as "Commander", certified by 16Personalities</h4>
                <a href="https://www.16personalities.com/profiles/ffa70d7bacbb3" target="_blank" >Last made on 13. October 2022</a>
                <p>
                  Insights about commanders.
                  <li>
                    ...need a job that gives them freedom to decide what they do,
                    and how they do it
                  </li>
                  <li>...consider themselves ambitious</li>
                  <li>...resist social pressure</li>
                  <li>...be high achievers</li>
                  <li>...enjoy setting goals for improving themselves</li>
                </p>
              </div>
              <img className="Trenner" alt="" src={Basis} />
              <h3>Special projects</h3>
              <div className="apparisal">
                <h4>Competition</h4>
                <p>
                  2nd price of Guide 2022 - Startup and Innopreneurship University
                  Duisburg-Essen, supported and funded by the German Ministery for
                  Economy and Climate Protection and eXist - Startups from inside
                  the Industry.{" "}
                </p>
                <p>
                  Project submitted: Qanat 21 - a watermanagementsystem to
                  minimize extreme weather phenomena and minimize the consequences
                  of extreme weather conditions and water shortage
                </p>
              </div>
              <img className="Trenner" alt="" src={Basis} />
              <h3>Fellowship</h3>
              <div className="apparisal">
                <h4>Professional Lighting Designers' Asscoiation</h4>
                <p>Honory Fellow Membership since 2007</p>
                <h4>Member of the DJV - Deutscher Jpurnalistenverband</h4>
                <p>Silver medal for 25 years of membership</p>
              </div>
              <img className="Trenner" alt="" src={Basis} />
              <h3>Some former clients</h3>
              <div className="apparisal">
                <h4>Copywriting and translations</h4>
                <p>
                  Ansorg, Bertelsmann AG, Bertelsmann Fachzeitschriften, Erco,
                  Flachgals, Pilkington, Selux, Thorn, Buschfeld Licht, Miele,
                  Zumtobel and others.{" "}
                </p>
              </div>
              <img className="Trenner" alt="" src={Basis} />
              <h3>
                Some appraisals English lessons @ Lingoda <br /> Evaluations after
                the English lessons C2-Level
              </h3>
              <div className="apparisal">
                <h4>Lingoda - Judith 9.September 2022</h4>
                <q>
                  {" "}
                  Joachim, it was a pleasure talking with you. Your use of the
                  English language was clear and fairly fluent. You used
                  appropriate vocabulary/phrases and your grammar was accurate. It
                  was interesting to hear your thoughts and opinions on the
                  environment as well as the current events in Britain. There were
                  no obvious areas of weakness so continue to practice as this
                  will further strengthen your fluency. Well done.{" "}
                </q>
                <p>
                  👍 you were good at: active participant, Clear expressions,
                  Grammatical control
                </p>
                <p>☝️area(s) you can develop: other</p>
              </div>

              <div className="apparisal">
                <h4>Lingoda - Daniel 9.September 2022</h4>
                <q>
                  {" "}
                  An excellent class today as you expressed yourself clearly,
                  accurately, and with good diction. You had no problems keeping
                  the conversation going and it was a pleasure learning more about
                  where you live. Great work!
                </q>
                <p>
                  👍 you were good at: active participant, comprehension, speaking
                  flow
                </p>
                <p>☝️area(s) you can develop: other</p>
              </div>

              <div className="apparisal">
                <h4>Lingoda - Bruce 14.August 2022</h4>
                <q>
                  {" "}
                  you did an excellent job in our class today! You were able to
                  argue your points with good examples and clear language, and it
                  was very interesting for me to hear your points of view and
                  perspective. Your intonation in English is already quite good.
                  ... You show good promise in your mastery of English, and I
                  truly enjoyed teaching you today...
                </q>
                <p>
                  👍 you were good at: active participatian, clear expressions,
                  speaking flow
                </p>
                <p>☝️️area(s) you can develop: other</p>
              </div>

              <div className="apparisal">
                <h4>Lingoda - Maura 19.August 2022</h4>
                <q>
                  {" "}
                  It was great to see you again today. You have a high degree of
                  accuracy and present your views confidently. ...
                </q>
                <p>
                  👍 you were good at: active participatian, grammatical control,
                  speaking flow
                </p>
                <p>☝️area(s) you can develop: vacabluary usage</p>
              </div>

              <div className="apparisal">
                <h4>Lingoda - Maura 29.July 2022</h4>
                <q>
                  {" "}
                  It was a pleasure to speak to you today Joachim. You have first
                  rate speaking / listening skills and you expressed your opinions
                  clearly and confidently with a high degree of accuracy. I was
                  impressed by your extensive knowledge of climate change ...
                  Thank you for your contribution to the lesson; it was most
                  instructive.
                </q>
                <p>
                  👍 you were good at: active participatian, clear expressions,
                  speaking flow
                </p>
                <p>☝️area(s) you can develop: vacabluary usage</p>
              </div>

              <div className="apparisal">
                <h4>Lingoda - Benjamin 26.July 2022 </h4>
                <q>
                  {" "}
                  Great participation. Spoke with fluency and articulation. You
                  were able to comprehend and explain your thoughts very
                  thoroughly.
                </q>
                <p>
                  👍 you were good at: Active participatian, Clear expressions,
                  Speaking flow
                </p>
                <p>☝️ area(s) you can develop: Other</p>
              </div>

              <div className="apparisal">
                <h4>Lingoda - Callie 25.July 2022 </h4>
                <q>
                  {" "}
                  Thank you for your active participation throughout the lesson
                  and for your highly interesting input. I'm going to working on
                  switching out my light bulbs thanks to you! I want to commend
                  you on your speaking flow, impressive vocabulary usage,
                  comprehension, and overall handle on English. You speak with
                  confidence and ease and it's quite easy to forget you're not a
                  native speaker... Keep up the fantastic work!
                </q>
                <p>
                  👍 you were good at: Comprehension, Vocabulary usage, speaking
                  flow
                </p>
                <p>☝️ area(s) you can develop: Pronunciation</p>
              </div>

              <div className="apparisal">
                <h4>Lingoda - Anna 15.July 2022 </h4>
                <q>
                  {" "}
                  Great job today Joachim. In the lesson we had an open
                  discussion. You spoke very well on a range of topics. You spoke
                  clearly and fluently and had no problem speaking in depth on the
                  topics and using appropriate vocabulary. Keep practicing
                  regularly to maintain your speaking ability. Well done!
                </q>
                <p>
                  you were good at: active participatian, Pronunciation, speaking
                  flow
                </p>
                <p>area(s) you can develop: Other</p>
              </div>

              <div className="apparisal">
                <h4>Lingoda - Jade 15.July 2022</h4>
                <q>
                  It was great to meet you today. You have excellent English
                  skills and used them superbly in our open discussion. We covered
                  a range of topic and you always expressed your opinions in a
                  fluid manner.
                </q>
                <p>
                  👍 you were good at: active participatian, Clear expressions,
                  Vocabulary usage
                </p>
                <p>☝️ area(s) you can develop: Other</p>
              </div>

              <div className="apparisal">
                <h4>Lingoda - Levi 17.June 2022</h4>
                <q>
                  Your English skills rival those of native speakers, Joachim! You
                  communicate your thoughts and can make jokes and use sarcasm in
                  English very well. These are all signs of fluency. You made very
                  few pronunciation mistakes and this was just due to not reading
                  the word carefully. Slow down your reading a little bit to make
                  sure you are seeing every word correctly and this will help your
                  pronunciation and flow on those few instances you would've made
                  a pronunciation mistake. Keep up the great work!
                </q>
                <p>
                  👍 you were good at: Active participatian, Clear expressions,
                  comprehention
                </p>
                <p>☝️ area(s) you can develop: Other</p>
              </div>

              <div className="apparisal">
                <h4>Lingoda - Lilia vom 13. May 2022</h4>
                <q>
                  Joachim--was able to consistency stay engaged, effectively
                  answer questions and communicated well his concerns over delayed
                  and ineffective global policies to curb emissions.{" "}
                </q>
              </div>

              <div className="apparisal">
                <h4>Lingoda - Janel vom 6. May 2022</h4>
                <q>
                  Excellent work today! We revised consumerism and its effects on
                  the country and market. Great work today Joachim! You have a
                  good command of the English language. Your speaking fluency and
                  pronunciation is very good, as is your reading comprehension. …
                  Great progress made today.
                </q>
              </div>

              <div className="apparisal">
                <h4>Lingoda - Grant vom 29. April 2022</h4>
                <q>
                  Well done and thank you Joachim for the great lesson. I am very
                  inspired by what you are doing. I will speak of you for many
                  years to come. Have a super weekend and take care until next
                  time. Something different for you to read.
                </q>
              </div>

              <div className="apparisal">
                <h4>Lingoda - Simon vom 1. April 2022</h4>
                <q>
                  This was a great conversation, Joachim. We spoke easily and
                  fluently with insight about work, lighting architecture, trying
                  to find a human legacy in the midst of a world bent on
                  destroying itself, and the nature of hope and creativity. A
                  wide-ranging and fascinating discussion. And a pleasure to speak
                  with you.
                </q>
              </div>
            </div>
          </article>
        </div>
        <nav className="box6">
          <ul>
            <li>
              <NavLink
                to="/Home"
                onMouseEnter="lightTopicOn()"
                onMouseLeave="lightTopicOff()"
              >
                home /<br /> fingerprint
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/PersonalData"
                onMouseEnter="lightTopicOn()"
                onMouseLeave="lightTopicOff()"
              >
                personal data
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Motivation"
                onMouseEnter="lightTopicOn()"
                onMouseLeave="lightTopicOff()"
              >
                philosophy / <br />
                motivation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Career"
                onMouseEnter="lightTopicOn()"
                onMouseLeave="lightTopicOff()"
              >
                carrer / <br />
                my way...
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Experience"
                onMouseEnter="lightTopicOn()"
                onMouseLeave="lightTopicOff()"
              >
                experience and <br />
                professional <br />
                impact
              </NavLink>
            </li>
            <li className="reference">references</li>
            <li>
              <NavLink
                to="/MyFuture"
                onMouseEnter="lightTopicOn()"
                onMouseLeave="lightTopicOff()"
              >
                my future
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ContactAndSocialMedia"
                onMouseEnter="lightTopicOn()"
                onMouseLeave="lightTopicOff()"
              >
                contact and <br />
                social media
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="box7">
          <figure className="box7_figures_buch" hover-text="NN">
            <img src={BuchmitLicht} alt="" />
          </figure>
          <figure className="box7_figures_buch">
            <img src={BuchmitLicht} alt="" />
          </figure>
          <figure className="box7_figures" id="DCICertificateWebdeveloper" hover-text="DCI Certificate full stack webdeveloper 2022">
            <img src={DCI_certificate_webdeveloper_en} alt="" />
          </figure>
          <figure className="box7_figures" id="lingoda" hover-text="Lingoda certificat on 60 hours C2 module in English"> 
            <img src={LingodaCertificat} alt="Lingoda certificat"/>
          </figure>
          <figure className="box7_figures" id="guide" hover-text="Guide-Competition 2022 Universität Duisburg-Essen">
            <img src={GuideAwardCertificate} alt="Guide-Competition 2022 Universität Duisburg-Essen"/>
          </figure>
          <figure className= "box7_figures"
          id="DCICertificat" hover-text="DCI Certificate WebBasics 2021">
            <img src={DCIZertifikatOK} alt="DCICertificat 2021" />
          </figure>
        </div>
        <div className="box8"></div>
        <div className="box9"></div>
        <footer className="box10">&copy; Joachim Ritter</footer>
      </div>
    </div>
  );
}

export default References;
