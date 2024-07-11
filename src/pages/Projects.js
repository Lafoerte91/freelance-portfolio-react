import one from "./../img/projects/01.jpg"
import two from "./../img/projects/02.jpg"
import three from "./../img/projects/03.jpg"
import four from "./../img/projects/04.jpg"
import five from "./../img/projects/05.jpg"
import six from "./../img/projects/06.jpg"

const Projects = () => {
  return (
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
  );
}

export default Projects;