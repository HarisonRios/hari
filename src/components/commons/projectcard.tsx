import "../../styles/_ projectcard.scss";
import {Link } from 'react-router-dom';

function ProjectCard() {
  return (
    <Link to="../../Projects.tsx">
      <div className="item project-card"> 
        <img src="https://wiki.hypixel.net/images/a/ae/SkyBlock_renders_shiny_endstone.gif" alt="Obsidian Effect"/>
        <h2>Projetos</h2>
      </div>
    </Link>
  )
}

export default ProjectCard