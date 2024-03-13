import "../../styles/_ projectcard.scss";
import {Link } from 'react-router-dom';

function ProjectCard() {
  return (
    <Link to="../../Projects.tsx">
      <div className="item project-card"> 
        <img src="https://wiki.hypixel.net/images/4/4d/SkyBlock_items_enchanted_ender_pearl.gif" alt="Falha"/>
        <h2>Projetos</h2>
      </div>
    </Link>
  )
}

export default ProjectCard