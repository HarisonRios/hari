import "../../styles/_introcard.scss";
import { FaLinkedinIn } from "react-icons/fa";
import { linkedin_url } from "../partials/constant";

function Introcard() {
  return (
    <div className="item intro-card"> 
      <div className="introduction">
        <h1>Harison</h1>
        <h2>Front-end Web Developer</h2>
        <a target="_blank" href={linkedin_url}>
          <FaLinkedinIn/>
        </a>
      </div>
    </div>
  )
}

export default Introcard