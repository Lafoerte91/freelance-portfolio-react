import "./styles/main.css"
import sun from "./img/icons/sun.svg"
import moon from "./img/icons/moon.svg"
import vk from "./img/icons/vk.svg"
import instagram from "./img/icons/instagram.svg"
import twitter from "./img/icons/twitter.svg"
import gitHub from "./img/icons/gitHub.svg"
import linkedIn from "./img/icons/linkedIn.svg"
import one from "./img/projects/01.jpg"
import two from "./img/projects/02.jpg"
import three from "./img/projects/03.jpg"
import four from "./img/projects/04.jpg"
import five from "./img/projects/05.jpg"
import six from "./img/projects/06.jpg"

function App() {
  return (
    <div className="App">

        <header className="header">
            <div className="header__wrapper">
              <h1 className="header__title"><strong>Hi, my name is <span>Yakov</span></strong> a frontend developer</h1>
              <div className="header__text">
                <p>with passion for learning and creating.</p>
              </div>
              <a href="#!" className="btn">Download CV</a>
            </div>
        </header>
      
        <main className="section">
          <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
              <li className="project">
                <a href="project-page.html">
                <img src={one} alt="Project img" className="project__img" />
                <h3 className="project__title">Gaming streaming portal</h3>
                </a>
              </li>
              <li className="project">
                <a href="project-page.html">
                <img src={two} alt="Project img" className="project__img" />
                <h3 className="project__title">Video service</h3>
                </a>
              </li>
              <li className="project">
                <a href="project-page.html">
                <img src={three} alt="Project img" className="project__img" />
                <h3 className="project__title">Video portal</h3>
                </a>
              </li>
              <li className="project">
                <img src={four} alt="Project img" className="project__img" />
                <h3 className="project__title">Dating app</h3>
              </li>
              <li className="project">
                <img src={five} alt="Project img" className="project__img" />
                <h3 className="project__title">Landing</h3>
              </li>
              <li className="project">
                <img src={six} alt="Project img" className="project__img" />
                <h3 className="project__title">Gaming community</h3>
              </li>
            </ul>
          </div>
        </main>

        <footer className="footer">
          <div className="container">
            <ul className="social">
              <li className="social__item">
                <a href="#!"><img src={vk} alt="Link" /></a>
              </li>
              <li className="social__item">
                <a href="#!"><img src={instagram} alt="Link" /></a>
              </li>
              <li className="social__item">
                <a href="#!"><img src={twitter} alt="Link" /></a>
              </li>
              <li className="social__item">
                <a href="#!"><img src={gitHub} alt="Link" /></a>
              </li>
              <li className="social__item">
                <a href="#!"><img src={linkedIn} alt="Link" /></a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2024 frontend-dev.com</p>
            </div>
          </div>
        </footer>

    </div>
  );
}

export default App;
