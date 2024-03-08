import "../../styles/_introcard.scss";
import { FaLinkedinIn } from "react-icons/fa";

function Introcard() {
  return (
    <div className="item intro-card"> 
      <div className="introduction">
        <h1>Harison</h1>
        <h2>Front-end Web Developer</h2>
        <a target="_blank" href="https://www.linkedin.com/in/harison-rios-046731235/">
          <FaLinkedinIn/>
        </a>
      </div>
    </div>
  )
}

export default Introcard