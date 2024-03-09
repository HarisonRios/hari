import "../../styles/_teccards.scss";


import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap 
} from "react-icons/fa";

import { 
  SiVite,
  SiNextdotjs,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiVisualstudiocode
 } 
  from "react-icons/si";


function TecCard() {
  return (
    
    <div className="item tec-card">
      <div className="tecnolgy">
        <FaHtml5 size={25}/>
        <FaCss3Alt size={25}/>
        <SiJavascript size={25}/>
        <SiTypescript size={25}/>
        <FaReact size={25}/>
        <FaNodeJs size={25} />
        <SiVite size={25}/>
        <SiNextdotjs size={25} />
        <FaSass size={25}/>
        <FaPhp size={25} />
        <FaGitAlt size={25}/>
        <FaGithub size={25}/>
        <FaBootstrap size={25}/>
        <SiMysql size={25}/>
        <SiVisualstudiocode size={25} />
      </div>
		</div>
  
  )
}

export default TecCard
