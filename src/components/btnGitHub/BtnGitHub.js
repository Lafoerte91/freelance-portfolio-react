import './style.css'
import githubIcon from './gitHub-black.svg'

const BtnGitHub = ({link}) => {
  return (
  <a href={link} className="btn-outline">
    <img src={githubIcon} alt="" />GitHub repo
  </a>
  );
}

export default BtnGitHub;