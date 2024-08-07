import img from '../img/projects/02-big.jpg'
import BtnGitHub from '../components/btnGitHub/BtnGitHub'

const Project = () => {
  return (
  <main className="section">
    <div className="container">
      <div className="project-details">
        <h1 className="title-1">Video service</h1>
        <img src={img} alt="" className="project-details__cover" />
        <div className="project-details__desc">
          <p>Skills: React, Node.js, MongoDB</p>
          <BtnGitHub link="https://github.com" />
        </div>
      </div>
    </div>
  </main>
  );
}

export default Project;